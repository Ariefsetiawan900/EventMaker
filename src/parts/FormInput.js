import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

import { Ilust } from "../parts";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";

import FileBase from "react-file-base64";
import { createPost } from "../store/actions/Events";

const FormInput = () => {
  const [postEvent, setPostEvent] = useState({
    title: "",
    location: "",
    date: "",
    participant: "",
    note: "",
    img: "",
  });

  const history = useHistory()
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postEvent));
    console.log(postEvent);
    clear();
    history.push("/")
  };

  const clear = ()=>{
    setPostEvent({
      title: "",
      location: "",
      date: "",
      participant: "",
      note: "",
      img:"",
    })
  }
  return (
    <div
      className="d-flex align-items-center h-100 container w-75 "
      style={{ backgroundColor: "white", borderRadius: "2rem" }}
    >
      <Form onSubmit={handleSubmit} className="form-login p-4 ">
        <h3 className="text-center mb-5">Add Event</h3>
        <Row form className="justify-content-center">
          <Col md={5}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                type="text"
                name="title"
                autoComplete="off"
                onChange={(e) =>
                  setPostEvent({ ...postEvent, title: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                id="location"
                type="text"
                name="location"
                onChange={(e) =>
                  setPostEvent({ ...postEvent, location: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="participant">Participant</Label>
              <Input
                id="participant"
                type="text"
                name="participant"
                onChange={(e) =>
                  setPostEvent({ ...postEvent, participant: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                id="date"
                type="date"
                name="date"
                onChange={(e) =>
                  setPostEvent({ ...postEvent, date: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <Label for="note">Note</Label>
              <Input
                id="note"
                type="textarea"
                name="note"
                onChange={(e) =>
                  setPostEvent({ ...postEvent, note: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostEvent({ ...postEvent, img: base64 })
                }
              />
            </FormGroup>
          </Col>
        </Row>

        <Button color="primary" type="submit" className="float-right mr-4">
          Submit
        </Button>
      </Form>

      <Ilust />
    </div>
  );
};

export default FormInput;
