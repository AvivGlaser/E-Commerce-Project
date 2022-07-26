import React from "react";
// @ts-ignore
import { Headers } from "../ui-components/Headers";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { homeImgData } from "../../Data/home-images";
import { IImgData } from "../../utils/interfaces";

export default function Homepage() {
  const navigate = useNavigate();
  const homeImages: Array<IImgData> = homeImgData;
  return (
    <>
      <Headers
        header="Welcome to my e-commerce site!"
        subHeader="Already have an account?"
        btnText="Login"
        btnPath="login"
        btnIcon={<LoginIcon />}
      />
      <div className="home-page">
      <ImageList sx={{ width: 600, margin: 0, overflow: "hidden"}} gap={0.5} cols={3} rowHeight={155}>
      {homeImages.map((item: any) => (
        <ImageListItem key={item.title} className="home-images">
                <img
                  src={`${item.src}`}
                  srcSet={`${item.src}`}
                  alt={item.title}
                  loading="lazy"
                  />
              </ImageListItem>)
            )}
          </ImageList>
          </div>
      <div className="project-info">
        <h1>About the project:</h1>
        <p>
          A frontend only demonstration of an e commerce site. <br />
          The user can add new products to the array, and also to his
          shopping cart. <br />
          backend side will be added shortly.
          <br /> <b>Bonus:</b> type game.
        </p>
        <div className="project-technologies">
          <h5>Technologies  & Frameworks:</h5>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Redux Toolkit</li>
            <li>Mui</li>
            <li>Cloudinary</li>
          </ul>
        </div>
        <div className="project-features">
          <h5>Futre Features:</h5>
          <ul>
            <li>Login & Registration</li>
            <li>Authentication & Authorization (via JWT) </li>
          </ul>
        </div>
        <Button
        size="small"
          variant="contained"
          color="secondary"
          children="About"
          onClick={() => navigate("/about")}
          endIcon={<InfoIcon />}
        />
      </div>
    </>
  );
}

