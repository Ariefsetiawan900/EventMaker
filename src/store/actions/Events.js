// import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../constants/actionTypes";
import * as api from "../../config/api";

// Action Creator
// export const getPosts = () => async (dispatch) => {
//   try {
//     const { data } = await api.fecthPosts();
//     dispatch({ type: FETCH_ALL, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};