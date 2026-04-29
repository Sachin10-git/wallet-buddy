# 💰 Wallet Buddy — Expense Tracker

A full-stack MERN application that helps users track daily expenses, visualize spending patterns, and gain insights through interactive analytics.

---

## 🚀 Features

- ➕ Add, edit, and delete expenses  
- 📊 Category-wise spending (Pie Chart)  
- 📈 Daily spending trends (Line Chart)  
- 🔥 Smart analytics (Total, Top Category, Weekly & Monthly insights)  
- 🔐 Secure authentication (JWT-based login/register)  
- ⚡ Real-time dashboard updates  

---

## 🧠 Tech Stack

| Layer       | Technology |
|------------|-----------|
| Frontend   | React.js, Tailwind CSS, Recharts |
| Backend    | Node.js, Express.js |
| Database   | MongoDB Atlas |
| Auth       | JWT (JSON Web Token) |

---

## 📁 Project Structure

Expense Tracker/

├── client/ 

├── server/ 

├── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

---

### 2️⃣ Backend Setup
```
cd server
npm install
```
```
Create a `.env` file inside `server/`:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
### Start backend
```
npm start
```
---

### 3️⃣ Frontend Setup
```
cd client
npm install
npm start
```

---

## 🔐 Environment Variables

| Variable      | Description |
|--------------|------------|
| MONGO_URI    | MongoDB Atlas connection string |
| JWT_SECRET   | Secret key for authentication |

---

## 📊 How It Works

1. User logs in or registers  
2. Expenses are stored in MongoDB  
3. Backend processes data using aggregation  
4. Frontend displays insights via charts  

---

## 💡 Key Highlights

- Built using full MERN stack architecture  
- Efficient MongoDB aggregation for analytics  
- Clean UI with responsive design  
- Scalable backend structure  

---

## 🧪 Future Improvements

- 📅 Date-based filters (weekly/monthly toggle)  
- 📱 Mobile responsiveness enhancements  
- 📤 Export reports (PDF/CSV)  
- 🔔 Budget alerts & notifications  

---

## 🧑‍💻 Author

**Sachin S**

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!



