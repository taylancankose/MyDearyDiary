import cloudinary from "../cloud/index.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export const register = async (req, res) => {
  try {
    const { username, password, email, birthDay, gender, profilePhoto } =
      req.body;

    await User.create({
      email,
      username,
      password,
      birthDay,
      gender,
      profilePhoto,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    // body den pw yi ve maili al
    const { email, password } = req.body;

    // email adresinden db deki userı bul
    const user = await User.findOne({
      email,
    });

    //user var mı diye kontrole et
    if (!user) return res.status(403).json({ error: "User not found" });

    // yazılan pw ile db deki pw yi karşılaştır
    const pwCheck = await user.comparePassword(password);

    // pw ler uyuşuyor mu diye kontrol et
    if (!pwCheck)
      return res.status(403).json({ error: "Password is not correct" });

    // pw ler uyuşuyor ise tokenini üret
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // tokeni db deki tokense pushladık
    user.tokens = token;

    // değişiklik yaptığımız için save edelim
    await user.save();

    res.status(201).json({
      profile: {
        name: user.username,
        email: user.email,
        birthDay: user?.birthDay,
        gender: user?.gender,
      },
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(404).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const { username } = req.body;
  const newName = username[0];
  const files = req.files?.profilePhoto;
  const profilePhoto = files[0];

  const user = await User.findById(req.user.userId);
  if (!user) throw new Error("something went wrong, user not found!");

  if (typeof newName !== "string")
    return res.status(422).json({ error: "Invalid name!" });

  if (newName.trim().length < 3)
    return res.status(422).json({ error: "Invalid name!" });

  user.username = newName;

  if (profilePhoto) {
    if (user.profilePhoto?.publicId) {
      await cloudinary.uploader.destroy(user.profilePhoto.publicId);
    }

    const { secure_url, public_id } = await cloudinary.uploader.upload(
      profilePhoto.filepath,
      {
        width: 500,
        height: 500,
        crop: "thumb",
        gravity: "face",
      }
    );

    user.profilePhoto = { url: secure_url, publicId: public_id };

    await user.save();

    res.json({
      profile: {
        id: user._id,
        name: user.username,
        email: user.email,
        profilePhoto: user.profilePhoto?.url,
        gender: user.gender,
        birthDay: user.birthDay,
      },
    });
  }
};

export const logout = async (req, res) => {
  const user = await User.findById(req.user.userId);

  if (!user) throw new Error("Something went wrong, user not found");

  user.tokens = null;

  await user.save();

  res.json({ success: true });
};

export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndRemove(req.user.userId);

  if (!user) throw new Error("Something went wrong, user not found");

  res.json({ message: "Account deleted successfully" });
};
