const decreaseQuantity = (cart, product) => {
  return (
    cart
      //if quantity is more than 1, reduce by 1
      .map((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...productInCart, quantity: productInCart.quantity - 1 };
        } else {
          return productInCart;
        }
      })
  );
};

export default decreaseQuantity;
