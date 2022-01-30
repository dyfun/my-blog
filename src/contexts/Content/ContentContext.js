import { createContext, useEffect, useReducer } from "react";
import { ContentReducer } from "./ContentReducer";
import axios from "axios";

export const ContentContext = createContext();

const ContentContextProvider = ({ children }) => {
  const initialState = {
    posts: null,
    post: null,
    maxLimit: null,
  };
  const [state, dispatch] = useReducer(ContentReducer, initialState);

  const fetchPosts = async (limit) => {
    try {
      const posts = await axios.get(
        "https://tayfunguler.org/api/posts/" + limit
      );
      dispatch({
        type: "GET_POSTS",
        posts: posts.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchPost = async (slug) => {
    try {
      const post = await axios.get("https://tayfunguler.org/api/post/" + slug);
      dispatch({
        type: "GET_POST",
        post: post.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchMaxLimit = async () => {
    try {
      const posts = await axios.get("https://tayfunguler.org/api/posts/1");
      dispatch({
        type: "MAX_LIMIT",
        maxLimit: posts.data.length,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!state.maxLimit) {
      fetchMaxLimit();
      fetchPosts(4);
    }
  });

  return (
    <ContentContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        maxLimit: state.maxLimit,
        fetchPosts,
        fetchPost,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContextProvider;
