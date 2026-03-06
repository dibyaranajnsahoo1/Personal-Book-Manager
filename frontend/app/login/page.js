"use client"

import { useState } from "react"
import { loginUser } from "../../lib/api"
import { Mail, Lock } from "lucide-react"

export default function LoginPage(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [loading,setLoading] = useState(false)

const handleSubmit = async(e)=>{
e.preventDefault()

try{

setLoading(true)

const res = await loginUser({ email,password })
const data = await res.json()

if(data.token){
localStorage.setItem("token",data.token)
window.location.href="/dashboard"
}else{
alert(data.msg || "Invalid login")
}

}catch(error){
console.log(error)
alert("Server error")
}

setLoading(false)

}

return(

<div className="min-h-screen grid md:grid-cols-2 animate-fade">

{/* LEFT LOGIN FORM */}

<div className="flex items-center justify-center bg-gray-100">

<form
onSubmit={handleSubmit}
className="bg-white shadow-xl rounded-xl p-8 w-96 animate-slide"
>

<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
Welcome Back
</h2>

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
{loading ? "Logging in..." : "Login"}
</button>

<p className="text-center text-sm text-gray-600 mt-4">
Don't have an account?
<a href="/register" className="text-indigo-600 ml-1 font-medium">
Register
</a>
</p>

</form>

</div>

{/* RIGHT IMAGE */}

<div
className="hidden md:flex relative items-center justify-center text-white"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1519681393784-d120267933ba')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<div className="absolute inset-0 bg-black/50"></div>

<div className="relative text-center px-8">

<h2 className="text-4xl font-bold mb-3">
Your Reading Journey
</h2>

<p className="max-w-md">
Track books you're reading, discover new titles
and build your personal reading history.
</p>

</div>

</div>

</div>

)
}