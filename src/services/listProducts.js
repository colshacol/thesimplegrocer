import wretch from "wretch"
import smallest from "smallest"

const ENDPOINT = "https://stripe-services-listproducts.glitch.me/"

const setStartingPrice = product => {
  if (product.skus.length) {
    const startingPrice = smallest(...product.skus.map(sku => sku.price))
    product.startingPrice = startingPrice / 100
  }

  return product
}

export default async () => {
  const products = await wretch(ENDPOINT)
    .get()
    .json()

  return products.map(product => {
    return setStartingPrice(product)
  })
}
