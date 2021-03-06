import { CREATE, FETCH_PAGE } from "../types";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_PAGE:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
