import React from "react"
import Brochure from "./views/components/brochure/Brochure"

const App = () => {

    const content = 'test'

    function doLog() {
        console.log(content)
    }

    return (
        <div>
            <button onClick={doLog}>LOG</button>
            <Brochure/>
        </div>
    )
}

export default App