import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Thumb from "../../images/thumb.jpg";
import parse from "html-react-parser";

const Single = ({ post, fetchPost }) => {
  const { slug } = useParams();
  let status = false;
  if (post) {
    status = true;
  }
  useEffect(() => fetchPost(slug), [status]);
  return (
    <>
      {post && (
        <div className="dark:bg-gray-800 pb-16"> 
          <div className="container mx-auto w-11/12 sm:w-7/12 ">
            <div className="text-xl font-bold pt-12 uppercase text-center tracking-widest md:text-2xl">
              <span className="border-solid border-b-2 border-post-bg pb-5 dark:text-white dark:border-white">
                {post.title}
              </span>
            </div>
            <img src={Thumb} className="mt-12 mx-auto w-7/12" />
            <div className="mt-4 p-12 shadow-xl sm:mt-6 dark:bg-gray-700">
              <div className="pt-6 text-md leading-8 text-post-text dark:text-white">
              {parse(post.detail)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Single;
