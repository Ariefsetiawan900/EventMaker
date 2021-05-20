import React, { useEffect } from "react";
import { Header, CardEvent } from "../parts";
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions/Events";
import { useSelector } from "react-redux";
import { Spinner, Container } from "reactstrap";

const Home = () => {
  const posts = useSelector((state) => state.postEventReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    document.title = "Home";
  }, [dispatch]);
  return !posts.length ? (
    <Container>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Spinner
          type="grow"
          color="light"
          style={{ width: "30rem", height: "30rem" }}
        />
      </div>
    </Container>
  ) : (
    <div className="container">
      <Header />
      <CardEvent posts={posts} />
    </div>
  );
};

export default Home;
