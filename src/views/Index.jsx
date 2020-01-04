
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Container, Row ,Col,CardImg,Card} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

// index page sections
import Hero from "./IndexSections/Hero.jsx";
import Buttons from "./IndexSections/Buttons.jsx";
import Inputs from "./IndexSections/Inputs.jsx";
import CustomControls from "./IndexSections/CustomControls.jsx";
import Menus from "./IndexSections/Menus.jsx";
import Navbars from "./IndexSections/Navbars.jsx";
import Tabs from "./IndexSections/Tabs.jsx";
import Progress from "./IndexSections/Progress.jsx";
import Pagination from "./IndexSections/Pagination.jsx";
import Pills from "./IndexSections/Pills.jsx";
import Labels from "./IndexSections/Labels.jsx";
import Alerts from "./IndexSections/Alerts.jsx";
import Typography from "./IndexSections/Typography.jsx";
import Modals from "./IndexSections/Modals.jsx";
import Datepicker from "./IndexSections/Datepicker.jsx";
import TooltipPopover from "./IndexSections/TooltipPopover.jsx";
import Carousel from "./IndexSections/Carousel.jsx";
import Icons from "./IndexSections/Icons.jsx";
import Login from "./IndexSections/Login.jsx";
import Download from "./IndexSections/Download.jsx";

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
                    />
                    <h6 className="display-4 mb-0" style={{fontSize: "larger",textAlign: "center"}}>
                    Hyper-Personalized
                  </h6>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/touched/home-icon-02.png")}
                    />
                       <h6 className="display-4 mb-0" style={{fontSize: "larger",textAlign: "center"}}>
                    Fully Automated
                  </h6>
                </Card>
              </Col>
              <Col className="mb-5 mb-md-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/touched/home-icon-03.png")}
                    />
                       <h6 className="display-4 mb-0" style={{fontSize: "larger",textAlign: "center"}}>
                   White Labeled
                  </h6>
                </Card>
              </Col>
            </Row>
          </Container>
          </section>

          <Buttons />
          <Inputs />
          <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section>
          <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>
          </section>
          <Carousel />
          <Icons />
          <Login />
          <Download />
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
