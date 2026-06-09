const Expense = require("../models/Expense");

// Add Expense
exports.addExpense = async (req, res) => {
  try {
    const {
      amount,
      category,
      description,
      expenseDate,
    } = req.body;

    const expense = await Expense.create({
      user: req.user._id,
      amount,
      category,
      description,
      expenseDate,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.user._id,
    }).sort({
      expenseDate: -1,
    });

    res.json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(
      req.params.id
    );

    if (!expense) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    if (
      expense.user.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await expense.deleteOne();

    res.json({
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Expense
exports.updateExpense = async (req, res) => {
  try {
    const {
      amount,
      category,
      description,
      expenseDate,
    } = req.body;

    const expense = await Expense.findById(
      req.params.id
    );

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    if (
      expense.user.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    expense.amount =
      amount || expense.amount;

    expense.category =
      category || expense.category;

    expense.description =
      description || expense.description;

    expense.expenseDate =
      expenseDate || expense.expenseDate;

    const updated =
      await expense.save();

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};