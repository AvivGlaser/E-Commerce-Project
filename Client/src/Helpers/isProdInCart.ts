import { IAddOrRemove, ICartProd } from "../Utils/interfaces";

export default function addOrRemoveAmount(props: IAddOrRemove){
  const {state,payloadId,operator} = props;
  if(operator){
    return state.map((prod: ICartProd) => (payloadId === prod.id? 
    {...prod, amount: (prod.amount -=1) }  : prod)      
     );
  } else {
    return state.map((prod: ICartProd) => (payloadId === prod.id? 
    {...prod, amount: (prod.amount +=1) }  : prod)      
     );
  }
}