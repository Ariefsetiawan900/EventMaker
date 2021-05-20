import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container,
} from "reactstrap";
import moment from "moment";

const CardEvent = ({ posts }) => {
  console.log(posts);
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-around flex-wrap-reverse ">
        {posts.map((eventItem, index) => {
          return (
            <Col md="4" className="mb-3" key={index}>
              <Card>
                <CardImg
                  width="100px"
                  src={eventItem.img}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle tag="h6" className="mt-1">
                    {eventItem.location}
                  </CardSubtitle>
                  <CardTitle tag="h3">{eventItem.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {moment(eventItem.date).format("LL")}
                  </CardSubtitle>
                  <CardSubtitle
                    tag="h6"
                    className="mb-3 border-top border-bottom py-3 flex-wrap"
                  >
                    {eventItem.participant.map((person) => (
                      <>
                        <img
                          style={{ width: "30px" }}
                          alt="Avatar"
                          src={`https://avatars.dicebear.com/api/human/${Math.floor(
                            Math.random() * 5000
                          )}.svg`}
                        />
                        <span>{person}</span>{" "}
                      </>
                    ))}
                  </CardSubtitle>
                  <div className="bg-light p-3 rounded">
                    <CardTitle tag="h6">Note :</CardTitle>
                    <CardText>{eventItem.note}</CardText>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardEvent;
