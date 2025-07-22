import { Container, Row, Col, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "../assets/img/img.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

export const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const projects = [
    {
      title: "SGA",
      description: "Sistema de Gestão Acadêmica completo que centraliza todas as operações educacionais. Oferece controle de matrículas, notas, frequência e relatórios avançados para instituições de ensino.",
      category: "Educação",
      imgUrl: projImg,
    },
    {
      title: "AVA",
      description: "Ambiente Virtual de Aprendizagem moderno e intuitivo. Plataforma robusta para ensino à distância com ferramentas interativas, acompanhamento de progresso e comunicação integrada.",
      category: "E-learning",
      imgUrl: projImg,
    },
    {
      title: "EduFlow",
      description: "Solução inovadora para gestão de fluxos educacionais e processos acadêmicos. Automatiza workflows institucionais e otimiza a experiência de estudantes e professores.",
      category: "Gestão",
      imgUrl: projImg,
    },
    {
      title: "My Coach",
      description: "Plataforma personalizada de mentoria e coaching educacional. Conecta estudantes com mentores qualificados através de inteligência artificial para desenvolvimento personalizado.",
      category: "Mentoria",
      imgUrl: projImg,
    },
    {
      title: "Reppub",
      description: "Repositório digital avançado para publicações acadêmicas e científicas. Sistema completo de catalogação, busca inteligente e distribuição de conteúdo educacional.",
      category: "Repositório",
      imgUrl: projImg,
    },
    {
      title: "Backoffice",
      description: "Sistema administrativo robusto para gestão completa de operações educacionais. Interface unificada para controle financeiro, recursos humanos e infraestrutura institucional.",
      category: "Administração",
      imgUrl: projImg,
    },
  ];

  // Dividir projetos em grupos de 3
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectChunks.push(projects.slice(i, i + 3));
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <div className="project-header">
                  <span className="tagline">Nossos Projetos</span>
                  <h2>Soluções que Transformam</h2>
                  <p>Desenvolvemos tecnologias de ponta que impulsionam o crescimento dos nossos clientes. Cada projeto é uma jornada de inovação e excelência técnica.</p>
                </div>
                <div className="projects-carousel-container">
                  <Carousel 
                    activeIndex={index} 
                    onSelect={handleSelect}
                    controls={true}
                    indicators={false}
                    interval={null}
                    className="projects-carousel"
                  >
                    {projectChunks.map((chunk, chunkIndex) => (
                      <Carousel.Item key={chunkIndex}>
                        <div className="projects-slide">
                          {chunk.map((project, projectIndex) => (
                            <ProjectCard
                              key={projectIndex}
                              {...project}
                            />
                          ))}
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  
                  <div className="carousel-indicators-custom">
                    {projectChunks.map((_, indicatorIndex) => (
                      <button
                        key={indicatorIndex}
                        className={`indicator ${indicatorIndex === index ? 'active' : ''}`}
                        onClick={() => setIndex(indicatorIndex)}
                      />
                    ))}
                  </div>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
