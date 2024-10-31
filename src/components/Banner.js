import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/angelacola_processed.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);

    if (value === "connect") {
      const connectSection = document.getElementById("connect");
      if (connectSection) {
        const yOffset = -50; // Adjust this offset as needed
        const y =
          connectSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Software Developer.",
    "Spelman Grad.",
    "Teacher.",
    "Poet.",
    "Musician.",
    "Mental Health Advocate.",
    "Go-Getter!",
  ];
  const [text, setText] = useState(" ");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const [index, setIndex] = useState(1);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {"Hi, I’m Angela: "} <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Harmonizing VR, Technology, Music, and Education for an
                    Inclusive Future of Well-being
                  </p>
                  <button onClick={() => onUpdateActiveLink("connect")}>
                    Let&apos;s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
