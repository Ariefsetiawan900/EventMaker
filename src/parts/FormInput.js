import React from "react";
import { Ilust } from "../parts";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";

const FormInput = () => {
  return (
    <div
      className="d-flex align-items-center h-100 container w-75 "
      style={{ backgroundColor: "white", borderRadius:"2rem" }}
    >
      <Form className="form-login p-4 ">
        <h3 className="text-center mb-5">Add Event</h3>
        <Row form className="justify-content-center">
          <Col md={5}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input id="title" type="text" name="title" autoComplete="off" />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input id="location" type="text" name="location" />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="participant">Participant</Label>
              <Input id="participant" type="text" name="participant" />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input id="date" type="text" name="date" />
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <Label for="note">Note</Label>
              <Input id="note" type="textarea" name="note" />
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup>
          </Col>
        </Row>
        
          <Button color="primary" className="float-right mr-4">
            Submit
          </Button>
        
      </Form>

      <Ilust />
    </div>
  );
};

export default FormInput;
