import React, { useContext } from "react";
//@ts-ignore
import { Route, Link, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import { ProductsPage } from "../Pages/Products";
import MyCart from "../Pages/MyCart";
import Settings from "../Pages/Settings";
import About from "../Pages/About";
import Register from "../Pages/Register";
import NotFound from "./NotFound";
import ToggleButton from "@mui/material/ToggleButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ThemeContext } from "../../Context/ThemeContext";
import Games from "../Pages/Games";
import ProductDetails from "../Pages/ProductDetails";
import AddNewProduct from "../Pages/AddNewProduct";
import { ICartProd, IRoute } from "../../utils/interfaces";
import { useAppSelector } from "../../Redux/Store/hooks";
import Payment from "./Payment";
import ClockDisplay from "./ClockDisplay";

export default function Navigation() {
  const myCart: Array<ICartProd> = useAppSelector((state: any) => state.products.cart);
  const {toggleTheme}: any = useContext(ThemeContext);
  const savedTheme: any = localStorage.getItem("Theme")
  const routes: Array<IRoute> = [
    { path: "/", element: <Home />, linkText: "𝙀-𝘾𝙊𝙈𝙈𝙀𝙍𝙀𝘾𝙀" , visibility: true, className:"logo"},
    { path: "/login", element: <Login />, linkText: "Login", visibility: true },
    { path: "/products", element: <ProductsPage />,linkText: "Products", visibility: true},
    { path: "/settings", element: <Settings />, linkText: "Settings",  visibility: true},
    { path: "/about", element: <About />, linkText: "About", visibility: true},
    { path: "/register",element: <Register />,linkText: "Register", visibility: true},
    { path: "/games", element: <Games />, linkText: "Games", visibility: true},
    { path: "/myCart",  element: <MyCart />, linkText: (
      <Badge badgeContent={myCart?.length} color="secondary">
      <ShoppingCartIcon color="action" />
    </Badge>
      ), visibility: true, className:"cart-badge"},
    { path: "/products/new", element: <AddNewProduct/>, linkText: "Add-Product", visibility: false },
    { path: "/payment", element: <Payment/>, linkText: "Payment", visibility: false },
    { path: "*", element: <NotFound />, linkText: "Not-Found", visibility: false },
    { path: "/products/details/:prodId",element: <ProductDetails />, linkText: "Product-Details", visibility: false}
  ];

  return (
    <Router>
      <div className="nav_bar">
        {routes.filter((route: IRoute) => route.visibility)
          .map((route: IRoute) => {
            const {path, className, linkText} = route;
            return (
            <span key={linkText} className={className}>
              <Link to={path}>{linkText}</Link>
            </span>
          )})}
        <ToggleButton 
        value={"check"}
        className="theme-toggle-btn"
        onChange={() => {toggleTheme()}}
        >
        {savedTheme=== "light" ? <span><DarkModeIcon  /> Dark</span> : <span><LightModeIcon /> Light</span> }
        </ToggleButton>      
       <span><ClockDisplay/></span>
      </div>

      <Routes>
        {routes.map((route: IRoute) => {
            const {path, element, linkText} = route;
            return (
          <Route
            path={path}
            element={element}
            key={linkText}
          />
        )})}
      </Routes>
    </Router>
  );
}
