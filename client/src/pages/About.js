import React from "react";
import AccountButton from '../components/AccountButton';
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BlockQuoteCards from "../components/BlockQuoteCards";



function About() {
  return (
    
    <div>
      
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg" no-repeat center center fixed >
        <h1>PAW RIGHT</h1>
       
        <AccountButton  />
        <h2>Shop for the right breeds</h2>
       

      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To The-Kennel</h1>
          </Col>
          <Row>

          </Row>
        </Row>
        <Row>
          <Col size="md-12">
         
            
          </Col>
        </Row>
        <Row>
 {/* <BlockQuoteCards /> */}
        </Row>
      </Container>
    </div>
  );
}

export default About;
