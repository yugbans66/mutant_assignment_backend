const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    skills: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
