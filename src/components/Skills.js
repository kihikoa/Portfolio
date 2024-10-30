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
      <div className="skill-background">
        {" "}
        {/* Wrapper for background */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>
                  With expertise in software, web, VR, and game development
                  honed at Spelman College’s Innovation Lab, alongside a unique
                  fusion of musical and educational insights from both local and
                  international experiences, I craft empathy-driven, inclusive,
                  wellness-oriented, user-centered innovations that resonate
                  with diverse communities.
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
                    <h5>Effective Teacher</h5>
                  </div>
                  <div className="item">
                    <img src={GreenLogo} alt="Image" />
                    <h5>Productive Collaborator</h5>
                  </div>
                  <div className="item">
                    <img src={GreenLogo} alt="Image" />
                    <h5>Holistic Problem Solver</h5>
                  </div>
                  <div className="item">
                    <img src={GreenLogo} alt="Image" />
                    <h5>Empathy-driven Inclusive Leader</h5>
                  </div>
                  <div className="item">
                    <img src={GreenLogo} alt="Image" />
                    <h5>Creative Innovator</h5>
                  </div>
                  <div className="item">
                    <img src={GreenLogo} alt="Image" />
                    <h5>Thoughtful Adapter</h5>
                  </div>
                  <div className="item">
                    <img src={GreenLogo} alt="Image" />
                    <h5>Versatile Musician</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
