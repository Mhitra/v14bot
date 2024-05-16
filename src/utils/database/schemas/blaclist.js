import { Schema, model } from "mongoose";

const blacklistSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
 },
 stuff: {
    type: String,
    required: true,
  },

reaction: {
    type: String,
  },


});

export default model("blacklist", blacklistSchema);
