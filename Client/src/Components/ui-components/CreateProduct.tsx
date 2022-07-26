import React from "react";
import { useNavigate } from "react-router-dom";
import { IProducts } from "../../utils/interfaces";
import { Image } from "./Image";
import { Likes } from "./Likes";
import { useAppDispatch } from "../../Redux/Store/hooks";
import { addToCart } from "../../Redux/Reducers/productReducer";
import useToggler from "../../Helpers/onToggler";
import popUpAlert from "../../Helpers/popUpAlert";
import { Button, Card, CardActions, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function CreateProduct(props: IProducts) {
  const {
    id,
    title,
    price,
    category,
    image,
    amount,
    description,
    moreInfo,
    rating,
    onDelete,
    state,
  } = props;
  const { rate = 1, count } = rating;
  const [favorite, setFavorite]: any = useToggler(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Card className="single-product">
        <CardActions className="product-icons">
          {moreInfo ? null : (
            <Button
              endIcon={<DeleteIcon />}
              onClick={() => onDelete(state, id)}
            />
          )}
          <Button
            endIcon={<ShoppingCartIcon />}
            onClick={() =>
              dispatch(addToCart({ price, title, id, image, amount })) &&
              popUpAlert({
                icon: "success",
                title: "Product Added!",
                width: 270,
              })
            }
          />
          <Button
            endIcon={favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            onClick={setFavorite}
          />
        </CardActions>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <div className="prod-image-container">
          <Image src={image} width={250} height={250} />
          <div className="prod-image-middle">
            {moreInfo ? null : (
              <div
                className="prod-image-text"
                onClick={() => navigate(`/products/details/${id}`)}
              >
                More Info?
              </div>
            )}
          </div>
        </div>
        <br />
        <Typography>
          <b>Price:</b> ${price}
          <br />
          <b>Category:</b> {category}
        </Typography>
        {moreInfo ? (
          <>
            <br />
            <b>Rating:</b> {rate} || <b>Stock:</b> {count}
            <br />
            <b>Description:</b> {description}
          </>
        ) : null}
        <Likes />
      </Card>
    </>
  );
}
