import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar Mensagem');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const ptecEmail = "mariana.msamp@gmail.com";
    const subject = encodeURIComponent("Contato pelo site PTEC");
    const body = encodeURIComponent(
      `Nome: ${formDetails.firstName} ${formDetails.lastName}\n` +
      `E-mail: ${formDetails.email}\n` +
      `Telefone: ${formDetails.phone}\n` +
      `Mensagem: ${formDetails.message}`
    );
    window.location.href = `mailto:${ptecEmail}?subject=${subject}&body=${body}`;
    setFormDetails(formInitialDetails);
    setStatus({ success: true, message: 'Seu aplicativo de e-mail foi aberto para envio!' });
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="justify-content-center">

          <Col xs={12} className="text-center mb-5">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Fale Conosco</span>
                  <h2 style={{ fontSize: "clamp(32px, 5vw, 49px)" }}>Vamos Conversar</h2>
                  <p className="contact-description">
                    Pronto para transformar suas ideias em realidade? Nossa equipe está aqui para ajudar você a encontrar a solução perfeita.
                  </p>
                </div>
              }
            </TrackVisibility>
          </Col>


          <Col xs={12}>
            <Row className="align-items-center">

              <Col xs={12} lg={6} className="mb-4 mb-lg-0">
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                      <div className="contact-img-wrapper text-center">
                        <img 
                          className="contact-floating-img img-fluid" 
                          src={contactImg} 
                          alt="Contact Us"
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                  }
                </TrackVisibility>
              </Col>


              <Col xs={12} lg={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                      <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit}>

                          <Row className="mb-3">
                            <Col xs={12} sm={6} className="mb-3 mb-sm-0">
                              <input 
                                type="text" 
                                value={formDetails.firstName} 
                                placeholder="Nome" 
                                onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                className="form-control"
                                required
                              />
                            </Col>
                            <Col xs={12} sm={6}>
                              <input 
                                type="text" 
                                value={formDetails.lastName} 
                                placeholder="Sobrenome" 
                                onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                className="form-control"
                                required
                              />
                            </Col>
                          </Row>


                          <Row className="mb-3">
                            <Col xs={12} sm={6} className="mb-3 mb-sm-0">
                              <input 
                                type="email" 
                                value={formDetails.email} 
                                placeholder="Seu E-mail" 
                                onChange={(e) => onFormUpdate('email', e.target.value)}
                                className="form-control"
                                required
                              />
                            </Col>
                            <Col xs={12} sm={6}>
                              <input 
                                type="tel" 
                                value={formDetails.phone} 
                                placeholder="Telefone" 
                                onChange={(e) => onFormUpdate('phone', e.target.value)}
                                className="form-control"
                              />
                            </Col>
                          </Row>


                          <Row className="mb-3">
                            <Col xs={12}>
                              <textarea 
                                rows="5" 
                                value={formDetails.message} 
                                placeholder="Conte-nos sobre seu projeto..." 
                                onChange={(e) => onFormUpdate('message', e.target.value)}
                                className="form-control"
                                required
                              ></textarea>
                            </Col>
                          </Row>


                          <Row className="mb-3">
                            <Col xs={12}>
                              <button type="submit" className="btn btn-primary w-100">
                                <span>{buttonText}</span>
                              </button>
                            </Col>
                          </Row>


                          {status.message && (
                            <Row>
                              <Col xs={12}>
                                <div className={`alert ${status.success ? 'alert-success' : 'alert-danger'}`}>
                                  {status.message}
                                </div>
                              </Col>
                            </Row>
                          )}
                        </form>
                      </div>
                    </div>
                  }
                </TrackVisibility>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}