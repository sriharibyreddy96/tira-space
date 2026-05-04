import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaSatelliteDish,
  FaBroadcastTower,
  FaWaveSquare,
  FaMicrochip,
  FaLocationArrow,
  FaShieldAlt,
  FaRobot,
  FaIndustry,
} from "react-icons/fa";

/* 🔥 USE DIFFERENT IMAGES */
import P1 from "../../assets/Logo6.jpg";
import P2 from "../../assets/Logo6.jpg";
import P3 from "../../assets/Logo6.jpg";
import P4 from "../../assets/Logo6.jpg";
import P5 from "../../assets/Logo6.jpg";

const Portfolio = () => {
  const products = [
    { name: "Tele Command Antennas", img: P1 },
    { name: "Spiral Antennas", img: P2 },
    { name: "UHF & VHF Filters", img: P3 },
    { name: "AI Engine & Embrai", img: P4 },
    { name: "Navigation Systems", img: P5 },
    { name: "100 Channel Acquisition Systems", img: P1 },
    { name: "Anti-drone System", img: P2 },
    { name: "Microwave & RF Systems", img: P3 },
    { name: "Flair Unmanned Systems", img: P4 },
    { name: "Radar Systems", img: P5 },
    { name: "Satellite Equipment", img: P1 },
    { name: "Laser Altimeter", img: P2 },
    { name: "Sun Sensor", img: P3 },
    { name: "Solar Panels", img: P4 },
    { name: "Missile Systems", img: P5 },
    { name: "Homeland Security", img: P1 },
    { name: "Multi-Function Radar", img: P2 },
    { name: "Antennas", img: P3 },
    { name: "Automation Solutions", img: P4 },
    { name: "RF PCB Production", img: P5 },
  ];

  const icons = [
    <FaSatelliteDish />,
    <FaBroadcastTower />,
    <FaWaveSquare />,
    <FaMicrochip />,
    <FaLocationArrow />,
    <FaRobot />,
    <FaShieldAlt />,
    <FaIndustry />,
  ];

  return (
    <Section>
      <Header>
        <p>PRODUCT PORTFOLIO</p>
        <h2>
          Complete <span>Technology Solutions</span>
        </h2>
      </Header>

      <Grid>
        {products.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Inner>
              {/* FRONT */}
              <Front bg={item.img}>
                <Overlay />

                <Icon>{icons[i % icons.length]}</Icon>

                <Content>
                  <h3>{item.name}</h3>
                  <p>Advanced defense-grade system</p>
                </Content>
              </Front>

              {/* BACK */}
              <Back>
                <h3>{item.name}</h3>
                <p>
                  High-performance solution engineered for space, defense, and
                  industrial applications with superior precision.
                </p>
              </Back>
            </Inner>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Portfolio;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: linear-gradient(135deg, #0b132b, #1c2541);
`;

/* HEADER */
const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    color: #4ecdc4;
    font-weight: bold;
  }

  h2 {
    font-size: 36px;
    color: white;

    span {
      color: #4ecdc4;
    }
  }
`;

/* GRID */
const Grid = styled.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

/* CARD */
const Card = styled.div`
  perspective: 1200px;

  &:hover div {
    transform: rotateY(180deg);
  }

  @media (max-width: 768px) {
    &:hover div {
      transform: none;
    }
  }
`;

const Inner = styled.div`
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.7s;
`;

/* FRONT */
const Front = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 15px;
  overflow: hidden;
  backface-visibility: hidden;

  background: url(${(p) => p.bg}) center/cover no-repeat;

  display: flex;
  align-items: flex-end;
  padding: 20px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

/* OVERLAY */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.3)
  );
  transition: 0.3s;
`;

/* ICON */
const Icon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 45px;
  height: 45px;

  background: rgba(78, 205, 196, 0.9);
  color: black;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;

  box-shadow: 0 0 10px rgba(78, 205, 196, 0.6);

  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    background: white;
  }
`;

/* CONTENT */
const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;

  h3 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  p {
    font-size: 13px;
    color: #ccc;
  }
`;

/* BACK */
const Back = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 15px;

  background: linear-gradient(135deg, #00308f, #4ecdc4);
  color: white;

  backface-visibility: hidden;
  transform: rotateY(180deg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  padding: 20px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`;