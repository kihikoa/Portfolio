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
import projImg21 from "../assets/img/Website.FlipShot.png";
import projImg22 from "../assets/img/Website.GamesForChange.png";
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
        "Project REMIX, my capstone project at The Walt Disney Company, blends culture, creativity, and technology to reimagine immersive storytelling experiences for diverse audiences.",
      imgUrl: projImg2,
      process: [
        {
          stepDescription: `
          Project REMiX is the culmination of my creative software development internship as a UNCF Disney Scholar at Imagineering Research and Development, and it's all about remixing Disney's Parks classic experiences and attractions through a Black cultural lens. 

          Together with my mentor, Jonathan Becker, we envisioned Project REMiX as a large-scale concept that introduces a fresh storytelling experience while staying true to the source material. Our goal is to diversify the Disney Park experience beyond the familiar IPs like Princess and the Frog, Black Panther, or Lion King. We believe in reinventing these classic experiences from the ground up, paying homage to our beloved past and celebrating our diverse future. 

          One captivating aspect of Project REMiX is the Electric Block Party, a proof of concept inspired by the Main Street Electrical Parade. In this concept, we focus on creating a dynamic and reactive marching band costume, drawing inspiration from the vibrant rhythms of HBCU marching bands and Black Mardi Gras. Imagine a costume with fiber optic cables braided with ball-balls, reminiscent of unique Black hairstyles. 

          What makes this costume truly special is its connection to music. As a flute player, I wanted the LED lights to respond to the music I played. We mapped the lights to musical notes, creating a dynamic and electric visual experience. The colors and patterns change with each note, providing a captivating display that mirrors the energy and style of Black music and dance.

          Throughout Project REMiX, we explored key cultural touchstones of the Black experience, including, but not limited to, music, fashion, and the importance of unity. We wanted to showcase the diversity within the Black community and bring that richness to Disney Park attractions. 

          In essence, Project REMiX is driven by the belief that everyone deserves to see themselves in the park. As the Disney Parks brand expands into communities that historically have been less likely to participate, it's crucial that our attractions remain relevant, exciting, and inspirational to all guests.
          `,
          stepImgUrl: projImg22,
        },
        {
          stepDescription: `
          1. Conceptualization: Jonathan and I discussed the idea of remixing Disney Park experiences from a Black cultural perspective, with a specific focus on the Main Street Electrical Parade.
 
          2. Research: I conducted extensive research on key cultural touchstones of the Black experience, identifying patterns and categories related to music, fashion, and community.

          3. Prototyping in Virtual Reality: I utilized virtual reality to prototype potential costume looks, exploring different lighting patterns around a human avatar in the Unity game engine to visually capture the essence of Black energy and style.

          4. Fiber Optic LED Dress Concept: Inspired by fashion designers using fiber optic cables for LED dresses, Jonathan and I decided to incorporate this concept into our costume. Jonathan box-braided fiber optic cables and added ball-balls to create organic lighting effects reminiscent of unique Black hairstyles. Notably, this internship was conducted remotely during the COVID-19 lockdown, with Jonathan shipping materials to me for collaboration. 

          5. Mapping Lights to Musical Notes: To create dynamic and electric lighting, Jonathan suggested mapping the lights to musical notes. Using a microcontroller, microphone, pressure sensor, and LEDs integrated with my flute, I mapped color patterns to different flute notes. 

          6. Technical Prototyping: I prototyped the microcontroller, microphone, pressure sensor, and LEDs to understand the technical aspects. This involved mapping out piano key visuals as a guide and reinterpreting piano keys with actual LEDs. 
       
          7. Building the Prototype Costume: After technical prototyping, we transitioned to building the physical prototype costume, integrating box-braided fiber optic cables, ball-balls, LED animation, and music-triggered lighting effects. 
                  
          8. Performance Testing: I conducted a rough proof-of-concept video to showcase how the prototype costumes could look during a performance, demonstrating the dynamic and vibrant effects in action. 
                  
          9. Presentation: I concluded the project with a presentation, sharing insights, experiences, and the outcomes of my creative software development internship.  
        `,
        },
      ],

      link: "https://play.unity.com/en/games/abc2854c-ba36-42a1-9e18-30696ca39f65/on-the-flip-side",
      ctaText: "Play Game",
    },
    {
      title: "University of Miami REU: Computing for Structure",
      description:
        "The Dark Energy Between Sonic Partials: Modeling and Visualization of Weak Spectral Components for Musical Sound Analysis and Synthesis",
      imgUrl: projImg15,
      link: "/Portfolio/AKihiko-Research Essay.pdf", // Add
      ctaText: "Read Abstract",
    },
    {
      title:
        "Games for Change Cross-Cultural Impact Game Jam: On The Flip Side RPG",
      description:
        "Creating meaningful connections across cultures through immersive gameplay that inspires empathy and celebrates diversity.",
      imgUrl: projImg21,
      process: [
        {
          stepDescription: `
          In March 2021, Games for Change hosted the week-long "Cross-Cultural Impact Gam Jam." I collaborated with Ashley Sarah Eliassaint and Saneliso "Sunny" Dube to create a narrative role-playing game, "On the Flip Side," using Yarn Spinner in Unity. This innovative tool allowed us to seamlessly build branching narratives and dialogues, earning our game an Honorable Mention for its exploration of diverse Black voices.  

          Yarn Spinner proved to be an invaluable asset, offering writers an easy-to-use platform with powerful features to integrate content directly into our game. Despite the challenges of remote collaboration during the pandemic, our team successfully leveraged Yarn Spinner to craft a rich and engaging experience that challenges the monolithic perception of Black voices.    

          The Honorable Mention recognizes the impact of "On the Flip Side" and highlights the importance of tools like Yarn Spinner in empowering creators to amplify underrepresented voices in the gaming industry. The game invites players to explore the multiplicity of voices within the broader context of the Black experience.
          `,
          stepImgUrl: projImg22,
        },
        {
          stepDescription: `
          Our journey with "On the Flip Side" during the Cross-Cultural Impact Game Jam unfolded amid the challenges of our college environment transitioning to remote work. With time constraints looming, our three-person team dedicated ourselves to the task, recognizing the importance of addressing stereotypes within the Black community.  

           In the initial phase, we selected Spike Lee's "Do the Right Thing" for its ability to highlight diverse perspectives and showcase how people perceive the world in different lights. Building on this inspiration, our scripts were crafted to capture the richness of individual experiences, embodied by our main characters: Irvin, Jelani, and Amandla. My responsibilities centered around script production, finding sprites, and programming.  

          As we delved into learning Yarn Spinner, our scriptwriting efforts aimed to bring depth to the narrative. The final days saw us navigating the complexities of remote programming. Despite the time pressures and the inevitable presence of errors, such as the missing apostrophe in the picture, our team persevered. 

          Presenting our creation at the Cross-Cultural Impact Game Jam, we acknowledged its imperfections but celebrated the dedication and effort poured into "On the Flip Side." The recognition, in the form of an Honorable Mention, validated our commitment to challenging stereotypes and promoting inclusivity through the powerful medium of gaming.
        `,
        },
      ],

      link: "https://play.unity.com/en/games/abc2854c-ba36-42a1-9e18-30696ca39f65/on-the-flip-side",
      ctaText: "Play Game",
    },
    {
      title:
        "Siri, Are You Eavesdropping? (2021 Computer Science Bachelor’s Thesis)",
      description:
        "Exploring the privacy risks of Intelligent Virtual Assistants and advocating for user data protection.",
      imgUrl: projImg20,
      link: "/Portfolio/AreYouEavesdroppingUpdated.pdf", // Add link here
      ctaText: "Read Full PDF",
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
                {selectedProject?.ctaText || "View Here"}
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
