import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaSatellite,
  FaBroadcastTower,
  FaMicrochip,
} from "react-icons/fa";

const CoreTechnologies = () => {
  const data = [
    {
      icon: <FaBrain />,
      title: "AI Systems",
      desc: "Advanced AI & machine learning for real-time intelligence.",
    },
    {
      icon: <FaBroadcastTower />,
      title: "Radar Technology",
      desc: "High-precision radar systems for defense & surveillance.",
    },
    {
      icon: <FaSatellite />,
      title: "Satellite Communication",
      desc: "Reliable satellite communication for global connectivity.",
    },
    {
      icon: <FaMicrochip />,
      title: "RF Engineering",
      desc: "Cutting-edge RF systems for signal processing & analysis.",
    },
  ];

  return (
    <Section>
      <Header>
        <p>OUR EXPERTISE</p>
        <h2>
          Core <span>Technologies</span>
        </h2>
      </Header>

      <Grid>
        {data.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
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

export default CoreTechnologies;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #050816; /* 🔥 Dark Tech Background */
  color: white;
`;

/* Header */
const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #5a8dee;
    font-weight: bold;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 36px;

    span {
      color: #5a8dee;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 26px;
    }
  }
`;

/* Grid */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: auto;

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

/* Card */
const Card = styled.div`
  padding: 30px 20px;
  border-radius: 15px;
  text-align: center;
  position: relative;

  background: rgba(255, 255, 255, 0.02);

  /* 🔥 Neon Border */
  border: 1px solid rgba(90, 141, 238, 0.3);

  transition: 0.3s;

  /* Glow effect */
  &:hover {
    transform: translateY(-10px);
    border-color: #5a8dee;
    box-shadow: 0 0 20px rgba(90, 141, 238, 0.6);
  }

  h3 {
    margin-top: 15px;
    font-size: 20px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #bbb;
    line-height: 1.5;
  }
`;

/* Icon */
const Icon = styled.div`
  font-size: 40px;
  color: #5a8dee;

  transition: 0.3s;

  ${Card}:hover & {
    transform: scale(1.2) rotate(5deg);
    color: #ffffff;
  }
`;