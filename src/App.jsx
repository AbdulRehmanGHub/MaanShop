import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Cart from "./pages/cart/Cart";
import AllProducts from "./pages/allProducts/AllProducts";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { UserProtectedRoute } from "./protectedRoutes/UserProtectedRoute";
import { AdminProtectedRoute } from "./protectedRoutes/AdminProtectedRoute";
import CategoryPage from "./pages/categoryPage/CategoryPage";

function App() {
  return (
    <>
      <MyState>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/category/:categoryname" element={<CategoryPage />} />

            <Route
              path="/user-dashboard"
              element={
                <UserProtectedRoute>
                  <UserDashboard />
                </UserProtectedRoute>
              }
            />

            <Route
              path="/admin-dashboard"
              element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              }
            />

            <Route
              path="/addproduct"
              element={
                <AdminProtectedRoute>
                  <AddProduct />
                </AdminProtectedRoute>
              }
            />

            <Route
              path="/updateproduct/:id"
              element={
                <AdminProtectedRoute>
                  <UpdateProduct />
                </AdminProtectedRoute>
              }
            />

            <Route path="/*" element={<NoPage />} />
          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </>
  );
}

export default App;
