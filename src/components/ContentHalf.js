import React, { useState, useEffect } from "react";
import contentDetails from "/home/dell/projects/increment/src/api/articlehalf.json";

function ContentHalf() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setDetails(contentDetails.data);
  }, []);
  //   console.log(details);
  return (
    <div className="ArticleBlockHalfRow">
      {details.map((detail) => (
        <div className="md:w-1/2">
          <a href="#">
            <img
              className="h-auto max-w-lg"
              src={detail.img}
              alt={detail.alt}
            />
          </a>

          {console.log(detail.img)}
          <a href="#" className="ArticleBlock">
            <div className="bg-blue-600 h-1.5 rounded-3xl w-1/4 hover:w-full hover:bg-black"></div>
            <h4>{detail.author}</h4>
            <h5>{detail.title}</h5>
            <p>{detail.content}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ContentHalf;
