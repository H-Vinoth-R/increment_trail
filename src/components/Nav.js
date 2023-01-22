import React from "react";

function Nav() {
  return (
    <>
      <div className="py-5 bg-white shadow w-screen text-xl md:flex md:items-center md:justify-between sm:flex-wrap font-serif text-black">
        <div className="flex items-center justify-start mb-3 shrink-0 invisible md:visible">
          <a
            className="flex mx-6 border-slate-400 border-solid border-2 divide-x-2 divide-inherit"
            href="https://increment.com"
          >
            <span className="smallcaps mx-2">new</span>
            <div className="title p-1">Buy the Print edition</div>
          </a>
        </div>
        <ol className="flex items-center justify-center shrink-0 font-medium mr-4">
          <li className="px-4">Issues</li>
          <li className="px-4">Topics</li>
          <li className="px-4">Store</li>
          <li className="px-4">About</li>
        </ol>
      </div>
    </>
  );
}

export default Nav;
