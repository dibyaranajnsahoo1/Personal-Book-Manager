const API = process.env.NEXT_PUBLIC_API_URL

export const registerUser = (data) =>
  fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

export const loginUser = (data) =>
  fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

export const getBooks = (token) =>
  fetch(`${API}/books`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

export const addBook = (data, token) =>
  fetch(`${API}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })

export const updateBook = (id, data, token) =>
  fetch(`${API}/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })

export const deleteBook = (id, token) =>
  fetch(`${API}/books/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })