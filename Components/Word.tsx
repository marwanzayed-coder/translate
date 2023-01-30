import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Word = (props: any) => {
  let [value, setValue]: [string, any] = useState("");
  const getText = () => {
    let { setText, setStep } = props;
    setText(value);
    setStep(3);
  };
  return (
    <section>
      <Container>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write Your Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e: any) => setValue(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={getText}>
          Translate <BsArrowRight />
        </Button>
      </Container>
    </section>
  );
};

export default Word;
