import React from "react";
import { Image } from "../ui-components/Image";
import { Headers } from "../ui-components/Headers";
import { Button, Input } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useToggler from "../../Helpers/onToggler";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PersonIcon from "@mui/icons-material/Person";

export default function Login() {
  const [passwordShown, setPasswordShown]: any =  useToggler(false);

  return (
    <div className="login">
      <Headers
        header="Login"
        subHeader="Don't have an account yet?"
        btnText="Register Now"
        btnPath="Register"
        btnIcon={<AppRegistrationIcon />}
        btnColor="secondary"
      />
      <div className="login-subHeader">
        <h2> Sign In </h2>
      </div>
      <div className="fadeIn first">
        <Image src="https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454" />
      </div>
      <div className="login-form">
        <form>
          <Input
            className="fadeIn second"
            type={"text"}
            placeholder="Username:"
            endAdornment={<PersonIcon />}
          />
          <Input
            className="fadeIn third"
            autoComplete=""
            type={passwordShown ? "text" : "password"}
            placeholder="Password:"
            endAdornment={
              <VisibilityIcon onClick={setPasswordShown} className="eye-icon" />
            }
          />
          </form>
        </div>
        <br />
        <Button children="Login" variant="contained" endIcon={<VpnKeyIcon />} />
      </div>
  );
}
