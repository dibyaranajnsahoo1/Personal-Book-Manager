"use client"

import { useEffect, useState } from "react"
import { getBooks, addBook, updateBook, deleteBook } from "../../lib/api"
import BookForm from "../../components/BookForm"
import BookList from "../../components/BookList"
import Navbar from "../../components/Navbar"

export default function Dashboard(){

const [books,setBooks] = useState([])
const [filter,setFilter] = useState("All")
const [editing,setEditing] = useState(null)

const token =
typeof window !== "undefined" &&
localStorage.getItem("token")

const fetchBooks = async()=>{

const res = await getBooks(token)
const data = await res.json()

setBooks(Array.isArray(data)?data:[])
}

useEffect(()=>{
fetchBooks()
},[])

const add = async(book)=>{
await addBook(book,token)
fetchBooks()
}

const update = async(book)=>{
await updateBook(editing._id,book,token)
setEditing(null)
fetchBooks()
}

const changeStatus = async(id,status)=>{
await updateBook(id,{status},token)
fetchBooks()
}

const removeBook = async(id)=>{
await deleteBook(id,token)
fetchBooks()
}

const filteredBooks =
filter==="All"
? books
: books.filter(b=>b.status===filter)

return(

<div className="min-h-screen bg-gray-100">

<Navbar/>

<div className="max-w-6xl mx-auto p-6">

<h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
📚 My Reading Dashboard
</h1>


<div className="grid md:grid-cols-3 gap-5 mb-8">

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-gray-600 font-medium mb-2">
Total Books
</h3>

<p className="text-4xl font-bold text-indigo-600">
{books.length}
</p>

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-gray-600 font-medium mb-2">
Reading
</h3>

<p className="text-4xl font-bold text-blue-600">

{books.filter(b=>b.status==="Reading").length}

</p>

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-gray-600 font-medium mb-2">
Completed
</h3>

<p className="text-4xl font-bold text-green-600">

{books.filter(b=>b.status==="Completed").length}

</p>

</div>

</div>


<BookForm
add={add}
update={update}
editing={editing}
/>


<div className="mb-6">

<select
onChange={(e)=>setFilter(e.target.value)}
className="border p-3 rounded-lg shadow text-gray-700"
>

<option>All</option>
<option>Want to Read</option>
<option>Reading</option>
<option>Completed</option>

</select>

</div>

<BookList
books={filteredBooks}
changeStatus={changeStatus}
removeBook={removeBook}
editBook={setEditing}
/>

</div>

</div>

)
}