import React, { useState } from 'react'
import Section from './Section'

function BrochurePage(props) {
  const [sections, setSections] = useState(props.page.sections || [])
  const [sectionBackground, setSectionBackground] = useState(null)

  const addSection = (sectionName) => {
    const newSection = {
      name: sectionName,
      background: sectionBackground,
      products: []
    }
    setSections([...sections, newSection])
    setSectionBackground('')
  }


  const handlePageBackgroundChange = (e) => {
    setSectionBackground(URL.createObjectURL(e.target.files[0]))
  }  

  return (
    <div style={{ backgroundImage: `url(${props.page.background})` }}>
      <h2>{props.page.name}</h2>
      <button onClick={() => addSection('New Section', null)}>
        Add Section
      </button>
      <label>
          Background Image:
          <input type="file" onChange={handlePageBackgroundChange} />
       </label>
      {sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  )
}

export default BrochurePage
