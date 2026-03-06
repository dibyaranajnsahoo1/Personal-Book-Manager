"use client"

import { useState, useEffect } from "react"
import { Book, User, Tag } from "lucide-react"

export default function BookForm({ add, update, editing }) {

const [title, setTitle] = useState("")
const [author, setAuthor] = useState("")
const [tags, setTags] = useState("")
const [status, setStatus] = useState("Want to Read")

useEffect(() => {

if (editing) {
setTitle(editing.title)
setAuthor(editing.author)
setTags(editing.tags?.join(",") || "")
setStatus(editing.status)
}

}, [editing])


const submit = (e) => {

e.preventDefault()

const book = {
title,
author,
tags: tags.split(",").map(t => t.trim()),
status
}

editing ? update(book) : add(book)

setTitle("")
setAuthor("")
setTags("")
setStatus("Want to Read")

}

return (

<form
onSubmit={submit}
className="bg-white p-6 rounded-xl shadow-md mb-8 grid gap-4  transition hover:shadow-lg"
>

<h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">

📘 {editing ? "Edit Book" : "Add New Book"}

</h2>


{/* TITLE */}

<div className="flex items-center border rounded-lg p-2 bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-400">

<Book className="text-gray-400 mr-2"/>

<input
placeholder="Book Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
className="w-full p-2 outline-none text-gray-800 bg-transparent"
/>

</div>


{/* AUTHOR */}

<div className="flex items-center border rounded-lg p-2 bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-400">

<User className="text-gray-400 mr-2"/>

<input
placeholder="Author Name"
value={author}
onChange={(e)=>setAuthor(e.target.value)}
className="w-full p-2 outline-none text-gray-800 bg-transparent"
/>

</div>


{/* TAGS */}

<div className="flex items-center border rounded-lg p-2 bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-400">

<Tag className="text-gray-400 mr-2"/>

<input
placeholder="Tags (comma separated)"
value={tags}
onChange={(e)=>setTags(e.target.value)}
className="w-full p-2 outline-none text-gray-800 bg-transparent"
/>

</div>


{/* STATUS */}

<select
value={status}
onChange={(e)=>setStatus(e.target.value)}
className="border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-indigo-400"
>

<option>Want to Read</option>
<option>Reading</option>
<option>Completed</option>

</select>


{/* BUTTON */}

<button
className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-lg font-medium hover:opacity-90 transition"
>

{editing ? "Update Book" : "Add Book"}

</button>

</form>

)
}