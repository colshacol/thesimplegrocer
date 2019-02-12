import React from "react"

import "./ProductSquare.css"
import { observable, action, computed } from "mobx"
import { observer } from "mobx-react"
import { BigText } from '#components/BigText'
import { Tag } from '#components/Tag'
import AddToCartSVG from './add-to-cart.svg'

const MISSING_PRODUCT_IMAGE = 'http://www.hearthechildrencryja.com/wp-content/uploads/sites/191/2016/01/missing.jpg'

const getBackgroundURL = (props) => {
  return props.images.length
    ? props.images[0]
    : MISSING_PRODUCT_IMAGE
}

const ProductSquare = props => {
  const style = {
    background: `url(${getBackgroundURL(props)})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  return (
    <div styleName="ProductSquare">
      <div styleName="top" style={style}>
        <span styleName="sale">
          ON SALE
        </span>
        <ProductOverlay {...props}/>
      </div>
      <div styleName="middle">
        <div style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '0.5px' }}>
          <small style={{ color: '#e89f69', marginRight: '24px' }}>NON GMO</small>
          <small style={{ color: '#599a70', marginRight: '24px' }}>NO SUGAR</small>
          <small style={{ color: '#977cb3', marginRight: '24px' }}>ELECTROLYTES</small>
        </div>
      </div>
      <div styleName="bottom">
        <div styleName="bottomLeft">
          <p styleName="name">{props.name}</p>
          <p styleName="startingAt">{props.startingPrice || '9.99'}</p>
        </div>
        <div styleName="bottomRight">
          <button styleName="addToCartButton">
            <p styleName="price">{props.startingPrice || '9.99'}</p>
            <div styleName="icon">
              <img src={AddToCartSVG} style={{width: '18px', height: '18px' }}/>
            </div>
          </button>
        </div>

      </div>
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
        <p>{this.props.description || "This is a great product hand made in Canadia."}</p>
      </div>
    )
  }
}

export { ProductSquare }


ProductSquare.defaultProps = {
  skus: [{}]
}