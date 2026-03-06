"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    setMessage("📚 Personal Book Manager")
  }, [])

  return (
    <div className="flex h-screen items-center justify-center flex-col gap-6">
      <h1 className="text-4xl font-bold">{message}</h1>

      <p className="text-gray-500">
        Your personal space to manage books
      </p>

      <div className="flex gap-4">
        <a
          href="/login"
          className="bg-black text-white px-6 py-2 rounded"
        >
          Login
        </a>

        <a
          href="/register"
          className="border px-6 py-2 rounded"
        >
          Register
        </a>
      </div>
    </div>
  )
}