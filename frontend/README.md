# 📚 Personal Book Manager

A full-stack **Personal Book Manager** built using the **MERN Stack with Next.js**.

This application allows users to maintain their personal book collection, track reading progress, and organize books using tags and reading status.

The goal of this project is to provide a **simple, clean and intuitive tool for readers** to manage their reading habits.

---

# 🚀 Features

## 🔐 Authentication
- User Registration
- User Login
- Password hashing using **bcrypt**
- Secure authentication using **JWT**
- Protected API routes

---

## 📖 Book Collection

Users can:

- Add books
- Edit books
- Delete books
- Add tags
- Track reading status

### Book Status

📖 Want to Read  
📘 Reading  
✅ Completed  

---

## 📊 Dashboard

Dashboard provides:

- Total number of books
- Reading books count
- Completed books count
- Book list display
- Status change buttons
- Tag display

---

# 🛠 Tech Stack

## Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- Lucide React Icons

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- JWT (JSON Web Token)

---

# 📂 Project Structure

```
Personal-Book-Manager

backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   └── bookController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── User.js
│   └── Book.js
│
├── routes
│   ├── authRoutes.js
│   └── bookRoutes.js
│
├── server.js
├── package.json
└── .env
```

```
frontend
│
├── app
│   ├── dashboard
│   │   └── page.js
│   │
│   ├── login
│   │   └── page.js
│   │
│   ├── register
│   │   └── page.js
│   │
│   ├── layout.js
│   └── globals.css
│
├── components
│   ├── Navbar.js
│   ├── BookForm.js
│   └── BookList.js
│
├── lib
│   └── api.js
│
└── package.json
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/personal-book-manager.git

cd personal-book-manager
```

---

# 🔧 Backend Setup

```
cd backend
npm install
```

Create environment file:

```
.env
```

Add:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/bookmanager
JWT_SECRET=your_super_secret_key
```

Run backend server:

```
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

# 🎨 Frontend Setup

Open new terminal

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

# 🧪 Example API Endpoints

## Register

```
POST /api/auth/register
```

## Login

```
POST /api/auth/login
```

## Get Books

```
GET /api/books
```

## Add Book

```
POST /api/books
```

## Update Book

```
PUT /api/books/:id
```

## Delete Book

```
DELETE /api/books/:id
```

---

# 🗄 Database Schema

## User Model

```
{
name: String,
email: String,
password: String
}
```

---

## Book Model

```
{
title: String,
author: String,
tags: [String],
status: String,
user: ObjectId
}
```

---

# 🔐 Authentication Flow

1. User registers account
2. Password hashed with **bcrypt**
3. User logs in
4. Server generates **JWT token**
5. Token stored in **localStorage**
6. Token sent with API requests

Example header:

```
Authorization: Bearer token
```

---

# 🌟 Future Improvements

Possible improvements:

- Book search functionality
- Book cover images
- Reading progress tracker
- Dark mode
- Pagination
- User profile page

---

# 📜 License

This project is built for educational and assignment purposes.

---

# 👨‍💻 Author

Dibya Ranjan