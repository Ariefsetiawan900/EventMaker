// import { DELETE, UPDATE, FETCH_ALL, CREATE } from "../constants/actionTypes";

export default (posts = [], action) => {
  // console.log(action);
  switch (action.type) {
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
