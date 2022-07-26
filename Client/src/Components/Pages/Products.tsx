import React from "react";
import { Search } from "../ui-components/Search";
import Loader from "../ui-components/Loader";
import { Headers } from "../ui-components/Headers";
import onDelete from "../../Helpers/onDelete";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppSelector } from "../../Redux/Store/hooks";
import GetProducts from "../../Redux/Async/getProductsAction";
import GetProduct from "../ui-components/GetProduct";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PopUpModal from "../ui-components/PopUpModal";
import searchHandler from "../../Helpers/searchHandler";

export function ProductsPage() {
  const globalProducts: any = useAppSelector(
    (state) => state.products.products
  );
  const error = useAppSelector((state) => state.products.error);
  const [localProducts, setLocalProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    if (globalProducts.length === 0) {
      GetProducts();
    }
  }, []);

  useEffect(() => {
    setLocalProducts(globalProducts);
  }, [globalProducts]);

  return (
    <div className="products">
      {error ? (
        <PopUpModal
          header="Oops..."
          message={error}
          btnColor="error"
          btnText="ok"
        />
      ) : null}
      {globalProducts.length === 0 ? (
        <Loader isLoading={true} />
      ) : (
        <div className="product-content">
          <Headers
            header="Our products:"
            subHeader="Happy shopping!"
            btnText="Add Product"
            btnPath="products/new"
            btnIcon={<AddShoppingCartIcon />}
          />
          <Search searchHandler={(e: ChangeEvent<HTMLInputElement>) => searchHandler(e, setSearchVal)} />
          <GetProduct
            state={localProducts}
            searchVal={searchVal}
            onDelete={onDelete}
          />
        </div>
      )}
    </div>
  );
}
