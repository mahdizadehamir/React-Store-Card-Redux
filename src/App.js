import { Navigate, Route, Routes } from "react-router-dom";
//Redux
import Store from "./components/Store";
//components
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
import ProductDetails from "./components/ProductDetails";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
function App() {
  return (
    <div className="App container mx-auto">
      <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
      </Provider>
    </div>
  );
}

export default App;
