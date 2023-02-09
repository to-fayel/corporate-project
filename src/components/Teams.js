import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function teams() {
    return ( 
      <section id="teams" className="block teams-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Our teams</h2>
            <div className="subtitle">some of our experts</div>
          </div>
        </Container>
      </section>
    );
}

export default teams;