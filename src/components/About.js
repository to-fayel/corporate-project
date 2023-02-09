import React from 'react';
import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import img1 from '../assets/images/img1.jpg';


function about() {
    const html = 80;
    const responsive = 95;
    const photoshop = 60;

    return ( 
      <section id="about" className="block about-block">
        <Container fluid>
          <div className="title-holder">
            <h2>About Us</h2>
            <div className="subtitle">learn more about us</div>
          </div>
          <Row>
            <Col sm={6}>
              <Image src={img1} />
            </Col>
            <Col sm={6}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, </p>
              <p>but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

              <div className="progress-block">
                <h4>HTML / CSS / JAVASCRIPT</h4>
                <ProgressBar now={html} label={`${html}%`} />
              </div>
              <div className="progress-block">
                <h4>RESPONSIVE</h4>
                <ProgressBar now={responsive} label={`${responsive}%`} />
              </div>
              <div className="progress-block">
                <h4>PHOTOSHOP</h4>
                <ProgressBar now={photoshop} label={`${photoshop}%`} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default about;