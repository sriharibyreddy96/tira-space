import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaSatellite,
  FaBrain,
  FaBroadcastTower,
  FaShieldAlt,
  FaMicrochip,
} from "react-icons/fa";

/* 🔥 Images (use real tech images) */
import Img1 from "../../assets/Logo6.jpg";
import Img2 from "../../assets/Logo6.jpg";
import Img3 from "../../assets/Logo6.jpg";
import Img4 from "../../assets/Logo6.jpg";
import Img5 from "../../assets/Logo6.jpg";

const TechCategories = () => {
  const [active, setActive] = useState(null);

  const data = [
    {
      title: "AI Systems",
      img: Img1,
      icon: <FaBrain />,
      desc: "Advanced AI-driven analytics and automation systems.",
    },
    {
      title: "Radar Systems",
      img: Img2,
      icon: <FaBroadcastTower />,
      desc: "High-precision radar technologies for detection & tracking.",
    },
    {
      title: "RF & Microwave",
      img: Img3,
      icon: <FaMicrochip />,
      desc: "Reliable RF and microwave engineering solutions.",
    },
    {
      title: "Satellite Technologies",
      img: Img4,
      icon: <FaSatellite />,
      desc: "Next-gen satellite communication and space systems.",
    },
    {
      title: "Defense & Security",
      img: Img5,
      icon: <FaShieldAlt />,
      desc: "Mission-critical defense and homeland security systems.",
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>TECHNOLOGY</p>
        <h2>
          Categories & <span>Solutions</span>
        </h2>
      </Header>

      {/* GRID */}
      <Grid>
        {data.map((item, i) => (
          <Card
            key={i}
            onClick={() => setActive(i)}
            as={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            $active={active === i}
          >
            <Image bg={item.img}>
              <Overlay />

              {/* ICON */}
              <Icon $active={active === i}>{item.icon}</Icon>

              {/* TITLE */}
              <Title>{item.title}</Title>
            </Image>

            {/* EXPAND CONTENT */}
            {active === i && (
              <Expand
                as={motion.div}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <p>{item.desc}</p>
              </Expand>
            )}
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default TechCategories;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #0b132b;
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
    color: white;
    font-size: 36px;

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
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

  border: 2px solid
    ${(p) => (p.$active ? "#4ecdc4" : "rgba(255,255,255,0.1)")};

  transition: 0.3s;

  &:hover {
    border-color: #4ecdc4;
    box-shadow: 0 0 20px rgba(78, 205, 196, 0.6);
    transform: translateY(-5px);
  }
`;

/* IMAGE */
const Image = styled.div`
  height: 200px;
  background: url(${(p) => p.bg}) center/cover no-repeat;
  position: relative;

  display: flex;
  align-items: flex-end;
  padding: 15px;
`;

/* OVERLAY */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.2)
  );
`;

/* ICON */
const Icon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 45px;
  height: 45px;

  background: ${(p) => (p.$active ? "#4ecdc4" : "rgba(255,255,255,0.2)")};
  color: ${(p) => (p.$active ? "#000" : "white")};

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;

  transition: 0.3s;

  &:hover {
    transform: rotate(10deg) scale(1.1);
  }
`;

/* TITLE */
const Title = styled.h3`
  position: relative;
  z-index: 2;
  color: white;
  font-size: 16px;
`;

/* EXPAND */
const Expand = styled.div`
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  color: #ccc;
  font-size: 14px;
`;