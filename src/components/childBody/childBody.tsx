//@ts-nocheck
import React from "react";
import { Chrono } from "react-chrono";
function ChildBody(props) {
  return (
    <div style={{ width: "500px", height: "800px", color: "#0f52ba" }}>
      <Chrono
        items={props.cards}
        mode="VERTICAL_ALTERNATING"
        allowDynamicUpdate="true"
        scrollable={{ scrollbar: false }}
        cardPositionHorizontal="TOP"
      />
    </div>
  );
}

export default ChildBody;
