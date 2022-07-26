import { AlertColor  } from "@mui/material";
import React, { ReactComponentElement } from "react";
import  { SweetAlertIcon } from "sweetalert2";

export interface IRoute {
  path: string;
  element: ReactComponentElement<any>;
  linkText: string | any;
  className?: string;
  visibility?: boolean;
  key?: string | any;
}

export interface IProducts  {
  id: number;
  title: string;
  price: number;
  category: string;
  amount: number;
  onDelete: any;
  image?: any;
  key?: any;
  state?: any;
  description?: string;
  favorite?: Boolean;
  moreInfo?: Boolean;
  rating?: any;
  addToCart?: ICartProd;
}

export interface ProductsState {
  products: Array<IProducts>;
  cart: Array<ICartProd>;
  error: string;
}

export interface IGetProduct {
  state: Array<any>;
  searchVal: string;
  onDelete?: any;
}

export interface ICartProd {
  id: number;
  price: number;
  title: string;
  image: any;
  amount: number;
  index?: number;
  item?: any;
  addAmount?: Function;
  removeFromCart?: Function;
}

export interface IPopUpModal {
  header: string;
  message: string | number;
  btnColor: string | any ;
  severity?: AlertColor;
  image?: any;
  btnText?: string;
  btnAction?: Function | any;
  secondBtnAction?: Function | any;
  secondBtnText?: string;
  isLoading?: boolean;
  secondBtnColor?:  string | any;
}

export interface IImageProps {
  src: string;
  defaultImage?: string;
  height?: number;
  width?: number;
}

export interface IHeader {
  header: string;
  subHeader?: string;
  text?: string;
  btnText?: string;
  btnPath?: string;
  btnIcon?: React.ReactNode;
  btnColor?: string | any;
}

export interface IAlert {
  icon: SweetAlertIcon;
  title: string;
  width?: number;
}

export interface ILoader {
  isLoading?: boolean;
  children?: any;
}

export interface ISearch {
  searchHandler: Function;
}

export interface IImgData {
  src: string,
  title: string
}

export interface IAddOrRemove {
  state: Array<any>,
  payloadId: number,
  operator: boolean,  
}
