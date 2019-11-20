import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>The Kennel</h1>
        <h2>Looking for a new puppy? Look no further... this is the tinder of matching you up with man's best friend
</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To The-Kennel</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              The Kennel is a place where we link you, a dog lover... with the right breed in K9 pups.
              <strong>All pure breds</strong> Enjoy our tinder like app that helps you choose the right dog that matches your personality and environment.
              <strong>
                These dogs will choose you as well according to how their breeds matches up with their predecessors owners, with strong lineage.
              </strong>
            </p>
            <p>
              Our selections range from different groups like Terriers to Herding dogs. We also consider the Activity level 
              Barking level, characterist, coat type, size, and most importantly trainability. 
            </p>
            <p>
              You can swipe on the discover part of the app or if you are already knowledgeable in what you may want, simply type in the search. 
              The kennel was made to be a matchmaker in dog lover heaven. Enjoy. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
