import React, { useState, useEffect } from "react";
import contentDetails from "/home/dell/projects/increment/src/api/articlesingle.json";

function ContinueReading() {
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    setDetails(contentDetails.data);
  }, []);

  return (
    <>
      <div className="Cr">
        <h1>CONTINUE READING</h1>
        <div className="grid md:grid-cols-3 mx-8 space-x-4 space-y-4">
          {Details.map((detail) => (
            <div className="Crblock ">
              <div className="smalltile">
                <span>1</span>
                <span>vinoth</span>
              </div>
              <h4>{detail.author}</h4>
              <h5>{detail.title}</h5>
              <p>{detail.content}</p>
            </div>
          ))}
          {Details.map((detail) => (
            <div className="Crblock ">
              <div className="smalltile">
                <span>1</span>
                <span>vinoth</span>
              </div>
              <h4>{detail.author}</h4>
              <h5>{detail.title}</h5>
              <p>{detail.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ContinueReading;
