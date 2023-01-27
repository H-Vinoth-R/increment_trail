import React from "react";
import Articlestile from "../components/Articlestile";
import ContentArticle from "../components/ContentArticle";
import ContentHalf from "../components/ContentHalf";
import ContentLarge from "../components/ContentLarge";
import ContinueReading from "../components/ContinueReading";
import Footer from "../components/Footer";
import IssueHeader from "../components/IssueHeader";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <IssueHeader />
      <ContentArticle />
      <ContentHalf />
      <ContentLarge />
      <ContinueReading />
      <Articlestile />
      <Footer />
    </>
  );
}

export default Home;
