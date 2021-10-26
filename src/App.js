import data from "./data";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Products";
import { useState } from "react";
import Cart from "./Cart";

function App() {
  const [productsData, setProductData] = useState(data);

  const [cartItems, setCartItems] = useState([]);

  const handleCart = (productId) => {
    const exist = cartItems.find((item) => item.id === productId);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...productId, qty: 1 }]);
    }
  };
  console.log(cartItems);

  const onRemove = (cartId) => {
    const exist = cartItems.find((item) => item.id === cartId);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== cartId));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === cartId ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/cart">
            <Header countItems={cartItems.length}></Header>
            <Cart
              cartItems={cartItems}
              removeItem={onRemove}
              handleCart={handleCart}
            ></Cart>
          </Route>
          <Route path="/">
            <Header countItems={cartItems.length}></Header>
            <Products
              products={productsData}
              handleCart={handleCart}
            ></Products>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
