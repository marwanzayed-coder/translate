import { Form, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Lang = (props: any) => {
  let [languages, setLanguages] = useState([]);
  useEffect(() => {
    axios.get("/languages-list.json").then((response) => {
      setLanguages(response.data);
    });
  }, []);
  let data = languages.map(
    (language: {
      name: string;
      code: string;
      native_name: string;
      id: number;
    }) => (
      <option value={language.name} key={language.id}>
        {language.name}
      </option>
    )
  );
  const selectValue = (e: any) => {
    let { setStep, setLang } = props;
    setLang(e.target.value);
    setStep(2);
  };
  return (
    <section>
      <Container className="mt-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Select Language</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={selectValue}
          >
            <option>Select Your Language</option>
            {data}
          </Form.Select>{" "}
        </Form.Group>
      </Container>
    </section>
  );
};

export default Lang;
