import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRocket, FaBrain } from "react-icons/fa";

import HeroImg from "../../assets/Home/Hero3.jpg";

const JoinMission = () => {
  return (
    <Section>
      <Bg />

      <Content>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Build the Future of <span>Space & AI</span> With Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Join TIRA SPACE and be part of a team pushing the boundaries of
          innovation in space technology, artificial intelligence, and defense
          systems.
        </motion.p>

        <Tags>
          <span><FaRocket /> Mission Driven</span>
          <span><FaBrain /> Innovation First</span>
        </Tags>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Careers
        </motion.button>
      </Content>
    </Section>
  );
};

export default JoinMission;

/* ================= STYLES ================= */

const Section = styled.section`
  position: relative;
  height: 90vh;
  width: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 🔥 Background */
const Bg = styled.div`
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.4)
    ),
    url(${HeroImg}) center/cover no-repeat;

  z-index: 0;

  animation: zoomBg 20s infinite linear;

  @keyframes zoomBg {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
  }
`;

/* 🔥 CONTENT */
const Content = styled.div`
  position: relative;
  z-index: 2;

  max-width: 800px;
  text-align: center;
  padding: 20px;

  color: white;

  h1 {
    font-size: 48px;
    line-height: 1.2;

    span {
      color: #00c6ff;
      text-shadow: 0 0 10px rgba(0, 198, 255, 0.6);
    }
  }

  p {
    margin-top: 20px;
    color: #ddd;
    font-size: 18px;
  }

  button {
    margin-top: 30px;
    padding: 12px 32px;

    background: #00c6ff;
    border: 2px solid #00c6ff;

    color: black;
    border-radius: 6px;

    cursor: pointer;
    font-weight: 500;
    transition: 0.3s;

    box-shadow: 0 5px 15px rgba(0, 198, 255, 0.4);
  }

  button:hover {
    background: transparent;
    color: #00c6ff;

    box-shadow: 0 0 20px rgba(0, 198, 255, 0.7);
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 36px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 14px;
    }
  }
`;

/* 🔥 TAGS */
const Tags = styled.div`
  margin-top: 20px;

  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    gap: 6px;

    padding: 6px 14px;
    border-radius: 20px;

    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);

    font-size: 12px;
    color: #ccc;
  }
`;