import React, { useEffect, useState } from "react";
//@ts-ignore
import shoppingCart from "../../Assets/Images/shopping-cart-img.webp";
import { Button } from "@mui/material";
import { Headers } from "../ui-components/Headers";
import { useForm } from "react-hook-form";
import { IProducts } from "../../utils/interfaces";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { CreateProduct } from "../ui-components/CreateProduct";
import { useAppDispatch } from "../../Redux/Store/hooks";
import { addProduct } from "../../Redux/Reducers/productReducer";
import { useNavigate } from "react-router-dom";
import popUpAlert from "../../Helpers/popUpAlert";

const initialState: IProducts = {
  id: 21,
  title: "Product Name",
  price: 0,
  image: shoppingCart,
  category: "General",
  amount: 0,
  rating: { rate: 5, count: 1 },
  onDelete: null,
  description: "No Info",
};

export default function AddNewProduct() {
  const { handleSubmit } = useForm<IProducts>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    ...initialState,
  });

  useEffect(() => {
    setState({ ...state, id: new Date().getMilliseconds()});
  }, []);

  function handleOpenWidget() {
    //@ts-ignore
    const myWidget: any = window.cloudinary.createUploadWidget(
      {
        cloudName: "avivglaser",
        uploadPreset: "e-commerce-AvivGlaser",
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          //@ts-ignore
          setState({ ...state, image: result.info.url });
        }
      }
    );
    myWidget.open();
  }

  function saveProduct(): void {
    dispatch(addProduct(state));
    popUpAlert({ icon: "success", width: 250, title: "Product Added!" });
    navigate(-1);
  }

  return (
    <>
      <Headers
        header="Add Product"
        btnText="Back"
        btnPath="Products"
        btnColor="info"
        btnIcon={<ArrowLeftIcon />}
      />
      <div className="add-product">
        <div className="new-product-form">
          <form onSubmit={handleSubmit(saveProduct)}>
            <label>Product Name:</label>
            <input
              type={"text"}
              value={state.title}
              onChange={(e) =>
                setState({ ...state, title: e.target.value.toLowerCase() })
              }
            />
            <br />
            <label>Price:</label>
            <input
              type={"number"}
              step="0.01"
              value={state.price}
              onChange={(e) => setState({ ...state, price: +e.target.value })}
            />
            <br />
            <label>Category:</label>
            <input
              type={"text"}
              value={state.category}
              onChange={(e) => setState({ ...state, category: e.target.value })}
            />
            <label>Description:</label>
            <input
              type={"text"}
              value={state.description}
              onChange={(e) =>
                setState({ ...state, description: e.target.value })
              }
            />
            <br />
            <label>Image:</label>
            <Button
              className={"upload-btn"}
              id={"upload-widget"}
              onClick={handleOpenWidget}
              variant="contained"
              children={"Upload"}
            />
            <Button
              variant="contained"
              type="submit"
              children={"Add"}
              endIcon={<AddTaskIcon />}
            />
          </form>
        </div>
        <div className="new-product-preview">
          <p>Preview:</p>
          <CreateProduct
            moreInfo={true}
            id={state.id}
            key={state.id}
            title={state.title}
            price={state.price}
            category={state.category}
            image={state.image}
            amount={0}
            rating={state.rating}
            onDelete={null}
            description={state.description}
          />
        </div>
      </div>
    </>
  );
}
