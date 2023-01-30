import { Container, Row, Col, Card } from "react-bootstrap";

const Features = () => {
  return (
    <section className="mt-5 pt-5">
      <h2 className="text-center">Features</h2>
      <div className="py-5 service-24">
        <Container>
          <Row className="wrap-service-24" xs={1} md={2} lg={3}>
            <Col>
              <Card className="rounded card-shadow border-0 mb-4">
                <span className="card-hover py-4 text-center d-block rounded">
                  <span className="bg-success-grediant">I</span>
                  <h6 className="ser-title">It Translates Accurately</h6>
                </span>
              </Card>
            </Col>
            <Col>
              <Card className="rounded card-shadow border-0 mb-4">
                <span className="card-hover py-4 text-center d-block rounded">
                  <span className="bg-success-grediant">F</span>
                  <h6 className="ser-title">Free and open source</h6>
                </span>
              </Card>
            </Col>
            <Col>
              <Card className="rounded card-shadow border-0 mb-4">
                <span className="card-hover py-4 text-center d-block rounded">
                  <span className="bg-success-grediant">A</span>
                  <h6 className="ser-title">AI Is Used.</h6>
                </span>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Features;
