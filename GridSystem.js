import React, { useState } from "react";

const GridButton = (props) => {
  const { buttonLabel, buttonClick } = props;
  return (
    <button className="gridButton" onClick={buttonClick}>
      {buttonLabel}
    </button>
  );
};

const totalNumberOfButon = [
  { title: "button1" },
  { title: "button1" },
  { title: "button1" },
  { title: "button1" },
  { title: "button1" },
  { title: "button1" },
  { title: "button1" },
  { title: "button1" },
  { title: "button1" },
];

const GridSystem = (props) => {
  const [boxOne, setBoxOne] = useState([]);
  const handleClick = (index) => {
    let count = 0;
    setBoxOne((prevValues) => {
      console.log("prevValues :: ", prevValues);
      const newValues = [...prevValues];
      count = count + 1;
      newValues[index] = count;
      return newValues;
    });
  };
  console.log("checking Box value ::: ", boxOne);

  return (
    <React.Fragment>
      <div className="mainDiv">
        {totalNumberOfButon.map((data, index) => {
          return (
            <div className="gridContainer">
              <GridButton
                buttonLabel={boxOne !== 0 ? boxOne[index] : ""}
                buttonClick={() => handleClick(index)}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default GridSystem;
