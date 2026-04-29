const Expense = require("../models/Expense");

// 📊 Category-wise breakdown (for pie chart)
exports.getCategoryAnalytics = async (req, res) => {
  try {
    const analytics = await Expense.aggregate([
      {
        $match: { user: req.user._id }
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 💰 Total spending
exports.getTotalSpending = async (req, res) => {
  try {
    const total = await Expense.aggregate([
      {
        $match: { user: req.user._id }
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.json(total[0] || { total: 0 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔥 SMART ANALYTICS (EXISTING)
exports.getSmartAnalytics = async (req, res) => {
  try {
    const userId = req.user._id;

    const total = await Expense.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" }
        }
      }
    ]);

    const categories = await Expense.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    const topCategory = await Expense.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      },
      { $sort: { total: -1 } },
      { $limit: 1 }
    ]);

    const weekly = await Expense.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: { $isoWeek: "$createdAt" },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const thisWeek = await Expense.aggregate([
      {
        $match: {
          user: userId,
          createdAt: { $gte: startOfWeek }
        }
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" }
        }
      }
    ]);

    const monthly = await Expense.aggregate([
      {
        $match: {
          user: userId
        }
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" }
          },
          total: { $sum: "$amount" }
        }
      },
      {
        $sort: {
          "_id.year": -1,
          "_id.month": -1
        }
      },
      { $limit: 1 }
    ]);

    res.json({
      total: total[0]?.total || 0,
      categories,
      topCategory: topCategory[0] || null,
      weekly,
      thisWeek: thisWeek[0]?.total || 0,
      thisMonth: monthly[0]?.total || 0
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// 🆕 DAILY ANALYTICS (FIXED FORMAT)
exports.getDailyAnalytics = async (req, res) => {
  try {
    const userId = req.user._id;

    const daily = await Expense.aggregate([
      { $match: { user: userId } },

      {
        $group: {
          _id: {
            $dateToString: {
              format: "%d-%m-%Y",   // ✅ CHANGED HERE (DD-MM-YYYY)
              date: "$createdAt"
            }
          },
          total: { $sum: "$amount" }
        }
      },

      { $sort: { _id: 1 } }
    ]);

    res.json(daily);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// 🆕 MONTHLY TOTAL (for card)
exports.getMonthlyTotal = async (req, res) => {
  try {
    const userId = req.user._id;

    const monthly = await Expense.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" }
          },
          total: { $sum: "$amount" }
        }
      },
      {
        $sort: {
          "_id.year": -1,
          "_id.month": -1
        }
      },
      { $limit: 1 }
    ]);

    res.json(monthly[0] || { total: 0 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};