import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/spel.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/akihiko1/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/kihikoa">
                <img src={navIcon2} alt="Icon" />
              </a>
              <p>Website coded by me. Design by Webdecoded.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
