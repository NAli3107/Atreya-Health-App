const { User, Posts } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { GraphQLScalarType, Kind } = require('graphql');

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
      return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
      }
      return null; // Invalid hard-coded value (not an integer)
    },
  }),
  Query: {
    users: async () => {
      return User.find().populate("posts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("posts");
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Posts.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Posts.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = User.findOne({ _id: context.user._id }).select(
          "-__v-password"
        );
        console.log(userData, "from query in resolvers");
        return userData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      console.log("from login", user);
      return { token, user };
    },
    createPost: async (parent, { title, message }, context) => {
      if (context.user) {
        const newPost = await Posts.create({
          title,
          message,
          creator: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: newPost._id } },
          { returnNewDocument: true }
        );

        console.log(newPost);
        return newPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  //   editPost: async (parent, { postId, title, message, creator }, context) => {
  //     if (context.user) {
  //       const updatePost = await User.findOneAndUpdate(
  //         { _id: postId },
  //         { $set: { title, message, creator } },
  //         { new: true }
  //       );
  //       return updatePost;
  //     }
  //   },
  //   removePost: async (parent, { postId }, context) => {
  //     if (context.user) {
  //       const deletePost = await Posts.findOneAndDelete({
  //         _id: postId,
  //         creator: context.user.username,
  //       });

  //       await User.findOneAndUpdate(
  //         { _id: context.user._id },
  //         { $pull: { posts: deletePost._id } }
  //       );
  //       return deletePost;
  //     }
  //     throw new AuthenticationError("You need to be logged in!");
  //   },
  },
};

module.exports = resolvers;
