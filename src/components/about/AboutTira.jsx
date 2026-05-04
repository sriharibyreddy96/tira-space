import styled from "styled-components";
import { motion } from "framer-motion";
import AboutImg from "../../assets/Logo6.jpg";

const AboutTira = () => {
  return (
    <Section>
      <Container>
        
        {/* LEFT IMAGE */}
        <ImageWrapper
          as={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={AboutImg} alt="Tira Space" />
        </ImageWrapper>

        {/* RIGHT CONTENT */}
        <Content
          as={motion.div}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SmallTitle>ABOUT TIRA SPACE</SmallTitle>

          <Heading>
            Innovating Space Technology with <span>AI & Radar Systems</span>
          </Heading>

          <Description>
            TIRA SPACE is a next-generation space technology company focused on
            delivering advanced solutions in satellite systems, radar
            technologies, and AI-powered defense applications. We combine
            innovation, engineering excellence, and real-time intelligence to
            build solutions for the future.
          </Description>

          <SubDescription>
            From communication systems to AI-driven analytics, our mission is to
            empower industries with cutting-edge technologies that ensure
            security, precision, and scalability across space and terrestrial
            environments.
          </SubDescription>

          <Button>Explore More</Button>
        </Content>

      </Container>
    </Section>
  );
};

export default AboutTira;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: linear-gradient(to right, #f5f7ff, #eef2ff);
`;

/* Layout */
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  max-width: 1300px;
  margin: auto;

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

/* Image */
const ImageWrapper = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: 0.5s;
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* Mobile */
  @media (max-width: 576px) {
    height: 300px;
  }
`;

/* Content */
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/* Small Title */
const SmallTitle = styled.p`
  color: #00308f;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

/* Heading */
const Heading = styled.h2`
  font-size: 38px;
  line-height: 1.3;
  margin-bottom: 20px;

  span {
    color: #00308f;
  }

  /* Tablet */
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

/* Description */
const Description = styled.p`
  color: #555;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.6;
`;

/* Sub Description */
const SubDescription = styled.p`
  color: #666;
  font-size: 15px;
  margin-bottom: 25px;
  line-height: 1.6;
`;

/* Button */
const Button = styled.button`
  width: fit-content;
  padding: 12px 28px;
  background: #00308f;
  color: white;
  border: 2px solid #00308f;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: transparent;
    color: #00308f;
  }
`;