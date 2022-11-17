import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import SingleProducts from "./pages/SingleProducts";
import Error404 from "./pages/Error404";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<SingleProducts />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
