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
import projImg23 from "../assets/img/Website.ButtonTemplate.png";
import projImg24 from "../assets/img/Website.ChoiceScreen.png";
import projImg25 from "../assets/img/Website.CostumeStill.png";
import projImg26 from "../assets/img/Website.CostumeVR.gif";
import projImg27 from "../assets/img/Website.LetsGlowCostume-2.gif";
import projImg28 from "../assets/img/Website.FlutePlaying-4.gif";
import projImg29 from "../assets/img/Website.AllCharactersInteract.png";
import projImg30 from "../assets/img/Website.JelaniScript.png";
import projImg31 from "../assets/img/Website.PickUPBottleHQnew.gif";
import projImg32 from "../assets/img/Website.InsideMushroom1HQ.gif";
import projImg33 from "../assets/img/Website.PushBallEditHQ.gif";
import projImg34 from "../assets/img/Website.OpeningScreenHQ.gif";
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

      process: [
        {
          stepDescription: `
          This project is a work in progress that focuses on developing an AI-powered mental health chatbot designed to provide empathetic, voice-based support. The chatbot aims to make mental wellness tools more accessible and stigma-free by offering features like guided relaxation, self-care prompts, and journaling assistance. Through this initiative, I’m exploring how artificial intelligence can bridge the gap in mental health accessibility and create a compassionate, user-friendly experience. This project reflects my commitment to leveraging technology for emotional well-being and promoting mental health awareness. `,
        },
      ],

      imgUrl: projImg19,
      link: "/Portfolio/ChatbotKeynote1.pdf", // Add link here
      ctaText: "View Concept and Plan",
    },

    {
      title: "Wairimu's Scavenger Hunt",
      description:
        "Wairimu's Scavenger Hunt: Immerse Yourself in a VR Journey of Discovery, Exploration, and Inner Peace",
      imgUrl: projImg1,
      process: [
        {
          stepDescription: `
          Embark on a virtual adventure with Wairimu’s Scavenger Hunt, a captivating VR game crafted using Unity. Developed during the challenging lockdown phases of my final semester at Spelman, this project became a personal oasis amidst pandemic-induced anxiety. In this immersive experience, players discover a world filled with hidden treasures and serene environments. Hunt for messages in bottles, encounter delightful crabs, unwind in the enchanting Mushroom House, and enjoy the therapeutic experience of wading in the water while pushing around a giant beach ball.

          Wairimu’s Scavenger Hunt is not just a game; it's a testament to creativity, resilience, and the power of immersive experiences to provide solace during challenging times. Also, Wairimu is my middle name!
          `,
          stepImgUrl: projImg31,
        },
        {
          stepImgUrl: projImg32,
        },
        {
          stepDescription: `
          Week 1: Delved into the fundamentals of Unity, mastering the art of importing characters to lay the foundation for the virtual reality.

          Week 2: Explored the intricacies of colliders and character controls, ensuring a seamless and responsive gaming experience.

          Week 3-6: Immersed myself in terrain building, sculpting the landscapes that would become the backdrop for players' exploration.

          Week 7: Implemented overlays with messages, adding an extra layer of depth to the narrative and enhancing the immersive quality of the game.

          Week 8: Introduced character actions, allowing players to interact with the virtual world by bending down to pick up a bottle, adding a touch of realism to the gameplay.

          Week 9-12: Brought the vision to life with the scavenger hunt implementation, creating an engaging and rewarding experience for players as they navigate the virtual landscapes in search of hidden treasures.
        `,
          stepImgUrl: projImg33,
        },
        {
          stepImgUrl: projImg34,
        },
      ],

      link: "https://kihiko.itch.io/wairimus-scavenger-hunt",
      ctaText: "Play Game",
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
          stepImgUrl: projImg25,
        },
        {
          stepImgUrl: projImg28,
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
          stepImgUrl: projImg26,
        },
        {
          stepImgUrl: projImg27,
        },
      ],

      link: "https://drive.google.com/file/d/1mljeTkFPaLVr2B8DDZUA52cambsUmxOP/view?usp=sharing",
      ctaText: "Play Presentation",
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
          stepImgUrl: projImg23,
        },
        {
          stepImgUrl: projImg29,
        },
        {
          stepDescription: `
          Our journey with "On the Flip Side" during the Cross-Cultural Impact Game Jam unfolded amid the challenges of our college environment transitioning to remote work. With time constraints looming, our three-person team dedicated ourselves to the task, recognizing the importance of addressing stereotypes within the Black community.  

           In the initial phase, we selected Spike Lee's "Do the Right Thing" for its ability to highlight diverse perspectives and showcase how people perceive the world in different lights. Building on this inspiration, our scripts were crafted to capture the richness of individual experiences, embodied by our main characters: Irvin, Jelani, and Amandla. My responsibilities centered around script production, finding sprites, and programming.  

          As we delved into learning Yarn Spinner, our scriptwriting efforts aimed to bring depth to the narrative. The final days saw us navigating the complexities of remote programming. Despite the time pressures and the inevitable presence of errors, such as the missing apostrophe in the picture, our team persevered. 

          Presenting our creation at the Cross-Cultural Impact Game Jam, we acknowledged its imperfections but celebrated the dedication and effort poured into "On the Flip Side." The recognition, in the form of an Honorable Mention, validated our commitment to challenging stereotypes and promoting inclusivity through the powerful medium of gaming.
        `,
          stepImgUrl: projImg30,
        },
        {
          stepImgUrl: projImg24,
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
      process: [
        {
          stepDescription: `
          Teaching in Korea was one of the most transformative experiences of my life and my first formal teaching role with high school students. As an Advanced and International Baccalaureate (IB) English teacher at Daegu Foreign Language High School, I collaborated with my co-teacher to implement "Project: UN Sustainable Goals," a dynamic program centered around the United Nations SDGs. Each week, I guided students through engaging lessons that incorporated pop culture and interactive activities, helping them connect global challenges to their everyday lives. The project culminated in student-led presentations proposing innovative solutions for their chosen SDG, showcasing their growth in critical thinking, teamwork, and public speaking.

          As my first formal teaching experience, it was a steep learning curve—adapting to a new cultural context, navigating the expectations of an advanced curriculum, and learning to inspire and guide students in meaningful ways. Not only did I survive, but I thrived, finding creative solutions to challenges like language barriers and making global issues relatable for my students. The experience profoundly shaped my teaching philosophy, emphasizing the importance of making learning relevant, inclusive, and inspiring. It left me with a deep appreciation for the power of education to foster global awareness and create positive change.
          `,
        },
      ],
    },
    {
      title: "STEM League",
      description:
        "Empowering the Next Generation: Volunteering as an Instructor for STEM League, Where I Supported Middle and High School Students in Their Journey to Master Computer Science through Engaging Lectures, Interactive Lessons, and Inspiring Presentations.",
      imgUrl: projImg14,
      process: [
        {
          stepDescription: `
          During my time with STEM League, I had the privilege of virtually teaching computer science to middle and high school students, fostering a love for technology and innovation in the next generation. Conducting weekly online lectures and coding sessions, I created an inclusive and supportive virtual learning environment tailored to the needs of underserved communities. Leveraging digital tools, I made lessons engaging and accessible, ensuring that students, regardless of their background, could actively participate and grow their technical skills. My approach emphasized not only coding but also problem-solving and creativity, empowering students to see themselves as future leaders in STEM.

          The virtual format presented unique challenges, but it also provided valuable opportunities to connect with students across different locations and adapt teaching strategies to a digital setting. This experience deepened my passion for education and mentorship, reaffirming my belief in the power of representation and equity in STEM. Witnessing students grow in confidence and enthusiasm for computer science was incredibly rewarding, and it inspired my ongoing commitment to expanding access to STEM education for marginalized communities. STEM League gave me the chance to make a meaningful impact while sharpening my ability to innovate in teaching methods, even in a virtual landscape.
          `,
        },
      ],
    },

    {
      title: "Spelman Innovation Lab",
      description:
        "Igniting Creativity and Technological Innovation: Pioneering Projects in the Spelman College Innovation Lab",
      imgUrl: projImg13,
      process: [
        {
          stepDescription: `
          The Spelman Innovation Lab was a transformative space where I explored the intersections of technology, creativity, and social impact during my undergraduate years. At the height of the COVID-19 pandemic, the lab transitioned to a fully virtual format, allowing students like me to collaborate and innovate remotely. Despite the challenges of working online, the lab maintained its vibrant community and commitment to fostering equity and diversity in STEM. Its emphasis on interdisciplinary exploration inspired me to think critically about how technology could address real-world challenges and empower underrepresented communities. Even in its virtual format, the Innovation Lab was a catalyst for my growth as a technologist and creator.

          During my time in the Innovation Lab, I developed two of my most meaningful projects: Wairimu’s Scavenger Hunt and On the Flip Side. These projects allowed me to merge technical skills with creative storytelling, focusing on themes of mental well-being and interactive design. Wairimu’s Scavenger Hunt was a VR game designed to provide solace and promote mindfulness, while On the Flip Side explored narrative role-playing to create meaningful user experiences. Both projects were deeply influenced by the lab’s mission to inspire innovation and inclusivity. Though the Innovation Lab is now a physical space, my virtual experiences there remain foundational, shaping my passion for using technology as a tool for positive change.
          `,
        },
      ],
    },
    {
      title: "Josai University",
      description:
        "Bridging Cultures through Language: Intensive Japanese Studies at Josai International University",
      imgUrl: projImg10,
      process: [
        {
          stepDescription: `
          Participating in the Summer Study Program at Josai International University in Togane, Japan, was one of the most memorable experiences of my academic journey. Alongside fellow students from Spelman and Morehouse, I had the unique opportunity to study Japanese language and culture in an immersive four-week program, earning eight credits while exploring the rich traditions of Japan. The program seamlessly blended intensive coursework with hands-on cultural activities like tea ceremonies, calligraphy, and excursions to historic landmarks. These experiences provided a comprehensive introduction to Japanese society, bridging classroom learning with meaningful real-world applications.

          What made the program even more special was the sense of community I shared with my peers. Traveling with Spelman and Morehouse students allowed me to build lasting friendships and form a support network that enriched the experience even further. Together, we navigated cultural differences, celebrated milestones, and created memories that I will cherish forever. This journey taught me not only about Japanese culture but also about the importance of cross-cultural collaboration and community, values I carry into all aspects of my academic and professional life. My time at Josai International University remains a defining chapter, inspiring my passion for global learning and connection.
          `,
        },
      ],
    },
    {
      title:
        "Passionist Earth and Spirit Center: Listen, Learn, Act – Racial Justice, Mindfulness, and The Election: Reflections",
      description:
        "Fostering Mindfulness and Racial Justice: An Interfaith Spirituality Center Committed to Contemplative Practices, Environmental Stewardship, and the Flourishing of All Communities",
      imgUrl: projImg12,
      process: [
        {
          stepDescription: `
          Participating in the Listen, Learn, Act – Racial Justice, Mindfulness, and The Election course at the Passionist Earth and Spirit Center was an enlightening and thought-provoking experience. Over five weeks, I explored meaningful topics with a focus on mindfulness, justice, and civic engagement during an important election season. Each session provided an opportunity to learn, reflect, and connect with others who care about making a positive impact.

          Class 1: Civil Rights and the Power of Voting
          The series began with Raoul Cunningham, Louisville NAACP President, and Dr. Raymond Burse, Vice President, sharing their personal stories and experiences with civic engagement. From protesting segregated spaces in Louisville to advocating for better policies in education and voting access, they illustrated how persistence and action can create change over time. This session helped me understand the importance of voting and the role it plays in shaping our communities.
          
          Class 2: Mindfulness and Staying Grounded
          This session introduced us to mindfulness practices that can help when addressing challenging topics or situations. By learning techniques like meditation and reflective exercises, I discovered ways to stay calm and focused, even in the face of divisive issues. These practices emphasized the importance of approaching conversations and decisions with care, understanding, and a sense of balance.
          
          Class 3: Learning from Louisville’s History
          Amber Duke, Executive Director of the ACLU of Kentucky, shared the story of the Wade-Braden case, a pivotal moment in Louisville’s history. She discussed how a Black family was supported by allies in purchasing a home in a white neighborhood and the challenges they faced. This story helped me appreciate the resilience of those who work for fairness and the importance of addressing inequities thoughtfully and respectfully.
          
          Class 4: Equity in Education
          This session focused on opportunities for improvement within Jefferson County Public Schools (JCPS). The speakers shared insights into how thoughtful policies and resources can make a difference for all students. The discussion highlighted the importance of education as a pathway to success and how we can advocate for solutions that benefit everyone in our communities.
          
          Class 5: Taking Action and Moving Forward
          The final session encouraged us to think about how we can contribute to positive change. Whether through voting, having meaningful conversations, or supporting local organizations, we explored ways to stay engaged and make a difference. This session was an uplifting reminder of the collective power we have to create better outcomes for all.
          
          Final Reflections
          Through this course, I learned so much about Louisville’s history, education, and the importance of thoughtful engagement. Each session emphasized the value of approaching issues with mindfulness and understanding, while also highlighting ways to be part of solutions. This experience was a wonderful opportunity to learn, reflect, and grow, and I am grateful for the knowledge and connections I gained.
          `,
        },
      ],
    },
    {
      title: "Childhood Education: Kiddieland Daycare",
      description: "Nurturing Minds, Inspiring Futures",
      imgUrl: projImg7,
      process: [
        {
          stepDescription: `
          My time as a teacher at Kiddieland Daycare Center was more than a job—it was an opportunity to contribute to a legacy built by my grandmother, who ran the daycare for over 50 years. Kiddieland was a cornerstone of our community, providing a nurturing environment where children from diverse backgrounds could thrive. Watching her dedicate her life to supporting families and ensuring children had a strong foundation inspired my passion for education and my desire to continue her legacy in my own way.

          At Kiddieland, I had the privilege of teaching toddlers during the summers, introducing them to phonics and reading, and supporting their emotional growth. Each day was filled with opportunities to nurture their curiosity and joy, while creating a safe space where every child felt valued and encouraged. These experiences planted the seed for my dream of transforming Kiddieland into a STEAM center—a space where children can explore science, technology, engineering, the arts, and mathematics in an engaging and supportive environment. I envision a center that not only honors my grandmother’s commitment to nurturing young minds but also equips children with the tools and inspiration to succeed in a rapidly changing world.
          
          My grandmother’s dedication to Kiddieland and her unwavering commitment to the children she served have profoundly influenced the work I do today and the goals I aspire to achieve. She taught me the importance of resilience, compassion, and creating opportunities for others, especially within underserved communities. Her ability to nurture and inspire young minds, while balancing the challenges of running a business, has been a constant source of motivation for me. It is because of her example that I feel called to not only continue her legacy through the creation of a STEAM center but also to become a professor one day. I want to educate and mentor future generations, demonstrating that education and innovation can be powerful tools for social change. My grandmother’s life and work remind me daily of the profound difference one person can make, and I hope to carry that same spirit into my teaching and research.
          `,
        },
      ],
    },
  ];
  const projects3 = [
    {
      title: "Spelman College",
      description:
        "Cultivating Excellence in Black Women through Computer Science and Innovation",
      imgUrl: projImg9,
      process: [
        {
          stepDescription: `
          Attending Spelman College was one of the most transformative experiences of my life. As a historically Black college dedicated to empowering women, Spelman provided an environment where I could grow academically, personally, and socially. The close-knit community, inspiring faculty, and mission to cultivate leaders who are committed to positive change were central to my experience. Spelman’s motto, “A choice to change the world,” resonated deeply with me and continues to guide my aspirations today.

          Spelman not only gave me a solid foundation in computer science but also nurtured my passion for social impact. It was at Spelman that I realized the power of combining technology and community to solve real-world problems. Surrounded by trailblazing peers and mentors, I was inspired to push beyond my limits and explore the intersections of creativity, innovation, and service. My time at Spelman instilled in me a deep sense of purpose and a commitment to excellence, and it remains the foundation of my journey toward making a meaningful difference in the world.
          `,
        },
      ],
    },
    {
      title: "Code: You",
      description: "Community-based tech training program",
      imgUrl: projImg8,
      process: [
        {
          stepDescription: `
          Participating in the web development program with Code: You Louisville has been a rewarding journey of growth and discovery. This program provided me with the opportunity to enhance my skills in web development, exploring technologies and tools that are essential for creating modern, user-friendly websites. From understanding the foundations of HTML, CSS, and JavaScript to tackling more complex concepts in responsive design and project management, Code: You has challenged me to think creatively and solve problems with confidence.

          This experience has not only expanded my technical expertise but also strengthened my resilience. While navigating the challenges of learning in a structured program, I gained a deeper appreciation for the importance of collaboration, persistence, and adaptability. Despite moments of self-doubt, I have remained committed to improving and growing, driven by the supportive community around me. Code: You Louisville has not only prepared me for opportunities in web development but also reminded me of the importance of continuous learning as I work toward building impactful and accessible digital solutions.
          `,
        },
      ],
    },
    {
      title: "Barnard College",
      description: "Domestic Exchange at Barnard College",
      imgUrl: projImg11,
      process: [
        {
          stepDescription: `
          My time at Barnard College was a unique and enriching chapter of my academic journey. As part of a collaborative program during my studies at Spelman College, attending Barnard allowed me to experience the vibrancy and rigor of a liberal arts education in the heart of New York City. The environment at Barnard, with its strong emphasis on intellectual curiosity and interdisciplinary exploration, broadened my perspectives and challenged me to think critically about how education and technology intersect with society.

          One of the most memorable aspects of my time at Barnard was being introduced to biofeedback technology, a tool that helped me understand and manage anxiety through interactive games. This experience sparked my interest in the intersection of technology and mental health, inspiring me to pursue work that empowers individuals to take control of their well-being. Barnard’s diverse and dynamic community provided a space to connect with peers and mentors who encouraged me to explore new ideas and perspectives. My time there not only enhanced my academic foundation but also deepened my commitment to creating meaningful, human-centered innovations.
          `,
        },
      ],
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
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg" // You can change this or control dynamically
      >
        <Modal.Header>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Ensure image is responsive */}
          <img
            src={selectedProject?.imgUrl}
            alt={selectedProject?.title}
            className="img-fluid mb-3"
          />

          <p>{selectedProject?.description}</p>

          {/* Call to action */}
          {selectedProject?.link && (
            <p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-underline"
              >
                {selectedProject?.ctaText || "View Here"}
              </a>
            </p>
          )}

          {/* Process section */}
          {selectedProject?.process && (
            <div>
              <h5>About the Experience</h5>
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
