const { User } = require('../models');

const resolvers = {
  Query: {
    me: async () => {
      return User.find({});
    },
  },
  Mutation: {
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});
      return user;
    },
    addUser: async (parent, args) => {
        const user = await User.create(args);
        return user;
      },
  },
  
};

module.exports = resolvers;