import React from "react";
import { useParams } from "react-router-dom";
import Thumb from "../../images/thumb.jpg";

const Single = () => {
  const { slug } = useParams();
  return (
    <>
      <div className="dark:bg-gray-800 pb-16">
        <div className="container mx-auto w-11/12 sm:w-7/12 ">
          <div className="text-xl font-bold pt-12 uppercase text-center tracking-widest md:text-2xl">
            <span className="border-solid border-b-2 border-post-bg pb-5 dark:text-white border-white">
              What is Lorem Ipsum
            </span>
          </div>
          <img src={Thumb} className="mt-12 mx-auto w-7/12" />
          <div className="mt-4 p-12 shadow-xl sm:mt-6 dark:bg-gray-700">
            <div className="pt-6 text-md leading-8 text-post-text dark:text-white">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
