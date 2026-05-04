import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaHelicopter,   // ✅ replaced FaDrone
  FaBroadcastTower,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* 🔥 Images */
import D1 from "../../assets/LOGO8.jpg";
import D2 from "../../assets/LOGO8.jpg";
import D3 from "../../assets/LOGO8.jpg";
import D4 from "../../assets/LOGO8.jpg";

const DroneSection = () => {
  const data = [
    {
      title: "UAV Design & Development",
      img: D1,
      icon: <FaHelicopter />, // ✅ updated
      desc: "Advanced UAV platforms engineered for high performance and durability.",
      badges: ["Autonomous", "Defense Grade"],
    },
    {
      title: "Autonomous Navigation",
      img: D2,
      icon: <FaMapMarkerAlt />,
      desc: "AI-powered navigation systems with precision tracking and real-time control.",
      badges: ["AI Powered", "High Accuracy"],
    },
    {
      title: "Defense Surveillance",
      img: D3,
      icon: <FaBroadcastTower />,
      desc: "Smart surveillance drones for monitoring, reconnaissance, and security.",
      badges: ["Defense Grade", "AI Tracking"],
    },
    {
      title: "Manufacturing & Assembly",
      img: D4,
      icon: <FaHelicopter />, // ✅ updated
      desc: "State-of-the-art manufacturing units ensuring quality and scalability.",
      badges: ["Industrial", "Automation"],
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>DRONE TECHNOLOGY</p>
        <h2>
          Drone Manufacturing & <span>Autonomous Systems</span>
        </h2>
        <p className="sub">
          Advanced UAV systems built with precision engineering and AI-powered
          intelligence for defense and industrial applications.
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

              {/* BADGES */}
              <Badges>
                {item.badges.map((b, idx) => (
                  <span key={idx}>{b}</span>
                ))}
              </Badges>

              {/* TITLE */}
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

export default DroneSection;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #0a0f1c;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    color: #00c6ff;
    font-weight: bold;
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

const Card = styled.div`
  border-radius: 15px;
  overflow: hidden;
  background: #111827;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  transition: 0.4s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 198, 255, 0.3);
  }
`;

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
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.2)
  );
`;

const Icon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 45px;
  height: 45px;

  background: rgba(0, 198, 255, 0.2);
  border: 1px solid #00c6ff;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #00c6ff;
  font-size: 18px;

  transition: 0.3s;

  &:hover {
    transform: rotate(10deg) scale(1.1);
    background: #00c6ff;
    color: black;
  }
`;

const Badges = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;

  display: flex;
  gap: 8px;

  span {
    background: rgba(0, 198, 255, 0.2);
    border: 1px solid #00c6ff;
    color: #00c6ff;

    padding: 4px 8px;
    font-size: 10px;
    border-radius: 6px;
  }
`;

const Content = styled.div`
  padding: 20px;

  p {
    color: #ccc;
    font-size: 14px;
  }
`;