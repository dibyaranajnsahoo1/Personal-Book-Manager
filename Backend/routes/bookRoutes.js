const router = require("express").Router()
const auth = require("../middleware/authMiddleware")

const {
getBooks,
addBook,
updateBook,
deleteBook
} = require("../controllers/bookController")

router.get("/",auth,getBooks)

router.post("/",auth,addBook)

router.put("/:id",auth,updateBook)

router.delete("/:id",auth,deleteBook)

module.exports = router