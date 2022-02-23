// @ts-nocheck

import React, { useState } from "react";
import { Chrono } from "react-chrono";

import ProjectHeader from "../../components/projectHeader/projectHeader";

import ProjectChild from "../../components/projectChild/projectChild";

import StepsNode from "../../components/steps/steps-node";

import data from "../../data.json";
import NavBar from "../../components/NavBar/navBar";

const initialElements = [
  {
    // actual data

    id: "horizontal-1",

    sourcePosition: "right",

    type: "input",

    className: "dark-node",

    data: { label: "Business Understanding" },

    position: { x: 0, y: 0 },
  },

  {
    id: "horizontal-2",

    sourcePosition: "right",

    targetPosition: "left",

    type: "steps",

    style: { border: "1px solid #777", padding: 10 },

    data: {
      label: "Data Understanding",

      steps: [{ name: "50" }, { name: "2" }, { name: "3" }],
    },

    position: { x: 250, y: 0 },
  },

  {
    id: "horizontal-4",

    sourcePosition: "right",

    targetPosition: "left",

    data: { label: "Data Prep" },

    position: { x: 500, y: 0 },
  },

  // relationship mapping

  {
    id: "horizontal-e1-2",

    source: "horizontal-1",

    type: "smoothstep",

    target: "horizontal-2",

    animated: true,
  },

  {
    id: "horizontal-e1-4",

    source: "horizontal-2",

    type: "smoothstep",

    target: "horizontal-4",

    animated: true,
  },
];

const ProjectComponent = () => {
  // const data = JSON.parse(localStorage.getItem('data'));

  const [elements, setElements] = useState(initialElements);

  const nodeTypes = {
    // custom component

    steps: StepsNode,
  };

  return (
    <>
      <NavBar />
      <ProjectHeader />
      <div className="child-container">
        {data.map((data, idx) => (
          <ProjectChild {...data} key={idx} />
        ))}
      </div>
    </>
  );
};

export default ProjectComponent;
