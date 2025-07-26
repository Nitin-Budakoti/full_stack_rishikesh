import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import { generateToken } from "../utils/generateToken";

export const signup = async (req: Request, res: Response):  Promise<any> => {
  const { name, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });

    const token = generateToken(newUser._id.toString());
    res.status(201).json({ token, user: { name, email } });
  } catch (err) {
    res.status(500).json({ msg: "Signup failed", error: err });
  }
};

export const login = async (req: Request, res: Response):  Promise<any> => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !user.password)
      return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });

    const token = generateToken(user._id.toString());
    res.status(200).json({ token, user: { name: user.name, email } });
  } catch (err) {
    res.status(500).json({ msg: "Login failed", error: err });
  }
};
