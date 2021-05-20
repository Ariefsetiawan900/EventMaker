import React, { useEffect } from "react";
import { Header, TableComponent } from "../parts";
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions/Events";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const posts = useSelector((state) => state.postEventReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    document.title = "Dashboard";
  }, [dispatch]);
  return (
    <>
      <Header />
      <TableComponent posts={posts} />
    </>
  );
};

export default Dashboard;
