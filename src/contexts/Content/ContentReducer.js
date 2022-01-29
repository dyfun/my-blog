export const ContentReducer = (state, action) => {
    switch (action.type) {
      case "GET_POSTS":
        return {
          ...state,
          posts: action.posts,
        };
        case "GET_POST":
          return {
            ...state,
            post: action.post,
          };
          case "MAX_LIMIT":
            return {
              ...state,
              maxLimit: action.maxLimit,
            };
        /*case "SET_POST":
          return {
            ...state,
            selectedPost: state.posts.filter(post => post.slug === action.selectedPost)[0],
          };*/
      default:
        break;
    }
  };