import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Ilust } from "../parts";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Button,
  FormFeedback,
} from "reactstrap";

import { useDispatch } from "react-redux";

import FileBase from "react-file-base64";
import { createPost } from "../store/actions/Events";

const FormInput = () => {
  const [errorNote, setErrorNote] = useState(false);
  const [postEvent, setPostEvent] = useState({
    title: "",
    location: "",
    date: "",
    participant: "",
    note: "",
    img: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postEvent.note.length < 50) {
      return setErrorNote(true);
    } else {
      setErrorNote(false);
      dispatch(createPost(postEvent));
      console.log(postEvent);
      clear();
      toast.success("Created a new event", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/");
    }
  };

  const clear = () => {
    setPostEvent({
      title: "",
      location: "",
      date: "",
      participant: "",
      note: "",
      img: "",
    });
  };
  return (
    <div
      className="d-flex align-items-center h-100 container w-75"
      style={{ backgroundColor: "white", borderRadius: "2rem" }}
    >
      <Form onSubmit={handleSubmit} className="form-login p-4 ">
        <h3 className="text-center mb-5">Add Event</h3>
        <Row form className="justify-content-center">
          <Col md={5}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
              placeholder="enter title"
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
              placeholder="enter location"
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
              placeholder="enter participant"
                id="participant"
                type="text"
                name="participant"
                onChange={(e) =>
                  setPostEvent({ ...postEvent, participant: e.target.value.split(",") })
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
                invalid={errorNote}
                id="note"
                placeholder="enter note"
                type="textarea"
                min="50"
                name="note"
                onChange={(e) =>
                  setPostEvent({ ...postEvent, note: e.target.value })
                }
              />
              <FormFeedback>min 50 characters</FormFeedback>
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
        {postEvent.title !== "" &&
          postEvent.location !== "" &&
          postEvent.date !== "" &&
          postEvent.participant !== "" &&
          postEvent.note !== "" &&
          postEvent.img !== "" && (
            <Button
              color="primary"
              type="submit"
              className="float-right  btnForm"
            >
              Submit
            </Button>
          )}
      </Form>

      <Ilust />
    </div>
  );
};

export default FormInput;
