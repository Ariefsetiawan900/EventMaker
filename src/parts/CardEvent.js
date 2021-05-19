import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";

const CardEvent = () => {
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center ">
        <Col md="4" className="mb-3">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://d2pa5gi5n2e1an.cloudfront.net/id/images/article/11532_ID/top.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardSubtitle tag="h6" className="mt-1">
                PISANGAN TIMUR, JAKARTA
              </CardSubtitle>
              <CardTitle tag="h3" className="my-3">
                Meeting With CEO
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-3 text-muted">
                17 Agustus 2021
              </CardSubtitle>
              <CardSubtitle
                tag="h6"
                className="mb-3 border-top border-bottom py-4"
              >
                kawan ....
              </CardSubtitle>
              <div className="bg-light p-3">
                <CardTitle tag="h6">Note :</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardEvent;
