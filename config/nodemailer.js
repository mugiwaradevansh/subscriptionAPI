import nodemailer from "nodemailer";

import { EMAIL_PASSWORD } from "./env.js";

export const accountEmail = "devpateldrive@gmail.com";

const transporter =
  EMAIL_PASSWORD &&
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: accountEmail,
      pass: EMAIL_PASSWORD,
    },
  });

export const sendMailTransport =
  transporter ||
  nodemailer.createTransport({
    streamTransport: true,
    newline: "unix",
    buffer: true,
  });

export default sendMailTransport;