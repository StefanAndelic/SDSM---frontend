//@ts-nocheck
import React from "react";
import ChildBody from "../childBody/childBody";
import ChildHeader from "../childHeader/childHeader";

function ProjectChild(props) {
  return (
    <div className="child-main">
      <ChildHeader {...props} />
      <ChildBody {...props} />
    </div>
  );
}

export default ProjectChild;
