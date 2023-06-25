import React from "react";

function Layer(props) {
  return <div style={{ ...props }}></div>;
}

function Center({ children }) {
  return (
    <div
      className="flex justify-center"
      style={{
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
function Line({ color = "grey" }) {
  return <div style={{ borderBottom: "1px solid " + color }}></div>;
}

export { Layer, Center, Line };
