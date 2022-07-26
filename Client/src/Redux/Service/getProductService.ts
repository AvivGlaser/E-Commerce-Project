import axios from "axios"
import { URLS } from "../../Utils/config"
import { IProducts } from "../../Utils/interfaces";

export default async function getProductsApi(): Promise<IProducts[]> {
    const result = await axios.get(`${URLS.PRODUCTS_API}/${URLS.PRODUCTS_PATH}`)
    return result.data;
}