import { ICartProd } from "../utils/interfaces";

export  function calcCartTotal(items: ICartProd[]){
    return items.reduce((ack: number, item) => ack + item.amount * item.price, 0)
  } 