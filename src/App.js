import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import LikedPage from "./pages/LikedPage/LikedPage";
import getCurrentCart from "./util/getCurrentCart";
import { useState, createContext, useEffect } from "react";

//create context
export const ProductsContext = createContext();

function App() {
  //get products out of local storage
  const [cart, setCart] = useState(getCurrentCart());

  useEffect(() => {
    return function cleanup() {
      localStorage.setItem("cart", JSON.stringify(cart));
    };
  }, [cart]);

  //Create a function to see if product is already in products
  const isInCart = (selectedProduct) => {
    //find product in cart
    const foundProductInCart = cart.find(
      (product) => product.id === selectedProduct.id
    );
    if (foundProductInCart) {
      return true;
    } else {
      return false;
    }
  };

  //Create a function to add product
  const addProduct = (selectedProduct, selectedModal) => {
    //Create new item to add to card
    const newProduct = {
      title: selectedProduct.title,
      price: selectedProduct.price,
      image: selectedProduct.image,
      id: selectedProduct.id,
      quantity: 1,
      modals: selectedModal,
    };

    //check if selected product is already existing in products arrays
    //if not, add to cart
    if (!isInCart(selectedProduct)) {
      setCart([...cart, newProduct]);
    }
    //if yes, increase quantity
    else if (isInCart(selectedProduct)) {
      // const newCart = [];
      // cart.forEach((productInCart) => {
      //   if (productInCart.id === selectedProduct.id) {
      //     console.log(productInCart.modals);
      //     console.log(selectedModal);
      //     if (productInCart.modals === selectedModal) {
      //       newCart.push({
      //         ...productInCart,
      //         quantity: productInCart.quantity + 1,
      //       });
      //     } else {
      //       newCart.push(productInCart);
      //       newCart.push({
      //         ...productInCart,
      //         quantity: 1,
      //         modals: selectedModal,
      //       });
      //     }
      //   } else {
      //     newCart.push(productInCart);
      //   }
      // });
      // console.log(newCart);

      setCart(
        cart.map((productInCart) => {
          if (productInCart.id === selectedProduct.id) {
            return { ...productInCart, quantity: productInCart.quantity + 1 };
          } else {
            return productInCart;
          }
        })
      );
    }
  };

  //Create a function to remove product
  const removeProduct = (selectedProduct) => {
    setCart(
      cart.map((productInCart) => {
        if (productInCart.id === selectedProduct.id) {
          return { ...productInCart, quantity: productInCart.quantity - 1 };
        } else {
          return productInCart;
        }
      })
    );
  };

  return (
    <ProductsContext.Provider value={cart}>
      <Router>
        <Navbar removeProduct={removeProduct} addProduct={addProduct} />
        <Switch>
          <Route path="/product/:productId">
            <ProductDetailPage addProduct={addProduct} />
          </Route>
          <Route path="/products" component={ProductsPage} />
          <Route path="/liked" component={LikedPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </ProductsContext.Provider>
  );
}

export default App;
