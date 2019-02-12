import React from "react"
import ReactDOM from "react-dom"

import { TopBar } from "#components/TopBar"
import Products from "#shared/contexts/Products"
import { App } from "#components/App"
import "./index.css"

const Wrapper = () => {
  return (
    <Products.Provider>
      <TopBar />
      <App />
    </Products.Provider>
  )
}

ReactDOM.render(<Wrapper />, document.getElementById("root"))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
