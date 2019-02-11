import wretch from "wretch"

export default () => {
  return wretch("https://stripe-services-listproducts.glitch.me/")
    .get()
    .json()
}
