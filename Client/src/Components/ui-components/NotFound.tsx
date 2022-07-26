//@ts-ignore
import notFound from "../../Assets/Images/not-found-img.jpg";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "../ui-components/Image";
import HomeIcon from '@mui/icons-material/Home';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <Image src={notFound} width={350} height={350}/>
      <br/>
      <Button
      children="Home"
      startIcon={<HomeIcon/>}
      variant="contained"
      onClick={()=>{
        navigate("/")
      }}
      />
    </div>
  );
}
