const getCurrentCart = () => {
  const getCurrentCart = localStorage.getItem("cart");
  return JSON.parse(getCurrentCart);
};

export default getCurrentCart;
