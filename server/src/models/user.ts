import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // optional for Google users
  googleId: { type: String }, // set if signed in with Google
});

export const User = mongoose.model("User", userSchema);
