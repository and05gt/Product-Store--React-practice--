import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { lazy, Suspense } from "react";

const Products = lazy(() => import("./pages/Products/Products"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);
const ProductReviews = lazy(() =>
  import("./components/ProductReviews/ProductReviews")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />}>
            <Route path="reviews" element={<ProductReviews />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
