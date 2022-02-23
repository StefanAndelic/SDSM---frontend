// @ts-nocheck

import React, { useState } from "react";

import ChildBlock from "../childBlock/childBlock";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCheckCircle,
  faPauseCircle,
  faPlayCircle,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";

import internal from "stream";

const ChildHeader = (props) => {
  let color: string;

  let iconName: IconDefinition;

  let numTeamMembers: number = props.teamMembers.length;

  if (props.status === "complete") {
    color = "#4caf50";
    iconName = faCheckCircle;
  } else if (props.status === "inprogress") {
    color = "#2196f3";
    iconName = faPlayCircle;
  } else if (props.status === "incomplete") {
    color = "grey";
    iconName = faPauseCircle;
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        {props.teamMembers.map(() => (
          <span
            style={{ fontSize: "20px", color: "grey", padding: "0 8px 0 0" }}
          >
            <FontAwesomeIcon icon={faUserCircle} />
          </span>
        ))}
      </div>

      <div className="child-head">
        <span
          style={{
            textAlign: "right",
            fontSize: "20px",
            color,
            padding: "0 8px 0 0",
          }}
        >
          <FontAwesomeIcon icon={iconName} />
        </span>

        {props.title}
      </div>

      <div className="child-head-href">
        {props.href && <a href={props.href[1]}> documentation</a>}
      </div>

      <hr className="child-hr" />
    </>
  );
};

export default ChildHeader;
