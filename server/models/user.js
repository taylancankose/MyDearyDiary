import { compare, hash } from "bcrypt";
import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    birthDay: {
      type: Date,
    },
    gender: {
      type: String,
    },
    profilePhoto: {
      type: Object,
      url: String,
      publicId: String,
    },
    googleId: {
      type: String,
    },
    diaries: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Diary",
      },
    ],
    futureNotes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "FutureNote",
      },
    ],
    tokens: String,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  // hash the token
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (password) {
  const result = await compare(password, this.password);
  return result;
};

export default model("User", userSchema);
