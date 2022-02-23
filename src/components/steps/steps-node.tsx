// @ts-nocheck

import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }} // this is the dot color
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />

      <div>{data.label}</div>

      <ul>
        {data.steps.map((step, idx) => (
          <li key={idx}>{step.name}</li>
        ))}
      </ul>

      <Handle
        type="source"
        position="right"
        style={{ top: 10, background: "#555" }}
        isConnectable={isConnectable}
      />
    </>
  );
});
