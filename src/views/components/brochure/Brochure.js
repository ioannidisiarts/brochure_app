import React, { useState } from "react"
import BrochurePage from "./BrochurePage"

const Brochure = () => {
  const [pages, setPages] = useState([])
  const [pageName, setPageName] = useState("")
  const [pageBackground, setPageBackground] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPage = { name: pageName, background: pageBackground }
    setPages([...pages, newPage])
    setPageName("")
    setPageBackground(null)
  }

  const handlePageNameChange = (e) => {
    setPageName(e.target.value)
  }

  const handlePageBackgroundChange = (e) => {
    setPageBackground(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div>
      <h1>Brochure</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Page Name:
          <input type="text" value={pageName} onChange={handlePageNameChange} />
        </label>
        <label>
          Background Image:
          <input type="file" onChange={handlePageBackgroundChange} />
        </label>
        <button type="submit">Add Page</button>
      </form>
      <div>
        {pages?.map((page, index) => (
          <BrochurePage key={index} page={page} />
        ))}
      </div>
    </div>
  )
}

export default Brochure
