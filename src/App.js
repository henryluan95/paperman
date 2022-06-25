import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/product/:productId" component={ProductDetailPage} />
        <Route path="/products" component={ProductsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
