import { IconButton } from "@material-ui/core";
import { Replay, Close, StarRate, Favorite, FlashOn } from "@material-ui/icons";
import React from "react";
import "./SwipeButton.css";

function SwipeButton() {
  return (
    <div className="swipeButtons">
      <IconButton classname="swipeButtons__repeat">
        <Replay fontsize="large" />
      </IconButton>
      <IconButton classname="swipeButtons__left">
        <Close fontsize="large" />
      </IconButton>
      <IconButton classname="swipeButtons__star">
        <StarRate fontsize="large" />
      </IconButton>
      <IconButton classname="swipeButtons__right">
        <Favorite fontsize="large" />
      </IconButton>
      <IconButton classname="swipeButtons__lightning">
        <FlashOn fontsize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
