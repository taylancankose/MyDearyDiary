import { Router } from "express";
import {
  createDiary,
  deleteDiary,
  getAllDiaries,
  getDiary,
  getDiaryByDate,
  updateDiary,
} from "../controllers/diary.js";

const router = Router();

// Create a new Diary
router.post("/create", createDiary);

// Delete a diary
router.delete("/delete/:id", deleteDiary);

// Update a diary
router.put("/update/:id", updateDiary);

// Get All Diaries
router.get("/all", getAllDiaries);

// Get Specific Diary
router.get("/:id", getDiary);

// Get Diary by Date
router.get("/date/date", getDiaryByDate);

export default router;
