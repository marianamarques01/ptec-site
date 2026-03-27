

import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
  return (
    <section
      className="skill"
      id="skills"
    >
      <Container className="skills-mobile-container">
        <Row className="skills-mobile-row">
          <Col xs={12}>
            <div className="skill-bx" >

              <div className="company-section" style={{ paddingTop: "30px" }}>
                <span className="tagline">Sobre a ANNECT</span>
                <h2>Quem Somos</h2>
                <p>
                  A ANNECT é uma empresa líder em soluções tecnológicas, dedicada a transformar 
                  ideias em realidade através da inovação e excelência técnica. Com anos de 
                  experiência no mercado, oferecemos serviços especializados em desenvolvimento 
                  de software, consultoria em TI e soluções digitais personalizadas.
                </p>
                <p>
                  Nossa equipe é formada por profissionais altamente qualificados e apaixonados 
                  por tecnologia, sempre em busca das melhores práticas e tendências do mercado 
                  para entregar resultados excepcionais aos nossos clientes.
                </p>
              </div>


              <div className="differential-section">
                <span className="tagline">Nosso Diferencial</span>
                <h2>Por que Escolher a ANNECT?</h2>
                <Row className="differential-grid justify-content-center g-3">
                  <Col xl={5} lg={6} md={6} sm={12} className="differential-item">
                    <div className="differential-card">
                      <h4>🚀 Inovação Constante</h4>
                      <p>Sempre na vanguarda das tecnologias emergentes, garantindo soluções modernas e eficientes com foco no cliente.</p>
                    </div>
                  </Col>
                  <Col xl={5} lg={6} md={6} sm={12} className="differential-item">
                    <div className="differential-card">
                      <h4>🛡️ Confiabilidade Total</h4>
                      <p>Soluções robustas e seguras, com metodologias ágeis, suporte contínuo e manutenção especializada.</p>
                    </div>
                  </Col>
                  <Col xl={5} lg={6} md={6} sm={12} className="differential-item">
                    <div className="differential-card">
                      <h4>⚡ Agilidade e Performance</h4>
                      <p>Entrega rápida e eficiente com metodologias ágeis, garantindo alta performance e resultados excepcionais.</p>
                    </div>
                  </Col>
                  <Col xl={5} lg={6} md={6} sm={12} className="differential-item">
                    <div className="differential-card">
                      <h4>🎯 Foco em Resultados</h4>
                      <p>Cada projeto é desenvolvido sob medida para maximizar o ROI e atingir os objetivos específicos de cada cliente.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
