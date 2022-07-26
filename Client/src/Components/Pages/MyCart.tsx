import React from "react";
import { Button } from "@mui/material";
import { removeFromCart, setCart } from "../../Redux/Reducers/productReducer";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/hooks";
import CartProduct from "../ui-components/CartProduct";
import { Headers } from "../ui-components/Headers";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { ICartProd } from "../../utils/interfaces";
import { calcCartTotal } from "../../Helpers/calcCartTotal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from 'sweetalert2'

export default function MyCart() {
  return (
    <>
      <Headers header="Your Shopping Cart" />
      <MyCartContent />
    </>
  );
}

function MyCartContent() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const myCart: Array<ICartProd> = useAppSelector((state) => state.products.cart);
  return (
    <div className="my-cart-container">
      {myCart?.length === 0 ? (
        <>
          <h4>Your cart is empty</h4>
          <br />
          <Button
            children={"Back to products?"}
            endIcon={<StorefrontIcon />}
            variant="contained"
            color="secondary"
            onClick={() => navigate("/products")}
          />
        </>
      ) : (
        <>
          {myCart?.map((p: ICartProd, index: number) => {
            const { image, title, price, id, amount, addAmount } = p;
            return (
              <CartProduct
                key={id}
                id={id}
                price={price}
                title={title}
                image={image}
                removeFromCart={removeFromCart}
                amount={amount}
                addAmount={addAmount}
                index={++index}
              />
            );
          })}
          <div className="cart-total-price">
            <p>Cart Total:</p> <h4>${calcCartTotal(myCart).toFixed(2)}</h4>
            <br />
            <Button
              children="Checkout"
              variant="contained"
              color="secondary"
              endIcon={<ShoppingCartTwoToneIcon/>}
              onClick={() => navigate("/payment")}
            /> 
             <Button
              children="Clear Cart"
              variant="contained"
              color="error"
              endIcon={<DeleteForeverIcon/>}
              onClick={() => Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Clear the cart'
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(setCart([]))
                }
              })}
            />
            <div />
          </div>
        </>
      )}
    </div>
  );
}



