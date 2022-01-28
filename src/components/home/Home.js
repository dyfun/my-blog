import React from "react";
import Hero from "./Hero";
import Content from "./Content";

const Home = ({posts}) => {
  return (
    <>
      <Hero />
      <Content posts={posts}/>
    </>
  );
};

export default Home;
