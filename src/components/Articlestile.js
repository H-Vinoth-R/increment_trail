import React, { useState, useEffect } from "react";
import issuedetails from "/home/dell/projects/increment/src/api/articletile.json";

function Articlestile() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(issuedetails.data);
  }, []);
  console.log(articles);

  return (
    <div className="Ai">
      <h1 className="smallcaps">all issues</h1>
      <div className="issuetileArrange">
        {articles.map((article) => (
          <div className="largeTile ">
            <div className="firstSection">
              <span>{article.issue}</span>
              <span>{article.date}</span>
            </div>
            <h1>{article.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articlestile;
