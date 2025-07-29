import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";


export const Newsletter = ({ onValidated }) => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
      setEmail("");
    }
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Receba novidades sobre tecnologia, inovação e desenvolvimento de software!<br></br>Fique por dentro do universo PTEC.</h3>
            </Col>
            <Col md={6} xl={7}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="button" onClick={handleSend}>Enviar</button>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
