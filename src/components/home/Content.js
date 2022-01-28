import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const Content = ({ posts }) => {
  return (
    <div className="dark:bg-gray-800 pb-16">
      <div className="container mx-auto w-11/12 md:w-7/12">
        <div className="text-2xl font-bold pt-12 uppercase text-center tracking-widest">
          <span className="border-solid border-b-2 border-post-bg pb-5 dark:text-white dark:border-white">
            {"</>"}
          </span>
        </div>
        {posts
          ? posts.map((post) => {
              return (
                <div className="mt-12 p-12 transition hover:shadow-xl hover:transition dark:bg-gray-700 overflow-hidden rounded"> 
                  <Link to={post.slug}>
                    <h3 className="font-bold uppercase text-2xl text-center dark:text-white">
                      {post.title}
                    </h3>
                    <div className="pt-6 text-md leading-8 text-post-text dark:text-white">
                      {parse(post.detail.substring(0, 200))}
                    </div>
                  </Link>
                </div>
              );
            })
          : "Yükleniyor..."}
      </div>
    </div>
  );
};

export default Content;
