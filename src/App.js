import Home from "./pages/Home.js";
import {
  BrowserRouter as Router,
  Route, 
  Switch} from "react-router-dom";
import Cookies from 'js-cookie';
import Navbar from "./components/Navbar.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Profile from "./pages/Profile.js";
import AddProduct from "./pages/AddProduct.js";
import ContactUs from "./pages/ContactUs.js";
import ProductList from "./pages/ProductList.js";
import ResetPassword from "./pages/ResetPassword.js";

function App() {
  const isLoggedIn = Cookies.get('token');

  return (
    <div className="flex-col items-center justify-center">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>{<Home />}</Route>
          <Route path="/login" >{<Login />}</Route>
          <Route path="/register" >{<Register />}</Route>
          <Route path="/profile" >{<Profile />}</Route>
          <Route path="/addproduct" >{<AddProduct />}</Route>
          <Route path="/contactus" >{<ContactUs />}</Route>
          <Route path="/allproducts" >{<ProductList />}</Route>
          <Route path="/resetpassword" >{<ResetPassword />}</Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;