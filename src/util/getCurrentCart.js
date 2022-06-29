const getCurrentCart = () => {
  const currentCart = localStorage.getItem("cart");
  return JSON.parse(currentCart) || [];
};

export default getCurrentCart;
