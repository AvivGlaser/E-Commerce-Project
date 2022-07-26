import React, { useContext } from "react";
import  Footer from "./Footer"
import  Header from "./Header"
import { ThemeContext } from "../../Context/ThemeContext";



export default function Layout() {
  const {theme}: any= useContext(ThemeContext);

  return (
    <div className={theme}>
      <Header />
      <Footer />
    </div>
  );
}
