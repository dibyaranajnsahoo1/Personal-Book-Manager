const Book = require("../models/Book")

exports.getBooks = async (req,res)=>{

  const books = await Book.find({ user:req.user.id })

  res.json(books)
}

exports.addBook = async (req,res)=>{

  const {title,author,tags,status} = req.body

  const book = await Book.create({
    title,
    author,
    tags,
    status,
    user:req.user.id
  })

  res.json(book)
}

exports.updateBook = async (req,res)=>{

  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  )

  res.json(book)
}

exports.deleteBook = async (req,res)=>{

  await Book.findByIdAndDelete(req.params.id)

  res.json({msg:"Book deleted"})
}