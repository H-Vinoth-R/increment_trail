import React, { useState, useEffect } from "react";
import contentDetails from "/home/dell/projects/increment/src/api/articlesingle.json";

function ContentArticle() {
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    setDetails(contentDetails.data);
  }, []);

  return (
    <>
      <div className="ArticleBlockRow">
        {Details.map((Detail) => (
          <a href="#" className="ArticleBlock">
            <div className="bg-blue-600 h-1.5 rounded-3xl w-1/4 hover:w-full hover:bg-black"></div>
            <h4>{Detail.author}</h4>
            <h5>{Detail.title}</h5>
            <p>{Detail.content}</p>
          </a>
        ))}
      </div>
    </>
  );
}

export default ContentArticle;
