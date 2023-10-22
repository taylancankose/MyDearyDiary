import { Router } from "express";
import { checkToken, fileParser } from "../middleware/auth.js";
import {
  deleteUser,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/auth.js";
import {
  authGoogle,
  failure,
  failureRedirect,
  isLoggedIn,
  sucessFullRedirect,
} from "../middleware/auth.js";

const router = Router();

// Login
router.post("/login", login);

// Register
router.post("/register", register);

// Update
router.post("/update", checkToken, fileParser, updateProfile);

// Logout Profile
router.post("/logout", checkToken, logout);

// Delete Profile
router.delete("/delete", checkToken, deleteUser);

router.get("/google/failure", isLoggedIn, failure);

// Google Auth Profile
router.get("/google", authGoogle);

router.get("/google/callback", failureRedirect, sucessFullRedirect);

export default router;
