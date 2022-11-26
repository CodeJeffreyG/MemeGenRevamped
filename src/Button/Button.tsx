import "./Button.css";
import React from "react";

interface ButtonProps {
  clickFunction: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MemeButton(props: ButtonProps) {
  return (
    <div className="buttonContainer">
      <button onClick={props.clickFunction}>Get a new meme image</button>
    </div>
  );
}
