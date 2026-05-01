import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Overlay />

      <Content
        as={motion.div}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          Ready to Build the <span>Future with Us?</span>
        </h2>

        <p>
          Partner with TIRA SPACE to develop advanced space and defense
          solutions powered by innovation, precision, and cutting-edge
          technology.
        </p>

        <Buttons>
          <PrimaryBtn onClick={() => navigate("/contact")}>
            Contact Now
          </PrimaryBtn>

          <SecondaryBtn onClick={() => navigate("/services")}>
            Explore Services
          </SecondaryBtn>
        </Buttons>
      </Content>
    </Section>
  );
};

export default CTA;

/* ================= STYLES ================= */

const Section = styled.section`
  position: relative;
  padding: 100px 20px;
  text-align: center;

  background: linear-gradient(135deg, #00308F, #001f5c);
  color: white;
  overflow: hidden;
`;

/* 🔥 Overlay for depth */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at top right,
    rgba(255, 255, 255, 0.1),
    transparent 60%
  );
`;

/* 🔥 Content */
const Content = styled.div`
  position: relative;
  max-width: 800px;
  margin: auto;
  z-index: 2;

  h2 {
    font-size: 42px;
    margin-bottom: 20px;
    line-height: 1.3;

    span {
      color: #4da3ff;
    }
  }

  p {
    font-size: 16px;
    color: #ddd;
    margin-bottom: 35px;
    line-height: 1.6;
  }

  /* Tablet */
  @media (max-width: 768px) {
    h2 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    h2 {
      font-size: 24px;
    }
  }
`;

/* 🔥 Buttons Container */
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  /* Mobile */
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

/* 🔥 Primary Button */
const PrimaryBtn = styled.button`
  padding: 14px 30px;
  background: white;
  color: #00308F;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    background: #e6ecff;
  }
`;

/* 🔥 Secondary Button */
const SecondaryBtn = styled.button`
  padding: 14px 30px;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 6px;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: white;
    color: #00308F;
    transform: translateY(-3px);
  }
`;