import React from "react";
import { Headers } from "../ui-components/Headers";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Fab } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

export default function Settings() {
  return (
    <div className="settings-content">
      <SettingsContent />
    </div>
  );
}

export function SettingsContent() {
  return (
    <>
      <Headers header="Settings" />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch", display: "inline" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="settings-form">
          <TextField
            required
            id="standard-required"
            label="Username"
            variant="standard"
          />
          <TextField
            required
            label="Password"
            variant="standard"
            type="password"
          />
          <TextField
            id="standard-read-only-input"
            defaultValue="Change Password?"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
          <TextField
            label="New Password"
            type="password"
            variant="standard"
            aria-describedby="outlined-weight-helper-text"
          />
        </div>
      </Box>
          <Fab aria-label="save" color="primary" children={<SaveIcon />} sx={{marginBottom: 4}} />
    </>
  );
}
