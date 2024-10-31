import { Container, Row, Col, Tab, Nav, Modal } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import projImg1 from "../assets/img/Website.Wairimu.png";
import projImg2 from "../assets/img/Website.REMIX.png";
import projImg3 from "../assets/img/Website.Chatbot.png";
import projImg4 from "../assets/img/Website.Game.png";
import projImg5 from "../assets/img/Website.RightThing.png";
import projImg6 from "../assets/img/Website.Students.png";
import projImg7 from "../assets/img/Website.Kids.Blurred.png";
import projImg8 from "../assets/img/Website.Code.Louisville.png";
import projImg9 from "../assets/img/Website.Spelman.png";
import projImg10 from "../assets/img/Website.JIUnew.png";
import projImg11 from "../assets/img/Website.Barnard.png";
import projImg12 from "../assets/img/Website.Earth.png";
import projImg13 from "../assets/img/Website.Innovation.png";
import projImg14 from "../assets/img/Website.STEMLeague.png";
import projImg15 from "../assets/img/Website.REU.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to handle showing the modal

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };
  // Function to close the modal
  const handleClose = () => setShow(false);

  const projects1 = [
    {
      title: "Project Concept: AI Character Voice Mental Health Chatbot",
      description:
        "Designed to offer emotional support and mental health resources",
      details: "ujfnewohgniorehgnviorehgboidrnbgndfklbnfklbnlfbnklfnblfknb",
      imgUrl: projImg3,
    },
    {
      title: "Project Concept: VR Mental Wellness Journey",
      description:
        "Mindfulness techniques, breathing exercises, and interactive scenarios",
      imgUrl: projImg4,
    },
    {
      title: "Wairimu's Scavenger Hunt",
      description: "VR Mental Health Scavenger Hunt",
      imgUrl: projImg1,
    },
    {
      title: "Project REMiX",
      description:
        "Walt Disney Company Imagineering Research and Development Capstone Project",
      imgUrl: projImg2,
    },
    {
      title: "University of Miami REU: Computing for Structure",
      description:
        "THE “DARK” ENERGY BETWEEN SONIC PARTIALS: MODELING AND VISUALIZATION OF WEAK SPECTRAL COMPONENTS FOR MUSICAL SOUND ANALYSIS AND SYNTHESIS",
      imgUrl: projImg15,
    },
    {
      title: "On The Flip Side",
      description: "Cross-Cultural Impact Gam Jam",
      imgUrl: projImg5,
    },
  ];
  const projects2 = [
    {
      title: "Project: UN Sustainable Development Goals ",
      description: "Teaching in Daegu, South Korea",
      imgUrl: projImg6,
    },
    {
      title: "STEM League",
      description:
        "Empowering the Next Generation: Volunteering as an Instructor for STEM League, Where I Supported Middle and High School Students in Their Journey to Master Computer Science through Engaging Lectures, Interactive Lessons, and Inspiring Presentations.",
      imgUrl: projImg14,
    },

    {
      title: "Spelman Innovation Lab",
      description:
        "Igniting Creativity and Technological Innovation: Pioneering Projects in the Spelman College Innovation Lab",
      imgUrl: projImg13,
    },
    {
      title: "Josai University",
      description:
        "Bridging Cultures through Language: Intensive Japanese Studies at Josai International University",
      imgUrl: projImg10,
    },
    {
      title: "Passionist Earth and Spirit Center",
      description:
        "Fostering Mindfulness and Racial Justice: An Interfaith Spirituality Center Committed to Contemplative Practices, Environmental Stewardship, and the Flourishing of All Communities",
      imgUrl: projImg12,
    },
    {
      title: "Childhood Education: Kiddieland Daycare",
      description: "Nurturing Minds, Inspiring Futures",
      imgUrl: projImg7,
    },
  ];
  const projects3 = [
    {
      title: "Spelman College",
      description:
        "Cultivating Excellence in Black Women through Computer Science and Innovation",
      imgUrl: projImg9,
    },
    {
      title: "Code: You",
      description: "Community-based tech training program",
      imgUrl: projImg8,
    },
    {
      title: "Barnard College",
      description:
        "Domestic Exchange at Barnard College: Delving into Computer Design through Lexical Analysis and Philosophy, I Explored Berkeley's Critique of Materialism, Questioning How Perception Shapes Our Understanding of Reality.iversity",
      imgUrl: projImg11,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Empowering Innovation Through Technology and Education: A
                    Portfolio Showcasing My Journey in Software Development,
                    Teaching, and Mental Health Advocacy.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experiences</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Education</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          Innovative creations that showcase problem-solving,
                          creativity, and technical skills in action.
                        </p>
                        <Row>
                          {projects1.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShow(project)} // Pass handleShow here
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Meaningful, hands-on experiences that bridge theory
                          and practice, shaping expertise in diverse
                          environments.
                        </p>
                        <Row>
                          {projects2.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShow(project)} // Pass handleShow here
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          An ongoing journey of growth fueled by curiosity and
                          dedication to mastering new skills and technologies.
                        </p>
                        <Row>
                          {projects3.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShow(project)} // Pass handleShow here
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* Modal for Project Details */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Title>{selectedProject?.title}</Modal.Title>{" "}
        {/* Show project title */}
        <Modal.Body>
          <img
            src={selectedProject?.imgUrl}
            alt={selectedProject?.title}
            className="img-fluid mb-3"
          />{" "}
          {/* Show project image */}
          <p>{selectedProject?.description}</p>{" "}
          {/* Show brief project description */}
          <p>{selectedProject?.details}</p>{" "}
          {/* Show additional project details */}
        </Modal.Body>
        <Modal.Footer>{/* Close button to hide the modal */}</Modal.Footer>
      </Modal>
    </section>
  );
};
