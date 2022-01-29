import React from "react";
import Hero from "./Hero";
import Content from "./Content";

const Home = ({ posts, limit, newLimit, maxLimit}) => {
  return (
    <>
      <Hero />
      <Content
        posts={posts}
        newLimit={newLimit}
        maxLimit={maxLimit}
        limit={limit}
      />
    </>
  );
};

export default Home;
