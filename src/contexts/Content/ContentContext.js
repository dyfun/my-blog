import { createContext, useReducer, useEffect } from "react";
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
      if (!state.maxLimit) {
        const posts = await axios.get("https://tayfunguler.org/api/posts/1");
        dispatch({
          type: "MAX_LIMIT",
          maxLimit: posts.data.length,
        });
      } else {
        const posts = await axios.get(
          "https://tayfunguler.org/api/posts/" + limit
        );
        dispatch({
          type: "GET_POSTS",
          posts: posts.data,
        });
      }
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

  /*const setPost = (id) => {
    dispatch({ type: "SET_POST", selectedPost: id });
  };

  let status = false;
  if (state.posts) {
    status = true;
  }
  useEffect(() => fetchPosts(), []);*/

  return (
    <ContentContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        maxLimit: state.maxLimit,
        fetchPosts,
        fetchPost,
        //selectedPost: state.selectedPost,
        //setPost,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContextProvider;
