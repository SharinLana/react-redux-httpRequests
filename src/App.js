import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actionThunks";

// TO BLOCK EXECUTION OF useEffect ON THE FIRST LOAD OF THE PAGE
let firstLoad = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  // DISPATCHING THE ASYNCHRONOUS ACTION CREATOR THUNK fetchCartData()
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // DISPATCHING THE ASYNCHRONOUS ACTION CREATOR THUNK sendCartData()
  useEffect(() => {
    if (firstLoad) {
      firstLoad = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Layout>
        {/* DISPLAYING THE CART USING REDUX TOOLKIT */}
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
