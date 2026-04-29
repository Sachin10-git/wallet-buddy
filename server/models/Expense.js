const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: String,
  },
  {
    timestamps: true, // ✅ ONLY USE THIS
  }
);

module.exports = mongoose.model("Expense", expenseSchema);