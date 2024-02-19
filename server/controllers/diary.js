import mongoose from "mongoose";
import Diary from "../models/diary.js";
import User from "../models/user.js";

export const createDiary = async (req, res) => {
  try {
    const { date, title, content, userId, mood } = req.body;
    const userID = new mongoose.Types.ObjectId(req.user.userId); // String'i ObjectId'ye çevir

    if (userId !== req.user.userId)
      return res.json({ error: "User does not match" });

    const anyDiaryAtThisDay = await Diary.findOne({
      date,
      userId: userID,
    });

    const user = await User.findOne({
      _id: userId,
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    if (anyDiaryAtThisDay)
      return res
        .status(400)
        .json({ message: "There is already a diary at this date" });

    const createdDiary = await Diary.create({
      date,
      title,
      content,
      userId,
      mood,
    });

    const newDiaryId = createdDiary._id;

    await User.findByIdAndUpdate(
      userId,
      { $push: { diaries: newDiaryId } },
      { new: true }
    );

    res.status(201).json({ message: "Created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteDiary = async (req, res) => {
  const diaryId = req.params.id;
  const userId = req.user.userId; // String'i ObjectId'ye çevir

  const diary = await Diary.findById({
    _id: diaryId,
  });

  // check userId and diary.userId to match
  if (diary.userId.toString() !== userId)
    return res.status(404).json({ message: "Diary not found" });

  await Diary.findByIdAndDelete(diaryId);
  res.json({ message: "Diary deleted successfully" });
};

export const updateDiary = async (req, res) => {
  const diaryId = req.params.id;
  const { title, content } = req.body;
  const userId = req.user.userId;
  const user = await User.findOne({
    _id: userId,
  });

  if (!user || user._id.toString() !== userId)
    return res.status(404).json({ error: "User not found" });

  const updatedDiary = await Diary.findByIdAndUpdate(
    diaryId,
    { title, content },
    { new: true } // Güncellenmiş veriyi döndürmek için {new: true} seçeneğini kullanırız
  );

  if (!updatedDiary) {
    return res.status(404).json({ error: "Diary not found" });
  }

  res.status(200).json({ message: "Diary updated successfully", updatedDiary });
};

export const getDiary = async (req, res) => {
  const diaryId = req.params.id;

  const diary = await Diary.findById({
    _id: diaryId,
  });

  if (!diary)
    return res.status(404).json({ error: "There is no diary available" });

  res.status(200).json({ diary });
};

export const getAllDiaries = async (req, res) => {
  const userId = req.user.userId;

  const allDiaries = await Diary.find({ userId }).sort({ date: -1 });
  // tarihe göre azalan şekilde getirir

  if (!allDiaries)
    return res.status(404).json({ error: "There is no diary available" });

  res.status(200).json({ allDiaries });
};

export const getDiaryByDate = async (req, res) => {
  const { date } = req.params;
  console.log(req.params);

  const userId = req.user.userId;
  const user = await User.findById({
    _id: userId,
  });

  if (!user) return res.status(404).json({ error: "User not found!" });

  const diary = await Diary.findOne({
    date,
    userId,
  });

  if (!diary) return res.status(404).json({ error: "Diary not found!" });

  res.status(200).json({ diary });
};
