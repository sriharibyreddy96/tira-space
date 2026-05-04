import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaCogs, FaIndustry } from "react-icons/fa";

/* 🔥 Images */
import R1 from "../../assets/LOGO9.jpg";
import R2 from "../../assets/LOGO9.jpg";
import R3 from "../../assets/LOGO9.jpg";
import R4 from "../../assets/LOGO9.jpg";

const RoboticsAI = () => {
  const data = [
    {
      title: "AI-Powered Robotics",
      img: R1,
      icon: <FaRobot />,
      desc: "Advanced robots powered by AI algorithms for autonomous operations.",
    },
    {
      title: "Smart Decision Systems",
      img: R2,
      icon: <FaBrain />,
      desc: "Machine learning systems enabling intelligent real-time decisions.",
    },
    {
      title: "Industrial Automation",
      img: R3,
      icon: <FaIndustry />,
      desc: "Automation solutions improving efficiency and reducing manual effort.",
    },
    {
      title: "Robotic Process Control",
      img: R4,
      icon: <FaCogs />,
      desc: "Precision control systems for seamless robotic operations.",
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>AI & ROBOTICS</p>
        <h2>
          Robotics with <span>AI Integration</span>
        </h2>
        <p className="sub">
          Intelligent robotic systems combining artificial intelligence,
          automation, and real-time analytics for next-generation industries.
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
            {/* IMAGE */}
            <Image bg={item.img}>
              <Overlay />

              {/* ICON */}
              <Icon>{item.icon}</Icon>

              <h3>{item.title}</h3>
            </Image>

            {/* CONTENT */}
            <Content>
              <p>{item.desc}</p>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default RoboticsAI;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: radial-gradient(circle at top, #0a0f1c, #05070f);
`;

/* HEADER */
const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    color: #8a2be2;
    font-weight: bold;
    letter-spacing: 1px;
  }

  h2 {
    color: white;
    font-size: 36px;

    span {
      color: #00c6ff;
    }
  }

  .sub {
    color: #aaa;
    margin-top: 10px;
    max-width: 600px;
    margin-inline: auto;
  }
`;

/* GRID */
const Grid = styled.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

/* CARD */
const Card = styled.div`
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);

  transition: 0.4s;

  &:hover {
    transform: translateY(-8px);
    border-color: #00c6ff;
    box-shadow: 0 0 25px rgba(0, 198, 255, 0.5);
  }
`;

/* IMAGE */
const Image = styled.div`
  height: 230px;
  background: url(${(p) => p.bg}) center/cover no-repeat;
  position: relative;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h3 {
    color: white;
    z-index: 2;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

/* OVERLAY */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.2)
  );
`;

/* ICON */
const Icon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 50px;
  height: 50px;

  border-radius: 12px;

  background: rgba(0, 198, 255, 0.15);
  border: 1px solid #00c6ff;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #00c6ff;
  font-size: 20px;

  transition: 0.4s;

  /* 🔥 Pulse Animation */
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 5px rgba(0, 198, 255, 0.4);
    }
    50% {
      box-shadow: 0 0 20px rgba(0, 198, 255, 0.8);
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 198, 255, 0.4);
    }
  }

  &:hover {
    transform: rotate(10deg) scale(1.1);
    background: #00c6ff;
    color: black;
  }
`;

/* CONTENT */
const Content = styled.div`
  padding: 20px;

  p {
    color: #ccc;
    font-size: 14px;
  }
`;