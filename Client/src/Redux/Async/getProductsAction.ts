import { store } from "../Store/Store";
import { setError, setProducts } from "../Reducers/productReducer";
import getProductsApi from "../Service/getProductService";

export default async function GetProducts() {
  try {
    const result: Array<any> = await getProductsApi();
    store.dispatch(setProducts(result));
  } catch (err: any) {
    store.dispatch(setError(err.message));
  }
}
