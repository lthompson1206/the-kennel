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
              SkillRise, LLC was established in 2003 as a{" "}
              <strong>training and motivational</strong> organization designed
              to enlighten people who are stuck; in their jobs, careers, after
              retirement or stuck in life. We empower people with innovative
              tools to discover “who they really are” through{" "}
              <strong>
                Personality, Passion and Soft Skills (Power Skills).
              </strong>
            </p>
            <p>
              To meet this objective SkillRise offers life-changing workshops,
              seminars, training programs and Chat Books that addresses the
              concerns of life and reveal our natural talents, abilities and
              spiritual gifts. We motivate people to feel more fulfilled in
              life, understand how they fit in the global society and how their
              abilities can make a difference in the world.
            </p>
            <p>
              If you feel stuck in your job, career or life, please sign up to
              receive a one-on-one complimentary dialog on how to get un-stuck!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
