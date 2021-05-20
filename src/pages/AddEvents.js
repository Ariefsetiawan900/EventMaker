import React, { useEffect } from "react";
import { Header, FormInput } from "../parts";

const AddEvents = () => {
  useEffect(() => {
    document.title = "Add Event";
  }, []);
  return (
    <>
      <Header />
      <FormInput />
    </>
  );
};

export default AddEvents;
