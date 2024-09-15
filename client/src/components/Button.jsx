import React from "react";
import "./Button.css";
function Button({ name, fontSize, background }) {
  return (
    <>
      <div>
        <button
          style={{
            fontSize,
            background,
            paddingInline: "20px",
            borderRadius: "10px",
            paddingBlock: "8px",
            backgroundColor: " #ffa400",
            border: "none",
            outline: "none",
            cursor: "pointer",
 fontSize:"12px",
            transition: "0.3s all ease",
          }}
        >
          {name}
        </button>
      </div>
    </>
  );
}

export default Button;
