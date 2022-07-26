import React from "react";
import { ILoader } from "../../utils/interfaces";

export default function Loader(props: ILoader) {
  return <div className="spinner">
    {props.isLoading ? props.children : ""}
   </div>;
}
