import React from "react"

import { ProductSquare } from "#components/ProductSquare"
import Products from "#shared/contexts/Products"

import "./App.css"

const App = Products.Consumer(props => {
  return (
    <div styleName="App">
      <ProductsList products={props.products} />
    </div>
  )
})

const ProductsList = props => {
  return (
    <div styleName="ProductsList">
      <div styleName="list">
        <For each="product" of={props.products}>
          <ProductSquare key={product.id} {...product} />
        </For>
      </div>
    </div>
  )
}

export { App }
