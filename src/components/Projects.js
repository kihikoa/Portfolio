import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
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
import projImg16 from "../assets/img/Website.Questioning.png";
import projImg17 from "../assets/img/Website.People.jpg";
import projImg18 from "../assets/img/Website.ChatbotGuy.jpg";
import projImg19 from "../assets/img/Webste.ResonImu.png";
import projImg20 from "../assets/img/Website.IVA.jpg";
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
  function StepComponent({ stepTitle, stepDescription, stepImgUrl }) {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>{stepTitle}</h2>
        <img src={stepImgUrl} alt={stepTitle} />
        {/* Use dangerouslySetInnerHTML to render HTML correctly */}
        <div dangerouslySetInnerHTML={{ __html: stepDescription }} />
      </div>
    );
  }

  const projects1 = [
    {
      title: "Current Project: AI Character Voice Mental Health Chatbot",
      description:
        "Designed to offer emotional support and mental health resources",
      details: " ",
      imgUrl: projImg19,
      process: [
        {
          stepTitle: "Target Audiences",
          stepDescription: `
          <ul>
            <li>Individuals seeking mental health support who may already be familiar with CBT techniques.</li>
            <li>Users looking for a supplemental tool to complement their existing mental health practices.</li>
            <li>Those in search of a cost-effective, easily accessible mental health support option.Those in search of a cost-effective, easily accessible mental health support option.</li>
          </ul>

          `,
          stepImgUrl: projImg17,
        },
        {
          stepTitle: "Key Features",
          stepDescription: `
          <strong style="display: block; text-align: center;">Guided CBT Exercises</strong>
          <ul>
            <li>Structured exercises for identifying negative thoughts.</li>
            <li>Journaling prompts to help users document their thoughts and reflections.</li>
            <li>Reframing exercises to encourage positive thinking and cognitive restructuring.</li>
          </ul>
        
          <strong style="display: block; text-align: center;">Tips and Reminders</strong>
          <ul>
            <li>Regular coping strategies and tips for managing stress and anxiety.</li>
            <li>Reminders for daily mental health practices.</li>
          </ul>
        
          <strong style="display: block; text-align: center;">Personalized Responses</strong>
          <ul>
            <li>Adaptive responses based on user interactions and progress.</li>
            <li>Personalized responses allow users to choose from different “chatbots” with unique voices that resonate with them, ensuring varied, relatable interaction experiences and maintaining engagement with contextually relevant feedback.</li>
          </ul>
        
          <strong style="display: block; text-align: center;">Tone and Language</strong>
          <ul>
            <li>The chatbot’s tone should be supportive, empathetic, and encouraging.</li>
            <li>It should create a safe, non-judgmental space for users to express themselves and explore their thoughts.</li>
            <li>The language should be clear and positive, with a focus on promoting understanding and self-compassion.</li>
          </ul>
        `,
          stepImgUrl: projImg18,
        },
        {
          stepTitle: "Development",
          stepDescription: "Started coding and integrating core features.",
          stepImgUrl: projImg19,
        },
        {
          stepTitle: "Testing & Refinements",
          stepDescription:
            "Conducted testing and improved the application based on feedback.",
          stepImgUrl: "path/to/testing-image.jpg",
        },
      ],
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
    {
      title:
        "Siri, Are You Eavesdropping? (Computer Science Bachelor’s Thesis)",
      description:
        "Exploring the privacy risks of Intelligent Virtual Assistants and advocating for user data protection.",
      imgUrl: projImg20,
      link: "/AreYouEavesdroppingUpdated.pdf", // Add link here
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
                    Portfolio Showcasing My Journey in Software Development,
                    Teaching, and Mental Health Advocacy.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
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
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShow(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShow(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShow(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* Add other panes for "Experiences" and "Education" here */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modal for Project Details */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedProject?.imgUrl}
            alt={selectedProject?.title}
            className="img-fluid mb-3"
          />
          <p>{selectedProject?.description}</p>
          {selectedProject?.link && (
            <p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007BFF", textDecoration: "underline" }}
              >
                View Resource
              </a>
            </p>
          )}
          {selectedProject?.process && (
            <div>
              <h5>Development Process</h5>
              {selectedProject.process.map((step, index) => (
                <div key={index} className="mb-4">
                  <h6>{step.stepTitle}</h6>
                  <img
                    src={step.stepImgUrl}
                    alt={step.stepTitle}
                    className="img-fluid mb-2"
                  />
                  <div
                    style={{ whiteSpace: "pre-wrap" }}
                    dangerouslySetInnerHTML={{ __html: step.stepDescription }}
                  />
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
