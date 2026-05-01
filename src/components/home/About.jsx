import styled from "styled-components";
import { motion } from "framer-motion";
import AboutImg from "../../assets/Home/About.png";

import { FaSatelliteDish, FaCogs, FaMicrochip, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <Section>
      <Container>

        {/* LEFT IMAGE */}
        <ImageWrapper>
          <img src={AboutImg} alt="About" />
        </ImageWrapper>

        {/* RIGHT CONTENT */}
        <Content
          as={motion.div}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SmallTitle>ABOUT COMPANY</SmallTitle>

          <Title>
            Innovating Today, <span>Securing Tomorrow.</span>
          </Title>

          <Description>
            TIRA SPACE is a next-generation space technology and defense solutions
            company dedicated to building intelligent systems that empower a safer
            and smarter future.
          </Description>

          <Description>
            We specialize in the design, development, and deployment of advanced
            satellite systems, AI-powered radar solutions, and end-to-end space
            technology services.
          </Description>

          {/* FEATURES GRID */}
          <Features>

            <Feature>
              <Icon><FaSatelliteDish /></Icon>
              <div>
                <h4>Our Products</h4>
                <p>Satellite systems, Radar solutions, AI-powered analytics.</p>
              </div>
            </Feature>

            <Feature>
              <Icon><FaCogs /></Icon>
              <div>
                <h4>Our Services</h4>
                <p>System integration, Custom engineering, Mission support.</p>
              </div>
            </Feature>

            <Feature>
              <Icon><FaMicrochip /></Icon>
              <div>
                <h4>Our Technology</h4>
                <p>AI integration, Real-time processing, Secure communication.</p>
              </div>
            </Feature>

            <Feature>
              <Icon><FaShieldAlt /></Icon>
              <div>
                <h4>Our Commitment</h4>
                <p>Quality, Innovation, Reliability and Customer success.</p>
              </div>
            </Feature>

          </Features>

          <BottomText>
            At <span>TIRA SPACE</span>, we combine innovation, expertise, and passion
            to deliver impactful space and defense solutions.
          </BottomText>

        </Content>
      </Container>
    </Section>
  );
};

export default About;


/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f8f9fc;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const SmallTitle = styled.p`
  color: #00308F;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Title = styled.h2`
  font-size: 36px;
  line-height: 1.3;

  span {
    color: #00308F;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  color: #555;
  line-height: 1.6;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;

  h4 {
    margin: 0;
    color: #00308F;
  }

  p {
    margin: 4px 0 0;
    font-size: 14px;
    color: #555;
  }
`;

const Icon = styled.div`
  font-size: 22px;
  color: #00308F;
  background: rgba(0, 48, 143, 0.1);
  padding: 10px;
  border-radius: 50%;
`;

const BottomText = styled.p`
  margin-top: 10px;
  font-weight: 500;

  span {
    color: #00308F;
    font-weight: bold;
  }
`;