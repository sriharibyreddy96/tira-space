import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaSatellite, FaRobot } from "react-icons/fa";

/* 🔥 Images */
import F1 from "../../assets/Home/Hero2.jpg";
import F2 from "../../assets/Home/Hero2.jpg";
import F3 from "../../assets/Home/Hero2.jpg";
import F4 from "../../assets/Home/Hero2.jpg";

const FutureTech = () => {
  const data = [
    {
      title: "Space-Tech Innovations",
      icon: <FaSatellite />,
      img: F1,
      desc: "Advanced satellite systems and next-gen orbital technologies.",
    },
    {
      title: "AI & Robotics Fusion",
      icon: <FaRobot />,
      img: F2,
      desc: "Combining AI intelligence with robotic automation systems.",
    },
    {
      title: "Defense Future Systems",
      icon: <FaRocket />,
      img: F3,
      desc: "Next-generation defense technologies for strategic operations.",
    },
    {
      title: "Experimental Prototypes",
      icon: <FaLightbulb />,
      img: F4,
      desc: "Innovative prototypes shaping the future of engineering.",
    },
  ];

  return (
    <Section>
      {/* 🌌 STAR BACKGROUND */}
      <Stars />

      {/* HEADER */}
      <Header>
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Future Technologies & <span>Experimental Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Exploring the frontiers of innovation with cutting-edge space
          technologies, AI-driven systems, and futuristic engineering concepts.
        </motion.p>
      </Header>

      {/* CARDS */}
      <Grid>
        {data.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Image bg={item.img}>
              <Overlay />

              <Icon>{item.icon}</Icon>

              <h3>{item.title}</h3>
            </Image>

            <Content>
              <p>{item.desc}</p>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default FutureTech;

/* ================= STYLES ================= */

const Section = styled.section`
  position: relative;
  padding: 120px 40px;
  background: radial-gradient(circle at center, #02040a, #000000);
  overflow: hidden;
`;

/* 🌌 STARS ANIMATION */
const Stars = styled.div`
  position: absolute;
  inset: 0;
  background: transparent;
  z-index: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(white 1px, transparent 1px);
    background-size: 3px 3px;
    opacity: 0.2;
    animation: moveStars 60s linear infinite;
  }

  &::after {
    animation-duration: 120s;
    opacity: 0.1;
  }

  @keyframes moveStars {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-200px);
    }
  }
`;

/* HEADER */
const Header = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 70px;

  h1 {
    font-size: 44px;
    color: white;

    span {
      color: #00c6ff;
    }
  }

  p {
    margin-top: 15px;
    color: #aaa;
    max-width: 700px;
    margin-inline: auto;
  }
`;

/* GRID */
const Grid = styled.div`
  position: relative;
  z-index: 2;

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

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  transition: 0.4s;

  &:hover {
    transform: translateY(-10px);
    border-color: #00c6ff;
    box-shadow: 0 0 25px rgba(0, 198, 255, 0.5);
  }
`;

/* IMAGE */
const Image = styled.div`
  height: 240px;
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