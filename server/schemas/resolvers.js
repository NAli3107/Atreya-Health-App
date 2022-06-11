const { User } = require('../models');
const { AuthenticationError} = require ("apollo-server-express")
// const { signToken } = require("../schemas/utils/auth");

const resolvers = {
  Query: {
   me: async (parent, args, context) => {
      if (context.user) {
        const userData = User.findOne({ _id: context.user._id }).select(
          "-__v-password"
        );
        console.log(userData, "from query in resolvers")
        return userData;
      }
      throw new AuthenticationError("You need to be logged in!");
  },
},
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      // const token = signToken(user);
      // return { token, user };
      return {user};
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      // if (!correctPw) {
      //   throw new AuthenticationError("Incorrect credentials");
      // }

      // const token = signToken(user);
      console.log('from login', user);
      return { user };
    },
  },
  
};

module.exports = resolvers;