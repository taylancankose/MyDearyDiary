import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema;

const diarySchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
    },
  },
  { timestamps: true }
);

diarySchema.index({ date: 1, userId: 1 }, { unique: true });

export default model("Diary", diarySchema);
