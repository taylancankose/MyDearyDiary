import formidable from "formidable";
import jwt from "jsonwebtoken";
import passport from "passport";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export const checkToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization?.split("Bearer ")[1];
  if (!token) return res.status(403).json({ error: "Unauthorized request" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });

    if (decoded.exp <= Date.now() / 1000)
      return res.status(401).json({ error: "There is no token available" });

    req.user = decoded;

    next();
  });
};

export const fileParser = async (req, res, next) => {
  // content type multipart/form-data olmalı
  // handle the file upload (avatar gibi konular)
  // content type multipart/form-data değilse
  if (!req.headers["content-type"]?.startsWith("multipart/form-data;"))
    return res.status(422).json({ error: "Only accepts form-data!" });

  const form = formidable({ multiples: false });

  form.parse(req, (err, fields, files) => {
    if (err) return next(err);

    req.body = fields;
    req.files = files;

    next();
  });
};

export const authGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const failureRedirect = passport.authenticate("google", {
  failureRedirect: "/auth/google/failure",
});

export const sucessFullRedirect = async (req, res) => {
  // Google doğrulaması başarılı oldu, kullanıcı bilgilerini alabiliriz
  // req.user burada mevcut olmalı
  // Google doğrulaması başarılı oldu, kullanıcı bilgilerini alabiliriz
  const { id, displayName, emails, photos, gender } = req.user;

  // Bu bilgileri MongoDB'ye kaydedebiliriz
  try {
    const user = await User.findOneAndUpdate(
      { googleId: id },
      {
        $set: {
          displayName: displayName,
          email: emails[0].value,
          profilePhoto: photos[0].value,
          gender: gender,
        },
      },
      { upsert: true, new: true } // upsert: eğer kullanıcı bulunamazsa yeni bir kullanıcı oluştur
    );

    res.redirect("/home");
  } catch (error) {
    // MongoDB kaydedilirken bir hata oluştu
    console.error(error);
    res.json({ error: "Veritabanına kaydedilirken hata oluştu" });
  }
};

export const failure = (req, res) => {
  res.json({ error: "Something went wrong!" });
};

export const successLogin = (req, res) => {
  const user = req.user;

  res.send(`Hello ${user.displayName}`);
};

export const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};
