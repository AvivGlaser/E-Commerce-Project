export default function saveCartToLS(cartState: Array<any>) {
  localStorage.setItem("myCart", JSON.stringify(cartState));
}
