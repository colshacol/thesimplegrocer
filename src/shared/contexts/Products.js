import React from "react"
import { observable, action, computed } from "mobx"
import { observer } from "mobx-react"

import listProducts from "#services/listProducts"

const Context = React.createContext([])

@observer class Provider extends React.Component {
  @observable products = []

  @action setProducts = (products) => {
    this.products = products
  }

  async componentDidMount() {
    const products = await listProducts()
    this.setProducts(products)
  }

  render() {
    return <Context.Provider value={this.products}>{this.props.children}</Context.Provider>
  }
}

const Consumer = (Comp) => (props) => {
  return (
    <Context.Consumer>
      {(products) => <Comp {...props} products={products} /> }
    </Context.Consumer>
  )
}

export default {
  Provider,
  Consumer
}