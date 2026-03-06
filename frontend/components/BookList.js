"use client"

import {
  Pencil,
  Trash2,
  BookOpen,
  CheckCircle,
  Bookmark
} from "lucide-react"

export default function BookList({
  books,
  changeStatus,
  removeBook,
  editBook
}){

if(!Array.isArray(books) || books.length === 0){
return(

<div className="text-center py-10 text-gray-500">

📚 No books yet

<p className="text-sm mt-2">
Start building your personal library
</p>

</div>

)
}

return(

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{books.map((b)=>(

<div
key={b._id}
className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border"
>

<h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">

<BookOpen size={18} className="text-indigo-500"/>

{b.title}

</h3>


<p className="text-gray-600 mt-1">

Author: <span className="font-medium">{b.author}</span>

</p>


<div className="mt-3">

<span
className={`px-3 py-1 text-sm rounded-full font-medium

${b.status==="Completed"
? "bg-green-100 text-green-700"
: ""}

${b.status==="Reading"
? "bg-blue-100 text-blue-700"
: ""}

${b.status==="Want to Read"
? "bg-yellow-100 text-yellow-700"
: ""}

`}
>

{b.status}

</span>

</div>


<div className="mt-3 flex flex-wrap gap-2">

{b.tags?.map((t,i)=>(

<span
key={i}
className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-700"
>

#{t}

</span>

))}

</div>


<div className="flex justify-between items-center mt-5">

<div className="flex gap-3">

<button
onClick={()=>editBook(b)}
className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800"
>

<Pencil size={16}/> Edit

</button>


<button
onClick={()=>removeBook(b._id)}
className="flex items-center gap-1 text-red-600 hover:text-red-800"
>

<Trash2 size={16}/> Delete

</button>

</div>

</div>


<div className="flex gap-3 mt-4 border-t pt-3">

<button
onClick={()=>changeStatus(b._id,"Want to Read")}
className="flex items-center gap-1 text-yellow-600 hover:scale-105 transition"
>

<Bookmark size={16}/> Want

</button>


<button
onClick={()=>changeStatus(b._id,"Reading")}
className="flex items-center gap-1 text-blue-600 hover:scale-105 transition"
>

<BookOpen size={16}/> Reading

</button>


<button
onClick={()=>changeStatus(b._id,"Completed")}
className="flex items-center gap-1 text-green-600 hover:scale-105 transition"
>

<CheckCircle size={16}/> Completed

</button>

</div>

</div>

))}

</div>

)
}