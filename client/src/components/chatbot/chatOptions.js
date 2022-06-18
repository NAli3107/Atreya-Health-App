import React from "react";

import "./chatOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Healthy Living",
      handler: props.actionProvider.handleHealthList,
      id: 1,
    },
    {
      text: "Stress/Anxiety",
      handler: props.actionProvider.handleStressList,
      id: 2,
    },
    {
      text: "Mindfulness",
      handler: props.actionProvider.handleMindfulList,
      id: 3,
    },
    { text: "Safety", handler: props.actionProvider.handleSafetyList, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
