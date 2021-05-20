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

  if (posts === undefined ) {
    return (
      <Container>
        <Header />
        <div
          className=" d-flex justify-content-center align-items-center h1"
          style={{ minHeight: "100vh",width:"100%" }}
        >
          Empty Data
        </div>
      </Container>
    );
  }
  if (!posts.length) {
    return (
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
    );
  } else {
    return(
    <div className="container">
      <Header />
      <CardEvent posts={posts} />
    </div>)
  }
};

export default Home;
