//@ts-ignore
import coupon from "../../Assets/Images/coupon-img.png";
import { Slider } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import useWordGame from "../../Hooks/useWordGame";
import PopUpModal from "../ui-components/PopUpModal";

export default function Games() {
  return (
    <div className="type-content">
      <GamesContent />
    </div>
  );
}

export function GamesContent() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
    sumbitTime,
    restartGame
  } = useWordGame(60);

  return (
    <div>
      {wordCount >= 100 ? 
        <PopUpModal
          header="Congratulations!"
          message={`${wordCount} Words... Outstanding job!`}
          severity="success"
          btnText="OK"
          image={coupon}
          btnColor="info"
        />
       : null} 
      <h1 className="type-header"> Ready For A Challange?</h1>
      <h6>Type 100 words in 60 seconds to get a free delivery coupon!</h6>
      <textarea
        className="type-text"
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <Slider
        sx={{ width: 300, color: "lime", margin: 2 }}
        aria-label="Always visible"
        defaultValue={60}
        min={5}
        max={60}
        step={5}
        value={timeRemaining}
        valueLabelDisplay={"auto"}
        onChange={sumbitTime}
        disabled={isTimeRunning}
      />
      <h6>Time remaining: {timeRemaining} Seconds </h6>
      <Button
        startIcon={<RestartAltIcon />}
        variant={"contained"}
        className="type-btn"
        onClick={restartGame}
        sx={{ background: "#00b800 !important" }}
        children={"Clear"}
      />
      <Button
        startIcon={<PlayArrowIcon />}
        variant={"contained"}
        className="type-btn"
        onClick={startGame}
        sx={{ background: "#00b800 !important", margin: "2%" }}
        children={"Start"}
      />
      <h1>Score: {wordCount}</h1>
    </div>
  );
}
