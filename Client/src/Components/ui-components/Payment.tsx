//@ts-ignore
import creditCard from "../../Assets/Images/credit-card-img.jpg";
import CategoryIcon from '@mui/icons-material/Category';
import React from "react";
import { Headers } from "./Headers";
import { Image } from "./Image";
export default function Payment() {
  return (
    <div className="payment-page">
      <Headers
        header="Payment"
        subHeader="All types of credit-cards are illegible!"
        btnText="Forgot Something?"
        btnPath="products"
        btnIcon={<CategoryIcon/>}
      />
      <div className="credit-img">
      <Image src={creditCard} width={350} height={200}  />
      </div>
        <form className="payment-form">
          <input placeholder="Card number" type="text" />
          <input placeholder="Name on card" type="text" />
          <div className="half">
            <input placeholder="MM/YY" type="text" />
            <input placeholder="CVC" type="text" />
          </div>
          <button type="submit">Pay Now</button>
        </form>
    </div>
  );
}
