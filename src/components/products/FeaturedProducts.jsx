import styled from "styled-components";
import { motion } from "framer-motion";

/* 🔥 Images (replace with your real assets) */
import P1 from "../../assets/Home/Hero11.jpg";
import P2 from "../../assets/Home/Hero12.jpg";
import P3 from "../../assets/Home/Hero13.jpg";
import P4 from "../../assets/Home/Hero14.jpg";

const FeaturedProducts = () => {
  const data = [
    {
      title: "Radar Systems",
      tagline: "Advanced Detection & Surveillance",
      img: P1,
      badge: "Defense Grade",
    },
    {
      title: "AI Engine",
      tagline: "Next-Gen Intelligence Processing",
      img: P2,
      badge: "AI Powered",
    },
    {
      title: "Anti-Drone System",
      tagline: "Smart Threat Neutralization",
      img: P3,
      badge: "High Precision",
    },
    {
      title: "Satellite Equipment",
      tagline: "Reliable Space Communication",
      img: P4,
      badge: "Space Tech",
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>FEATURED SYSTEMS</p>
        <h2>
          Advanced <span>Defense Technologies</span>
        </h2>
      </Header>

      {/* GRID */}
      <Grid>
        {data.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Image $bg={item.img}>
              <Overlay />

              {/* BADGE */}
              <Badge>{item.badge}</Badge>

              {/* CONTENT */}
              <Content>
                <h3>{item.title}</h3>
                <p>{item.tagline}</p>
              </Content>
            </Image>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default FeaturedProducts;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #0b132b; /* Dark premium background */
`;

/* 🔥 Header */
const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #4ecdc4;
    font-weight: bold;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 36px;
    color: white;

    span {
      color: #4ecdc4;
    }
  }
`;

/* 🔥 Grid Layout */
const Grid = styled.div`
  display: grid;
  gap: 25px;

  /* Laptop */
  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

/* 🔥 Card */
const Card = styled.div`
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  cursor: pointer;
`;

/* 🔥 Image Background */
const Image = styled.div`
  height: 280px;
  background: url(${(p) => p.$bg}) center/cover no-repeat;
  position: relative;

  display: flex;
  align-items: flex-end;
  padding: 20px;

  transition: 0.4s;

  &:hover {
    transform: scale(1.05);
  }

  &:hover::after {
    background: rgba(0, 0, 0, 0.75);
  }
`;

/* 🔥 Overlay */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.4s;
`;

/* 🔥 Badge */
const Badge = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;

  background: rgba(78, 205, 196, 0.9);
  color: #000;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;

  backdrop-filter: blur(5px);
`;

/* 🔥 Content */
const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;

  h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #ddd;
  }
`;