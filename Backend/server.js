require("dotenv").config()

const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const bookRoutes = require("./routes/bookRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/books", bookRoutes)

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
)