const { Schema } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  creator: { String },
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

module.exports = postSchema;