import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/product/:productId" component={ProductDetailPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
