import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import navIcon3 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-accent" aria-hidden="true" />
      <Container>
        <Row className="footer-main align-items-center g-4">
          <Col xs={12} md>
            <div className="footer-brand">
              <img src={logo} alt="ANNECT Tecnologia" className="footer-logo" />
              <p className="footer-tagline">
                Tecnologia e inovação para transformar experiências digitais e educacionais.
              </p>
            </div>
          </Col>
          <Col
            xs={12}
            md="auto"
            className="d-flex justify-content-center justify-content-md-end"
          >
            <div className="footer-social social-icon">
              <a
                href="https://www.linkedin.com/company/pectec/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da ANNECT"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} ANNECT Tecnologia. Todos os direitos reservados.
            <span className="footer-version"> v1.0.0</span>
          </p>
          <nav className="footer-legal" aria-label="Informações legais">
            <Link to="/privacidade">Política de Privacidade</Link>
            <span className="footer-legal-sep" aria-hidden="true" />
            <Link to="/termos">Termos de Uso</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
};
