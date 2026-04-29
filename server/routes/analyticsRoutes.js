const express = require("express");
const router = express.Router();

const {
  getCategoryAnalytics,
  getTotalSpending,
  getSmartAnalytics,
  getDailyAnalytics,     // ✅ NEW
  getMonthlyTotal        // ✅ NEW
} = require("../controllers/analyticsController");

const protect = require("../middleware/authMiddleware");

// existing routes
router.get("/categories", protect, getCategoryAnalytics);
router.get("/total", protect, getTotalSpending);
router.get("/smart", protect, getSmartAnalytics);

// 🔥 NEW ROUTES
router.get("/daily", protect, getDailyAnalytics);
router.get("/monthly", protect, getMonthlyTotal);

module.exports = router;