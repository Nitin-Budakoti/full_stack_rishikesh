// src/config/email.ts
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,     // ✅ must match env
    pass: process.env.EMAIL_PASS,     // ✅ must be app password
  },
});

export default transporter;
