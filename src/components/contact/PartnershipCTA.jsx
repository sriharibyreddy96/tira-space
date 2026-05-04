import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHandshake, FaChartLine, FaRocket } from "react-icons/fa";

const text = "Let’s Build the Future Together";

const PartnershipCTA = () => {
  const [displayText, setDisplayText] = useState("");

  /* 🔥 Word-by-word animation */
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Container>
        {/* LEFT CONTENT */}
        <Left>
          <Title>{displayText}</Title>

          <Subtitle
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Partner with TIRA SPACE for cutting-edge solutions in AI, defense,
            and space technologies. We collaborate with enterprises to deliver
            innovation-driven results.
          </Subtitle>

          {/* 🔥 FEATURES */}
          <Features>
            <div><FaHandshake /> Custom Solutions</div>
            <div><FaChartLine /> Enterprise Projects</div>
            <div><FaRocket /> R&D Collaboration</div>
          </Features>

          {/* 🔥 CTA */}
          <Button
            as={motion.button}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Proposal
          </Button>
        </Left>

        {/* RIGHT VISUAL */}
        <Right
          as={motion.div}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Circle />
          <Stats>
            <div>
              <h3>120+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3>50+</h3>
              <p>Clients</p>
            </div>
            <div>
              <h3>10+</h3>
              <p>Industries</p>
            </div>
          </Stats>
        </Right>
      </Container>
    </Section>
  );
};

export default PartnershipCTA;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 100px 40px;
  background: linear-gradient(135deg, #020617, #001f3f);
  color: white;
  overflow: hidden;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

/* LEFT */
const Left = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 42px;
  color: #fff;

  span {
    color: #00c6ff;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  margin-top: 20px;
  color: #ccc;
  line-height: 1.6;
`;

/* FEATURES */
const Features = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #aaa;
  }

  svg {
    color: #00c6ff;
  }
`;

/* CTA BUTTON */
const Button = styled.button`
  margin-top: 30px;
  padding: 14px 35px;
  border-radius: 8px;

  border: none;
  background: linear-gradient(45deg, #00c6ff, #0072ff);

  color: white;
  font-weight: 500;
  cursor: pointer;

  box-shadow: 0 0 20px rgba(0, 198, 255, 0.5);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 35px rgba(0, 198, 255, 0.9);
  }
`;

/* RIGHT VISUAL */
const Right = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* GLOW CIRCLE */
const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;

  background: radial-gradient(circle, #00c6ff33, transparent);
  animation: pulse 3s infinite;

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.2); opacity: 0.3; }
    100% { transform: scale(1); opacity: 0.6; }
  }
`;

/* STATS */
const Stats = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;

  div {
    text-align: center;
  }

  h3 {
    font-size: 24px;
    color: #00c6ff;
  }

  p {
    font-size: 12px;
    color: #aaa;
  }
`;