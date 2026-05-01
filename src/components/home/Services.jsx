import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaCode,
  FaRulerCombined,
  FaFlask,
  FaLightbulb,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Hardware Design",
      desc: "Advanced circuit design, embedded systems, and high-performance hardware development tailored for modern technology needs.",
      icon: <FaMicrochip />,
      color: "#ff6b6b",
    },
    {
      title: "Software Design",
      desc: "Robust and scalable software solutions with modern architecture, performance optimization, and seamless integration.",
      icon: <FaCode />,
      color: "#4ecdc4",
    },
    {
      title: "Thickness Measurement",
      desc: "Accurate thickness measurement solutions for all plating types ensuring precision, reliability, and compliance.",
      icon: <FaRulerCombined />,
      color: "#ffd93d",
    },
    {
      title: "Plating Testing & Analysis",
      desc: "Comprehensive testing, validation, and detailed analysis reports for all plating processes and materials.",
      icon: <FaFlask />,
      color: "#6c5ce7",
    },
    {
      title: "Plating Suggestions",
      desc: "Expert recommendations to resolve component-related plating issues with optimized performance and durability.",
      icon: <FaLightbulb />,
      color: "#00b894",
    },
  ];

  return (
    <Section>
      <Header>
        <h1>OUR SERVICES</h1>
        <h2>
          What We <span>Offer</span>
        </h2>
      </Header>

      <Grid>
        {services.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <Icon style={{ background: item.color }}>
              {item.icon}
            </Icon>

            <h3 style={{ color: item.color }}>{item.title}</h3>

            <p>{item.desc}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f5f7ff;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    color: #00308F;
    font-size: 40px;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 36px;
    padding: 20px 0 0 0;

    span {
      color: #00308F;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 30px;

  /* Laptop */
  grid-template-columns: repeat(3, 1fr);

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  padding: 30px 25px;
  border-radius: 15px;
  text-align: center;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: 0.4s;

  &:hover {
    transform: translateY(-10px) scale(1.02);
  }

  h3 {
    margin: 15px 0;
    font-size: 20px;
  }

  p {
    font-size: 15px;
    color: #555;
    line-height: 1.6;
  }
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
  color: white;
  border-radius: 50%;

  transition: 0.3s;

  ${Card}:hover & {
    transform: rotate(10deg) scale(1.1);
  }
`;