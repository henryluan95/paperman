const increaseQuantity = (cart, product) => {
  return cart.map((productInCart) => {
    if (productInCart.id === product.id) {
      return { ...productInCart, quantity: productInCart.quantity + 1 };
    } else {
      return productInCart;
    }
  });
};

export default increaseQuantity;
