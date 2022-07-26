import { setProducts } from "../Redux/Reducers/productReducer";
import { store } from "../Redux/Store/Store";
import popUpAlert from "./popUpAlert";
import { ICartProd, IProducts } from "../Utils/interfaces";

export default function onDelete(state: Array<any>, id: number) {
    let filterd: Array<any> = state?.filter((x: IProducts | ICartProd) => {
        return x.id !== id;
    });
    store.dispatch(setProducts(filterd)) && popUpAlert({icon:"error", title:"Product Deleted", width:270})
}

