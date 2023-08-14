import { MouseEventHandler } from "react";

interface propsButton {
  text: string;
  onClick: MouseEventHandler;
  counter: number;
}
export default function MyBotton({ text, onClick, counter }: propsButton) {
  const isDisabled =
    text !== "Reset!"
      ? counter >= 0 && counter <= 10
        ? false
        : true
      : counter >= 0 && counter <= 10
      ? true
      : false;
  const myStyle = text !== "Reset!" ? {} : { margin: 20, display: "block" };
  return (
    <button onClick={onClick} disabled={isDisabled} style={myStyle}>
      {text}
    </button>
  );
}
