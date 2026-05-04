import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaBullseye,
  FaCertificate,
} from "react-icons/fa";

const QualityAssurance = () => {
  const data = [
    {
      icon: <FaShieldAlt />,
      title: "Quality Standards",
      desc: "We follow strict industry standards ensuring every product meets global compliance and reliability benchmarks.",
      color: "#1e88e5",
    },
    {
      icon: <FaBullseye />,
      title: "High Accuracy",
      desc: "Advanced calibration and testing methods guarantee precision and consistency in every solution delivered.",
      color: "#43a047",
    },
    {
      icon: <FaCertificate />,
      title: "Certifications",
      desc: "Our processes align with certified protocols ensuring trusted engineering and validated performance.",
      color: "#fb8c00",
    },
    {
      icon: <FaCheckCircle />,
      title: "Reliability Assurance",
      desc: "Robust testing ensures long-term durability, performance stability, and operational excellence.",
      color: "#8e24aa",
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <h2>Precision Engineering & Quality Assurance</h2>
        <p>
          Delivering excellence through precision-driven engineering,
          rigorous testing, and uncompromised quality standards.
        </p>
      </Header>

      {/* GRID */}
      <Grid>
        {data.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <IconBox style={{ background: item.color }}>
              {item.icon}
            </IconBox>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default QualityAssurance;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f5f8ff;
`;

/* HEADER */
const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

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

/* GRID */
const Grid = styled.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

/* CARD */
const Card = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 15px;
  text-align: center;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  h3 {
    margin: 15px 0;
    color: #222;
  }

  p {
    color: #666;
    font-size: 14px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

/* ICON */
const IconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;

  color: white;
  font-size: 24px;

  /* 🔥 Pulse Animation */
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 48, 143, 0.5);
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 10px rgba(0, 48, 143, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 48, 143, 0);
    }
  }
`;