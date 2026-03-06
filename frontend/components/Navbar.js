"use client"

import { LogOut } from "lucide-react"

export default function Navbar(){

const logout=()=>{
localStorage.removeItem("token")
window.location.href="/login"
}

return(

<div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow">

<h1 className="text-xl font-bold">
📚 Personal Book Manager
</h1>

<button
onClick={logout}
className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded"
>

<LogOut size={18}/>
Logout

</button>

</div>

)
}