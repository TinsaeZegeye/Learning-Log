import { useNavigate } from 'react-router'
import { useState } from 'react'

export default function SearchOrder() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if (!query) return

    navigate(`/order/${query}`)
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:ring-opacity-50 w-28 rounded-full bg-yellow-200 px-3 py-1 transition-all duration-300 placeholder:text-xs placeholder:text-stone-500 focus:ring focus:ring-yellow-600 focus:outline-none sm:w-64 sm:px-4 sm:py-2 sm:placeholder:text-base sm:focus:w-72"
      />
    </form>
  )
}
