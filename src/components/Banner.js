import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 50);
  const toRotate = [ "Educação", "Soluções"];
  const period = 3000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
    // Somente `text` e `delta` como gatilho: o intervalo precisa ser recriado quando o ritmo muda.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- tick usa estado do render atual; recriar a cada `text` mantém o efeito typewriter.
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  }

  return (
    <section className="banner" id="home">
      <div className="banner-glow banner-glow-1"></div>
      <div className="banner-glow banner-glow-2"></div>
      <div className="banner-glow banner-glow-3"></div>
      <div className="banner-grid"></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bem-vindos à ANNECT</span>
                <h1 className="banner-title">
                  Inovação em
                  <br />
                  <span className="txt-rotate" data-period="1000" data-rotate='[ "Soluções", "Educação" ]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                  <p>A PTec busca transformar vidas por meio da inovação digital, criando experiências imersivas e conectadas, que utilizam tecnologias de ponta, como inteligência artificial, para oferecer soluções personalizadas e de impacto.</p>
                  <HashLink to="#connect" smooth>
                    <button className="faleconosco">Fale Conosco <ArrowRightCircle size={18} /></button>
                  </HashLink>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
