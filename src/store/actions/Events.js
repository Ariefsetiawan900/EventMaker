import { CREATE, FETCH_PAGE } from "../types";
import * as api from "../../config/api";

// fecth data
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fecthPosts();
    dispatch({ type: FETCH_PAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// post event
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
