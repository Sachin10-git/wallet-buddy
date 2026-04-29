const Expense = require("../models/Expense");

// Add Expense
exports.addExpense = async (req, res) => {
  const { amount, category, description } = req.body;

  const expense = await Expense.create({
    user: req.user._id,
    amount,
    category,
    description,
  });

  res.status(201).json(expense);
};

// Get Expenses
exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.user._id }).sort({
    date: -1,
  });

  res.json(expenses);
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
  const expense = await Expense.findById(req.params.id);

  if (!expense) {
    return res.status(404).json({ message: "Not found" });
  }

  if (expense.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  await expense.deleteOne();

  res.json({ message: "Deleted" });
};

exports.updateExpense = async (req, res) => {
  const { amount, category, description } = req.body;

  const expense = await Expense.findById(req.params.id);

  if (!expense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  // 🔐 ownership check
  if (expense.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  expense.amount = amount || expense.amount;
  expense.category = category || expense.category;
  expense.description = description || expense.description;

  const updated = await expense.save();

  res.json(updated);
};

