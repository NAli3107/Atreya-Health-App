const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  creator: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  selectedFile: {
    type: String,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Posts = model('Posts', postSchema);

module.exports = Posts;
