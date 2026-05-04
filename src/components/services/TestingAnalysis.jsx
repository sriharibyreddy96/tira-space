import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFlask, FaMicroscope, FaChartBar, FaVial } from "react-icons/fa";

const TestingAnalysis = () => {
  const data = [
    {
      icon: <FaFlask />,
      title: "Chemical Testing",
      desc: "Advanced chemical analysis ensuring plating composition meets strict industrial standards.",
    },
    {
      icon: <FaMicroscope />,
      title: "Microscopic Inspection",
      desc: "High-resolution inspection to detect surface defects and ensure coating uniformity.",
    },
    {
      icon: <FaChartBar />,
      title: "Performance Analysis",
      desc: "Detailed performance reports with accuracy metrics and reliability benchmarks.",
    },
    {
      icon: <FaVial />,
      title: "Durability Testing",
      desc: "Stress and endurance testing to ensure long-lasting plating performance.",
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <h2>Comprehensive Plating Testing & Analysis</h2>
        <p>
          Delivering accurate, reliable, and industry-grade testing solutions
          with detailed reporting and analysis.
        </p>
      </Header>

      {/* GRID */}
      <Grid>
        {data.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Icon>{item.icon}</Icon>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default TestingAnalysis;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: linear-gradient(to right, #eef2ff, #f8fbff);
`;

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
    max-width: 600px;
    margin-inline: auto;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 25px;

  /* Laptop */
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

/* 🔥 Glassmorphism Card */
const Card = styled.div`
  padding: 30px 20px;
  border-radius: 15px;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.3);

  text-align: center;
  transition: 0.3s;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    border-color: #00308f;
    box-shadow: 0 0 20px rgba(0, 48, 143, 0.3);
  }

  h3 {
    margin: 15px 0;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #00308f;
  color: white;
  border-radius: 12px;
  font-size: 22px;

  transition: 0.3s;

  ${Card}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: #001f5c;
  }
`;