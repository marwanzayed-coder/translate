import { Container, Tab, Tabs } from "react-bootstrap";
import { BsTranslate, BsFillFileWordFill } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";

const HowWork = () => {
  return (
    <Container className="mt-5 pt-5">
      <h2 className="text-center my-5">How It Work</h2>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 d-flex"
      >
        <Tab eventKey="one" title="01">
          <BsTranslate size="32px" className="my-2" />
          <h3>Select Your Language</h3>
          <p>
            Choose the language you want to translate to and all languages are
            available.
          </p>
        </Tab>
        <Tab eventKey="two" title="02">
          <BsFillFileWordFill size="32px" className="my-2" />
          <h3>Write Your Sentence</h3>
          <p>
            Write the words you want to translate and write them in any language
            you want.
          </p>
        </Tab>
        <Tab eventKey="three" title="03">
          <FaCopy size="32px" className="my-2" />
          <h3>Copy Text</h3>
          <p>Copy the translated text you have.</p>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default HowWork;
