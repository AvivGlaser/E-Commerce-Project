import React from "react";
import { Image } from "./Image";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../Redux/Store/hooks";
import { ICartProd } from "../../utils/interfaces";
import {
  addAmount,
  removeAmount,
  removeFromCart,
} from "../../Redux/Reducers/productReducer";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";
import BackspaceTwoToneIcon from "@mui/icons-material/BackspaceTwoTone";
import PopUpModal from "./PopUpModal";
import popUpAlert from "../../Helpers/popUpAlert";

export default function CartProduct(props: ICartProd) {
  const dispatch = useAppDispatch();
  const { title, price, image, id, amount, index } = props;

  return (
    <div className="shopping-cart">
      {amount === 0 ? (
        <>
          <PopUpModal
            header="Oops..."
            message="Remove from cart?"
            severity="error"
            btnText="Yes"
            btnColor="success"
            btnAction={() => dispatch(removeFromCart(id))}
            secondBtnText="No"
            secondBtnAction={() => dispatch(addAmount(id))}
          />
        </>
      ) : (
        <>
          <span className="cart-prod-num">
            <b>{`${index})`}</b>
          </span>
          <Button
            children={<BackspaceTwoToneIcon />}
            className="cart-product-delete"
            size="small"
            variant="contained"
            color="error"
            onClick={() =>
              dispatch(removeFromCart(id)) &&
              popUpAlert({
                icon: "error",
                title: "Product Removed",
                width: 270,
              })
            }
          />
          <div className="cart-title">{title}</div>
          <div className="cart-image">
            <Image src={image} />
          </div>
          <div className="cart-details">
            <b>Unit Price:</b> ${price.toFixed(2)}
            {!amount ? null : (
              <Button
                children={<RemoveCircleTwoToneIcon />}
                onClick={() =>
                  dispatch(removeAmount(id)) &&
                  popUpAlert({
                    icon: "info",
                    title: "Product Removed",
                    width: 270,
                  })
                }
              />
            )}
            <b>Amount:</b> {amount}
            <Button
              children={<AddCircleTwoToneIcon />}
              onClick={() =>
                dispatch(addAmount(id)) &&
                popUpAlert({
                  icon: "success",
                  title: "Product Added!",
                  width: 250,
                })
              }
            />
            <b>Total Price:</b> ${(amount * price).toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
