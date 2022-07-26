import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IHeader } from "../../utils/interfaces";

Headers.defaultProps = {
  defaultMainHeader: "Your header goes here!",
};

export function Headers(props: IHeader) {
  const navigate = useNavigate();
  const { header, subHeader, text, btnPath, btnText, btnIcon, btnColor="info" } = props;
  const  defaultMainHeader  = Headers.defaultProps;
  
  return (
    <div className="headers-component">
      <div className="overlay">
        <h1>{header ? header : defaultMainHeader}</h1>
        <h3>{subHeader}</h3>
        <p>{text}</p>
        <br />
        {btnPath && (
          <Button
          variant="contained"
          children={btnText}
          endIcon={btnIcon}
          onClick={() => navigate(`/${btnPath}`)}
          color={btnColor}
          />
     
        )}
      </div>
    </div>
  );
}
