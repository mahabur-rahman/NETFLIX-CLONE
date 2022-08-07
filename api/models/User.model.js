const mongoose = require("mongoose");

// userSchema
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// create a collection | model
const UserModel = mongoose.model("User", UserSchema);

// export
module.exports = UserModel;
