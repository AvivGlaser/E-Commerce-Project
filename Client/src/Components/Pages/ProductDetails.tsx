import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreateProduct } from "../ui-components/CreateProduct";
import { Headers } from "../ui-components/Headers";
import { useAppSelector } from "../../Redux/Store/hooks";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { IProducts } from "../../utils/interfaces";
import { useEffect } from "react";

export default function ProductDetails() {
  const globalProducts = useAppSelector((state) => state.products.products);
  const params: any = useParams();
  const prodId: number = +params.prodId;
  const navigate = useNavigate();

  const matchedProd: any = globalProducts?.find((p: IProducts) => {
    if (p.id === prodId) {
      return p;
    }
  });

  useEffect(() => {
    if (matchedProd === undefined) {
      navigate(-1);
    }
  }, [matchedProd]);

  return (
    <>
      <Headers
        header="More Info"
        btnText="Back"
        btnPath="products"
        btnIcon={<ArrowLeftIcon />}
      />
      {matchedProd === undefined ? null : (
        <div className="more-info">
          <CreateProduct
            id={matchedProd.id}
            moreInfo={true}
            amount={matchedProd.amount}
            image={matchedProd.image}
            title={matchedProd.title}
            price={matchedProd.price}
            category={matchedProd.category}
            favorite={false}
            rating={matchedProd.rating}
            onDelete={null}
            description={matchedProd.description}
          />
        </div>
      )}
    </>
  );
}
