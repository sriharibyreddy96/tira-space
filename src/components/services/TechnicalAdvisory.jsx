import styled from "styled-components";
import { motion } from "framer-motion";
import { FaChartLine, FaBrain, FaCogs, FaLightbulb } from "react-icons/fa";

const TechnicalAdvisory = () => {
  const data = [
    {
      icon: <FaChartLine />,
      title: "Performance Optimization",
      desc: "Enhancing system efficiency through advanced analytics, tuning, and real-time monitoring solutions.",
      gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
    },
    {
      icon: <FaBrain />,
      title: "Technical Consulting",
      desc: "Expert guidance for system architecture, design improvements, and future-ready technology adoption.",
      gradient: "linear-gradient(135deg, #7f00ff, #e100ff)",
    },
    {
      icon: <FaCogs />,
      title: "System Upgrades",
      desc: "Seamless upgrades ensuring compatibility, improved performance, and long-term scalability.",
      gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Strategy",
      desc: "Strategic planning to integrate AI, automation, and cutting-edge solutions into your systems.",
      gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <h2>Technical Advisory & Optimization Services</h2>
        <p>
          Empowering your systems with expert insights, performance optimization,
          and future-ready engineering strategies.
        </p>
      </Header>

      {/* GRID */}
      <Grid>
        {data.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            style={{ background: item.gradient }}
          >
            <IconBox>{item.icon}</IconBox>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default TechnicalAdvisory;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #0b1220; /* dark premium background */
`;

/* HEADER */
const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 32px;
    color: white;
  }

  p {
    margin-top: 10px;
    color: #bbb;
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
  padding: 35px 25px;
  border-radius: 18px;
  color: white;
  position: relative;

  overflow: hidden;
  transition: 0.4s;

  /* Glow effect */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  }

  h3 {
    margin: 15px 0;
    font-size: 20px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    opacity: 0.9;
  }

  /* subtle overlay glow */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top,
      rgba(255, 255, 255, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: 0.4s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

/* ICON */
const IconBox = styled.div`
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);

  font-size: 24px;

  backdrop-filter: blur(10px);

  transition: 0.3s;

  &:hover {
    transform: rotate(8deg) scale(1.1);
  }
`;