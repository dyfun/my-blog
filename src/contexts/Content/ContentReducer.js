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
      default:
        break;
    }
  };