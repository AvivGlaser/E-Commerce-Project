import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Layout from "../src/Components/Layout/Layout";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { TimeProvider } from "./Context/TimeContext";
import { setCart } from "./Redux/Reducers/productReducer";

function App() {
  const dispatch = useDispatch();
  const dataFromLS: any[] = JSON.parse(localStorage.getItem("myCart"));
  if (dataFromLS) {
    dispatch(setCart(dataFromLS));
  }

  return (
    <ThemeContextProvider>
      <TimeProvider>
        <Layout />
      </TimeProvider>
    </ThemeContextProvider>
  );
}

export default App;
