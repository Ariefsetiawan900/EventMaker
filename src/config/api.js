import axios from "axios";

// const API = axios.create({ baseURL: "https://memories2021.herokuapp.com" });
const API = axios.create({ baseURL: "http://localhost:4006/api/v1" });


// api Posts
export const createPost = (newEvent) => API.post("/createEvent", newEvent);


