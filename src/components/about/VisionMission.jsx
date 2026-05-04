import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <Section>
      <Header>
        <p>OUR PURPOSE</p>
        <h2>
          Vision & <span>Mission</span>
        </h2>
      </Header>

      <Container>
        {/* VISION */}
        <Card
          as={motion.div}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <IconWrapper>
            <FaEye />
          </IconWrapper>

          <h3>Our Vision</h3>

          <p>
            To become a global leader in space technology and defense solutions
            by driving innovation in AI-powered systems, satellite communication,
            and next-generation radar technologies for a safer and smarter world.
          </p>
        </Card>

        {/* MISSION */}
        <Card
          as={motion.div}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <IconWrapper>
            <FaBullseye />
          </IconWrapper>

          <h3>Our Mission</h3>

          <p>
            To design and deliver high-performance, reliable, and scalable
            solutions by integrating cutting-edge technologies, engineering
            excellence, and real-time intelligence across space and defense
            ecosystems.
          </p>
        </Card>
      </Container>
    </Section>
  );
};

export default VisionMission;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: linear-gradient(to right, #eef2ff, #f8f9ff);
`;

/* Header */
const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #00308f;
    font-weight: bold;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 36px;

    span {
      color: #00308f;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 26px;
    }
  }
`;

/* Layout */
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1100px;
  margin: auto;

  /* Tablet */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* Card */
const Card = styled.div`
  padding: 40px 30px;
  border-radius: 20px;

  /* 🔥 Glassmorphism */
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 48, 143, 0.25);
  }

  h3 {
    margin: 20px 0 10px;
    font-size: 22px;
  }

  p {
    color: #555;
    line-height: 1.6;
    font-size: 15px;
  }
`;

/* Icon */
const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  font-size: 28px;
  color: white;

  /* Gradient background */
  background: linear-gradient(135deg, #00308f, #5a8dee);

  box-shadow: 0 5px 20px rgba(0, 48, 143, 0.4);

  transition: 0.3s;

  ${Card}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 48, 143, 0.6);
  }
`;