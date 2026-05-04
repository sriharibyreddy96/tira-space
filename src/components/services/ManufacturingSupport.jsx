import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaDraftingCompass,
  FaCogs,
  FaVial,
  FaIndustry,
  FaRocket,
} from "react-icons/fa";

const ManufacturingSupport = () => {
  const steps = [
    {
      icon: <FaDraftingCompass />,
      title: "Design",
      desc: "Concept development, system architecture, and engineering design planning.",
    },
    {
      icon: <FaCogs />,
      title: "Development",
      desc: "Hardware & software integration with precision engineering.",
    },
    {
      icon: <FaVial />,
      title: "Testing",
      desc: "Rigorous validation, calibration, and quality assurance checks.",
    },
    {
      icon: <FaIndustry />,
      title: "Production",
      desc: "Scalable manufacturing with advanced production systems.",
    },
    {
      icon: <FaRocket />,
      title: "Deployment",
      desc: "Final delivery, implementation, and operational support.",
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <h2>End-to-End Manufacturing Support</h2>
        <p>
          From concept to deployment, we provide complete lifecycle support
          ensuring precision, quality, and seamless execution at every stage.
        </p>
      </Header>

      {/* TIMELINE */}
      <Timeline>
        {/* Progress Line */}
        <ProgressLine
          as={motion.div}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.2 }}
        />

        {steps.map((step, i) => (
          <Step
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <IconBox>{step.icon}</IconBox>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </Step>
        ))}
      </Timeline>
    </Section>
  );
};

export default ManufacturingSupport;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f5f8ff;
`;

/* HEADER */
const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 32px;
    color: #00308f;
  }

  p {
    margin-top: 10px;
    color: #555;
    max-width: 650px;
    margin-inline: auto;
  }
`;

/* TIMELINE */
const Timeline = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  /* Tablet */
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }

  /* Mobile */
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

/* PROGRESS LINE */
const ProgressLine = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  height: 4px;
  background: linear-gradient(to right, #00308f, #00c6ff);
  z-index: 0;

  width: 0;

  @media (max-width: 576px) {
    display: none;
  }
`;

/* STEP */
const Step = styled.div`
  position: relative;
  z-index: 1;

  flex: 1;
  text-align: center;
  max-width: 200px;

  h3 {
    margin-top: 15px;
    color: #00308f;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-top: 8px;
  }

  /* Tablet */
  @media (max-width: 992px) {
    flex: 0 0 45%;
    margin-bottom: 30px;
  }

  /* Mobile */
  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

/* ICON */
const IconBox = styled.div`
  width: 60px;
  height: 60px;
  margin: auto;

  background: #00308f;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  font-size: 24px;

  box-shadow: 0 6px 15px rgba(0, 48, 143, 0.3);

  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    background: #00c6ff;
  }
`;