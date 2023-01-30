import Link from "next/link";
import { Container, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const CTA = () => {
  return (
    <section>
      <Container className="text-center">
        <h1 className="mt-5 mb-3">
          Translate Your Sentence <br /> Using AI.
        </h1>
        <Link href="/translate">
          <Button variant="primary">
            Start Translation <BsArrowRight />
          </Button>
        </Link>
      </Container>
    </section>
  );
};

export default CTA;
