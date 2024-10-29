import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GreenLogo from "../assets/img/gauge.png";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/BlackBackground.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                With a solid foundation in VR, software development, and web
                technologies from Spelman College’s Innovation Lab, combined
                with a creative touch in music and education from local and
                international studies, I design inclusive, well-being-focused,
                user-centered solutions for the everyday person.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={GreenLogo} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={GreenLogo} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={GreenLogo} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={GreenLogo} alt="Image" />
                  <h5>Teaching</h5>
                </div>
                <div className="item">
                  <img src={GreenLogo} alt="Image" />
                  <h5>Communication</h5>
                </div>
                <div className="item">
                  <img src={GreenLogo} alt="Image" />
                  <h5>Problem Solving</h5>
                </div>
                <div className="item">
                  <img src={GreenLogo} alt="Image" />
                  <h5>Empaty</h5>
                </div>
                <div className="item">
                  <img src={GreenLogo} alt="Image" />
                  <h5>Creativity</h5>
                </div>
                <div className="item">
                  <img src={GreenLogo} alt="Image" />
                  <h5>Adaptability</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
