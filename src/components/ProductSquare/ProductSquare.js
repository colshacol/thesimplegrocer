import React from "react"

import "./ProductSquare.css"
import { observable, action, computed } from "mobx"
import { observer } from "mobx-react"
import { BigText } from '#components/BigText'

const ProductSquare = props => {
  const style = {
    background: `url(${props.images[0] || 'http://www.hearthechildrencryja.com/wp-content/uploads/sites/191/2016/01/missing.jpg'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  const startingAt = props.skus.length
    ? <span styleName="startingAt">Starting at {props.skus[0].price / 100}</span>
    : ''

  return (
    <div styleName="ProductSquare">
    <div styleName="layer" style={style}>
      <ProductOverlay>
        <p>{props.description || "This is a great product hand made in Canadia."}</p>
      </ProductOverlay>
    </div>
      <p>{props.name} {startingAt}</p>
    </div>
  )
}

@observer
class ProductOverlay extends React.Component {
  @observable hovered = false

  @action setHovered = (bool) => {
    this.hovered = bool
  }

  onMouseEnter = () => {
    this.setHovered(true)
  }

  onMouseLeave = () => {
    this.setHovered(false)
  }

  render() {
    return (
      <div styleName="ProductOverlay" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {this.props.children}
      </div>
    )
  }
}

export { ProductSquare }


ProductSquare.defaultProps = {
  skus: [{}]
}