const express = require("express");
const router = express.Router();

const {
  getCategoryAnalytics,
  getTotalSpending,
  getSmartAnalytics,
  getDailyAnalytics,
  getWeeklyAnalytics,
  getMonthlyTrendAnalytics,
  getMonthlyTotal
} = require("../controllers/analyticsController");

const protect = require("../middleware/authMiddleware");

// existing routes
router.get("/categories", protect, getCategoryAnalytics);
router.get("/total", protect, getTotalSpending);
router.get("/smart", protect, getSmartAnalytics);

// 🔥 NEW ROUTES
router.get("/daily", protect, getDailyAnalytics);
router.get("/weekly",protect,getWeeklyAnalytics);
router.get("/monthly-trend",protect,getMonthlyTrendAnalytics);
router.get("/monthly", protect, getMonthlyTotal);

module.exports = router;