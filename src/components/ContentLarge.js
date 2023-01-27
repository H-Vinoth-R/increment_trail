import React, { useState, useEffect } from "react";
import contentDetails from "/home/dell/projects/increment/src/api/articlelarge.json";

function ContentLarge() {
  const [largecontents, setLargecontents] = useState([]);

  useEffect(() => {
    setLargecontents(contentDetails);
  }, []);

  console.log(largecontents);

  return (
    <>
      <a href="#" className="ArticleBlockLarge">
        <img
          className="ABLargeImg flipped"
          src={require("/home/dell/projects/increment/src/assets/images/how-to-make-pathfinder-soup_2x.png")}
          alt="how-to-make-pathfinder-soup_2x"
        />

        <div className="ArticleBlock ">
          <div className="bg-blue-600 h-1.5 rounded-3xl w-1/4 hover:w-full hover:bg-black"></div>
          <h4>{largecontents.author}</h4>
          <h5>{largecontents.title}</h5>
          <p>{largecontents.content}</p>
        </div>
      </a>
      <a href="#" className="ArticleBlockLarge">
        <img
          className="ABLargeImg"
          src={require("/home/dell/projects/increment/src/assets/images/how-to-make-pathfinder-soup_2x.png")}
          alt="how-to-make-pathfinder-soup_2x"
        />

        <div className="ArticleBlock ">
          <div className="bg-blue-600 h-1.5 rounded-3xl w-1/4 hover:w-full hover:bg-black"></div>
          <h4>{largecontents.author}</h4>
          <h5>{largecontents.title}</h5>
          <p>{largecontents.content}</p>
        </div>
      </a>
    </>
  );
}

export default ContentLarge;
