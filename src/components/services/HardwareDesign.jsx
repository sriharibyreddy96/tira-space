import styled from "styled-components";
import { motion } from "framer-motion";
import { FaMicrochip, FaProjectDiagram, FaCogs } from "react-icons/fa";

import HardwareImg from "../../assets/Home/Hero13.jpg"; // Replace with PCB/lab image

const HardwareDesign = () => {
  return (
    <Section>
      <Container>

        {/* LEFT IMAGE */}
        <ImageWrapper
          as={motion.div}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={HardwareImg} alt="Hardware Design" />
        </ImageWrapper>

        {/* RIGHT CONTENT */}
        <Content
          as={motion.div}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Advanced <span>Hardware Design Solutions</span>
          </h2>

          <p className="desc">
            We specialize in designing high-performance electronic systems with
            precision engineering. Our solutions ensure reliability, scalability,
            and seamless integration across advanced technology domains.
          </p>

          {/* FEATURES */}
          <Features>
            <Feature>
              <Icon><FaMicrochip /></Icon>
              <div>
                <h4>PCB Design</h4>
                <p>High-quality multi-layer PCB design with optimized performance.</p>
              </div>
            </Feature>

            <Feature>
              <Icon><FaProjectDiagram /></Icon>
              <div>
                <h4>Embedded Systems</h4>
                <p>Real-time embedded solutions for mission-critical applications.</p>
              </div>
            </Feature>

            <Feature>
              <Icon><FaCogs /></Icon>
              <div>
                <h4>Circuit Design</h4>
                <p>Robust and efficient circuit architectures for complex systems.</p>
              </div>
            </Feature>
          </Features>

          <button>Explore Hardware Solutions</button>
        </Content>

      </Container>
    </Section>
  );
};

export default HardwareDesign;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: linear-gradient(135deg, #0a0f1c, #111a2e);
  color: white;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  max-width: 1200px;
  margin: auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

/* 🔥 IMAGE */
const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
  }

  &:hover img {
    transform: scale(1.08);
  }
`;

/* 🔥 CONTENT */
const Content = styled.div`
  h2 {
    font-size: 36px;
    margin-bottom: 20px;

    span {
      color: #00d4ff;
    }
  }

  .desc {
    color: #bbb;
    margin-bottom: 25px;
    font-size: 16px;
  }

  button {
    margin-top: 20px;
    padding: 12px 28px;
    background: transparent;
    border: 2px solid #00d4ff;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #00d4ff;
      color: black;
      box-shadow: 0 0 15px rgba(0, 212, 255, 0.6);
    }
  }
`;

/* 🔥 FEATURES */
const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Feature = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;

  h4 {
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #aaa;
  }
`;

const Icon = styled.div`
  font-size: 28px;
  color: #00d4ff;
  transition: 0.3s;

  ${Feature}:hover & {
    transform: rotate(10deg) scale(1.2);
    color: #00ffff;
  }
`;