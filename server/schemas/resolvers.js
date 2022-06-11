const { User, Posts } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
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
    createPost: async (parent, { title, message, creator, selectedFile }, context) => {
      if (context.user) {
        const newPosts = await Posts.create({
          title,
          message,
          creator,
          selectedFile,
          creator: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { test: 'testes' } },
          { returnNewDocument: true }
        );

        console.log(newPosts)
        return {
          ...newPosts,
          postId: newPosts._id
        };
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // editPost: async (parent, { postId }, context) => {
    //   if (context.user) {
    //     const removePosts = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { } },
    //       { new: true }
    //     );
    //     return removePosts;
    //   }
    // },
    // removePost: async (parent, { postId }, context) => {
    //   if (context.user) {
    //     const removePost = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: {  } },
    //       { new: true }
    //     );
    //     return removePost;
    //   }
    // },
    // likePost: async (parent, { postId }, context) => {
    //   if (context.user) {
    //     const likePost = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: {  } },
    //       { new: true }
    //     );
    //     return likePost;
    //   }
    // },
  },
};

module.exports = resolvers;
