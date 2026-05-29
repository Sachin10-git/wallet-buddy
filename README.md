# 💰 Wallet Buddy

Wallet Buddy is a full-stack MERN (MongoDB, Express.js, React, Node.js) expense tracking application that helps users manage their daily expenses, monitor spending habits, and visualize financial data through interactive analytics dashboards.

## 🚀 Live Demo

**Frontend:** https://wallet-buddy-frontend.vercel.app

**Backend API:** https://wallet-buddy-nuor.onrender.com

---

## 📌 Features

### User Authentication

* Secure user registration and login
* JWT-based authentication
* Protected routes and API endpoints

### Expense Management

* Add new expenses
* Edit existing expenses
* Delete expenses
* Store expense descriptions
* Automatic timestamp tracking

### Expense Analytics

* Category-wise spending breakdown
* Interactive donut chart visualization
* Daily spending trend graph
* Total spending summary
* Top spending category
* Weekly spending summary
* Monthly spending summary

### Search & Filtering

* Search expenses by category or description
* Filter expenses by category
* Filter expenses by date

### Dashboard

* Real-time analytics updates
* Responsive user interface
* Clean and intuitive design

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Recharts
* Tailwind CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

## 📂 Project Structure

```bash
wallet-buddy/
│
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── context/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Sachin10-git/wallet-buddy.git
cd wallet-buddy
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

Application will run on:

```text
Frontend: http://localhost:3000
Backend:  http://localhost:5000
```

---

## 📊 System Workflow

1. User interacts with the React frontend.
2. Frontend sends HTTP requests using Axios.
3. Express backend processes requests.
4. JWT middleware validates authentication.
5. Business logic executes in controllers.
6. MongoDB Atlas stores and retrieves data.
7. Backend returns JSON responses.
8. Dashboard updates analytics and charts in real time.

---

## 🔒 Security Features

* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes
* Environment variable configuration
* MongoDB Atlas cloud security

---

## 📈 Future Enhancements

* Budget planning and alerts
* Income tracking
* Export reports (PDF/CSV)
* Dark mode support
* Savings goals tracker
* Recurring expenses management
* Mobile application version

---

## 👨‍💻 Author

**Sachin S**

GitHub: https://github.com/Sachin10-git

---

## 📄 License

This project is developed for learning, portfolio, and personal finance management purposes.
