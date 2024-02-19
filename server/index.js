import { checkToken, isLoggedIn, successLogin } from "./middleware/auth.js";
import diaryRouter from "./routers/diary.js";
import authRouter from "./routers/auth.js";
import session from "express-session";
import "./middleware/googleAuth.js";
import passport from "passport";
import express from "express";
import "./db/index.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const corsOption = {
  origin: ["http://localhost:4000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOption));
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Oturum anahtarınızı buraya ekleyin
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));

app.use("/auth", authRouter);
app.use("/diary", checkToken, diaryRouter);
app.get("/home", isLoggedIn, successLogin);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
