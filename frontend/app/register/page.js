"use client"

import { useState } from "react"
import { registerUser } from "../../lib/api"
import { User, Mail, Lock } from "lucide-react"

export default function RegisterPage(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault()

try{

const res = await registerUser({ name,email,password })
const data = await res.json()

if(data._id){
alert("Account created successfully")
window.location.href="/login"
}else{
alert(data.msg || "Register failed")
}

}catch(error){
console.log(error)
alert("Server error")
}

}

return(

<div className="min-h-screen grid md:grid-cols-2 animate-fade">


{/* LEFT IMAGE */}

<div
className="hidden md:flex relative items-center justify-center text-white"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1512820790803-83ca734da794')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<div className="absolute inset-0 bg-black/50"></div>

<div className="relative text-center px-8">

<h2 className="text-4xl font-bold mb-3">
Build Your Library
</h2>

<p className="max-w-md">
Organize books you love, track your progress,
and rediscover your favorite authors.
</p>

</div>

</div>


{/* RIGHT FORM */}

<div className="flex items-center justify-center bg-gray-100">

<form
onSubmit={handleSubmit}
className="bg-white shadow-xl rounded-xl p-8 w-96 animate-slide"
>

<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
Create Account
</h2>

{/* NAME */}

<div className="flex items-center border rounded mb-4 px-3">

<User className="text-gray-400"/>

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full p-3 outline-none text-gray-800"
/>

</div>

{/* EMAIL */}

<div className="flex items-center border rounded mb-4 px-3">

<Mail className="text-gray-400"/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-3 outline-none text-gray-800"
/>

</div>

{/* PASSWORD */}

<div className="flex items-center border rounded mb-5 px-3">

<Lock className="text-gray-400"/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-3 outline-none text-gray-800"
/>

</div>

<button
className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded hover:opacity-90 transition"
>
Register
</button>

<p className="text-center text-sm text-gray-600 mt-4">
Already have an account?
<a href="/login" className="text-indigo-600 ml-1 font-medium">
Login
</a>
</p>

</form>

</div>

</div>

)
}