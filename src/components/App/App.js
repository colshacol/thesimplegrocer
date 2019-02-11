import React from "react"

import { ProductSquare } from "#components/ProductSquare"
import Products from "#shared/contexts/Products"
import "./App.css"

const App = Products.Consumer(props => {
  return (
    <div styleName="App">
      <For each="product" of={props.products}>
        <ProductSquare key={product.id} {...product} />
      </For>
    </div>
  )
})

export { App }
