const setCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export default setCart;
