import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRobot, FaSatellite, FaFlask } from "react-icons/fa";

import ResearchImg from "../../assets/Home/Hero12.jpg"; // replace with futuristic image

const ResearchInnovation = () => {
  const points = [
    {
      icon: <FaRobot />,
      text: "Advanced AI Research & Machine Learning Systems",
    },
    {
      icon: <FaSatellite />,
      text: "Next-Gen Space Communication & Satellite Innovation",
    },
    {
      icon: <FaFlask />,
      text: "Dedicated R&D Labs for Continuous Technological Growth",
    },
  ];

  return (
    <Section>
      <Container>
        {/* LEFT IMAGE */}
        <ImageWrapper
          as={motion.div}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image src={ResearchImg} alt="Research" />
          <Glow />
        </ImageWrapper>

        {/* RIGHT CONTENT */}
        <Content>
          <motion.p
            className="tag"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            RESEARCH & INNOVATION
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Driving the Future with <span>Innovation</span>
          </motion.h2>

          <motion.p
            className="desc"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            At TIRA SPACE, we continuously push the boundaries of technology
            through advanced research in AI, satellite systems, and defense
            innovations, building next-generation solutions for tomorrow.
          </motion.p>

          {/* BULLETS */}
          <List>
            {points.map((item, i) => (
              <Item
                key={i}
                as={motion.div}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Icon>{item.icon}</Icon>
                <span>{item.text}</span>
              </Item>
            ))}
          </List>
        </Content>
      </Container>
    </Section>
  );
};

export default ResearchInnovation;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #0b0f1a;
  color: white;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  max-width: 1200px;
  margin: auto;

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

/* 🔥 IMAGE SIDE */
const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  /* subtle parallax feel */
  &:hover img {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: 0.5s;
  border-radius: 20px;
`;

/* 🔥 Glow Effect */
const Glow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 20px;

  box-shadow: 0 0 40px rgba(0, 123, 255, 0.4);
  pointer-events: none;
`;

/* 🔥 CONTENT */
const Content = styled.div`
  .tag {
    color: #4ecdc4;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 20px;

    span {
      color: #4ecdc4;
    }
  }

  .desc {
    color: #bbb;
    margin-bottom: 25px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

/* 🔥 LIST */
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px 15px;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  transition: 0.3s;

  &:hover {
    background: rgba(78, 205, 196, 0.1);
    transform: translateX(5px);
  }

  span {
    font-size: 14px;
    color: #ddd;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

/* 🔥 ICON */
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;

  background: linear-gradient(135deg, #4ecdc4, #1a73e8);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  color: white;
`;