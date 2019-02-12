import React from "react"

import "./TopBar.css"

const TopBar = props => {
  return (
    <div styleName="TopBar">
      <div styleName="left">
        <p styleName="logo">
          The<span>Simple</span>Grocer
        </p>
      </div>
      <div styleName="right">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Deals</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  )
}

export { TopBar }
