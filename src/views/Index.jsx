
import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import { Container, Row ,Col,CardImg,Card,CardBody,CardTitle} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

// index page sections
import Hero from "./IndexSections/Hero.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <section className="section">
            <Container>
              <Row className="py-3 align-items-center" style={{textAlign: "center" }}>
                <Col sm="12">
                  <h6 className="display-4 mb-0" style={{fontSize: "larger",textAlign: "center"}}>
                  Building Brands The Ultimate 
                  Business Relationship With Handcrafted Direct-To-Desk Engagement
                  </h6>
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "28px",textAlign: "center" }}
                    src={require("assets/img/touched/Artboard.png")}
                  />
                </Col>
             </Row>
            </Container>
          </section>
          <section className="section">
            <Container>
              <Row className="py-3 align-items-center" style={{textAlign: "center" }}>
                <Col sm="12">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{textAlign: "center" }}
                    src={require("assets/img/touched/sending-gift.png")}
                  />
                </Col>
             </Row>
            </Container>
          </section>
          <section className="section">
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                <h3 className="display-4 mb-0" style={{padding: "50px 50px 0px 50px"}}>Creative Touchpoints Are Our Passion</h3>
                <footer className="blockquote-footer" style={{padding: "50px" }}>
                sample body text go to here.sample body text go to here.sample body text go to here.
                sample body text go to here.sample body text go to here.
                sample body text go to here.sample body text go to here
                sample body text go to here.sample body text go to here.sample body text go to here
                sample body text go to here.sample body text go to here
              </footer>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
              <img
                    alt="..."
                    className="ml-1"
                    style={{textAlign: "center" }}
                    src={require("assets/img/touched/cutting-phone.png")}
                  />
              </Col>
            </Row>
          </Container>
          </section>

          <section className="section">
          <Container className="container-lg">
            <Row>
            <Col className="mb-5 mb-lg-0" md="6">
              <img
                    alt="..."
                    className="ml-1"
                    style={{textAlign: "center" }}
                    src={require("assets/img/touched/oldon-brain.png")}
                  />
              </Col>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                <h3 className="display-4 mb-0" style={{padding: "50px 50px 0px 50px" , textAlign: "right" }}>Creative Touchpoints Are Our Passion</h3>
                <footer className="blockquote-footer" style={{padding: "50px" , textAlign: "right" }}>
                sample body text go to here.sample body text go to here.sample body text go to here.
                sample body text go to here.sample body text go to here.
                sample body text go to here.sample body text go to here
                sample body text go to here.sample body text go to here.sample body text go to here
                sample body text go to here.sample body text go to here
              </footer>
                </Card>
              </Col>
            </Row>
          </Container>
          </section>
          <section className="section">
            <Container>
              <Row className="py-3 align-items-center" style={{textAlign: "center" }}>
                <Col sm="12">
                  <h6 className="display-4 mb-0" style={{fontSize: "larger",textAlign: "center"}}>
                  Relationship Fueled By A Hyper-Personalized Customer Experience
                  </h6>
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "28px",textAlign: "center" }}
                    src={require("assets/img/touched/Artboard.png")}
                  />
                </Col>
             </Row>
            </Container>
          </section>
          <section className="section">
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/touched/home-icon-01.png")}
                      style={{padding: "50px" }}
                    />
                    <CardBody>
                      <CardTitle className="display-4 mb-0"  style={{textAlign: "center" }}> Hyper-Personalized</CardTitle>
                    </CardBody>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/touched/home-icon-02.png")}
                      style={{padding: "50px" }}
                    />
                    <CardBody>
                      <CardTitle className="display-4 mb-0"  style={{textAlign: "center" }}> Fully Automated</CardTitle>
                    </CardBody>
                </Card>
              </Col>
              <Col className="mb-5 mb-md-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/touched/home-icon-03.png")}
                      style={{padding: "50px" }}
                    />
                    <CardBody>
                      <CardTitle className="display-4 mb-0"  style={{textAlign: "center" }}> White Labeled</CardTitle>
                    </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          </section>
          <section className="section">
            <Container>
              <Row className="py-3 align-items-center" style={{textAlign: "center" }}>
                <Col sm="12">
                  <h6 className="display-4 mb-0" style={{fontSize: "larger",textAlign: "center"}}>
                  Relationship Fueled By A Hyper-Personalized Customer Experience
                  </h6>
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "28px",textAlign: "center" }}
                    src={require("assets/img/touched/Artboard.png")}
                  />
                </Col>
             </Row>
             <Row className="py-3 align-items-center" style={{textAlign: "center" }}>
             <p className="text-muted mb-0">
             sample body text go to here.sample body text go to here.sample body text go to here.
                sample body text go to here.sample body text go to here.
                sample body text go to here.sample body text go to here
              </p>
             </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
