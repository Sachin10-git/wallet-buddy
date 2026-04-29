const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  addExpense,
  getExpenses,
  deleteExpense,
  updateExpense, // ✅ ADD THIS
} = require("../controllers/expenseController");

router.route("/")
  .post(protect, addExpense)
  .get(protect, getExpenses);

router.delete("/:id", protect, deleteExpense);
router.put("/:id", protect, updateExpense);
module.exports = router;