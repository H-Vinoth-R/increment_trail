import React, { useState, useEffect } from "react";
import data from "/home/dell/projects/increment/src/api/header.json";
import details from "/home/dell/projects/increment/src/api/current.json";
import { issueDetails } from "../texts/HeaderText";

function IssueHeader() {
  const [issueTitles, setIssueTitles] = useState([]);
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    setIssueTitles(data.data);
    setCurrent(details);
  }, []);

  return (
    <div className="w-100% block pt-20 pb-16 relative overflow-hidden text-2xl">
      <div className="block relative align-center">
        <div className="color-inherit ">
          <ul className="previous flex flex-row shrink-0 gap-16 ml-6 invisible text-xl md:visible">
            {issueTitles.map((issueTitle) => (
              <li>
                <a className="IssueTitle cursor-pointer opacity-25 hover:opacity-100">
                  {/* should add on-click event to change the state from previous
                  to current */}
                  <div className="meta smallcaps">
                    <span>{issueTitle.id}</span>
                  </div>
                  <h3 className="title px-2 flex flex-nowrap w-fit">
                    {issueTitle.title}
                  </h3>
                </a>
              </li>
            ))}
          </ul>
          <a className="current flex mx-auto justify-center cursor-pointer">
            <div className="IssueTitle large border-indigo-400 border-solid border-2">
              <div className="smallcaps meta divide-y-2 divide-indigo-400">
                <span className="before:['issue']-content">{current.id}</span>
                <span>{current.date}</span>
              </div>
              <h1 className="font-black p-2">{current.title}</h1>
            </div>
          </a>
        </div>
      </div>
      <div className="flex font-sans md:w-2/3 text-justify mx-auto p-5 text-base">
        {issueDetails}
      </div>
      <div className="flex font-sans place-content-center md:w-1/3 p-2 sm:mx-auto text-lg tracking-widest shrink-0">
        More about this issue
      </div>
    </div>
  );
}

export default IssueHeader;
