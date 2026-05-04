import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaBrain,
  FaCogs,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const WhyWork = () => {
  const benefits = [
    {
      icon: <FaRocket />,
      title: "Career Growth",
      desc: "Work on cutting-edge space and defense projects that accelerate your professional journey.",
    },
    {
      icon: <FaBrain />,
      title: "Learning & Innovation",
      desc: "Continuous learning environment with exposure to AI, robotics, and advanced R&D.",
    },
    {
      icon: <FaCogs />,
      title: "Advanced Technology",
      desc: "Hands-on experience with modern systems, tools, and high-end engineering solutions.",
    },
    {
      icon: <FaUsers />,
      title: "Collaborative Culture",
      desc: "Work alongside passionate engineers, researchers, and innovators as a strong team.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Stability & Trust",
      desc: "Reliable organization focused on long-term growth, quality, and employee well-being.",
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>CAREERS</p>
        <h2>
          Why Work <span>With Us</span>
        </h2>
        <p className="sub">
          Discover a workplace that values innovation, growth, and collaboration.
        </p>
      </Header>

      {/* GRID */}
      <Grid>
        {benefits.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
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

export default WhyWork;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;

  background: linear-gradient(135deg, #f8faff, #eef3ff);
`;

/* HEADER */
const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #00308f;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;

    span {
      color: #00308f;
    }
  }

  .sub {
    color: #666;
    margin-top: 10px;
  }
`;

/* GRID */
const Grid = styled.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

/* CARD */
const Card = styled.div`
  background: white;
  padding: 25px;

  border-radius: 15px;
  text-align: center;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 48, 143, 0.2);
  }

  h3 {
    margin: 15px 0 10px;
  }

  p {
    color: #666;
    font-size: 14px;
  }
`;

/* ICON */
const IconBox = styled.div`
  width: 60px;
  height: 60px;

  margin: auto;

  border-radius: 12px;

  background: rgba(0, 48, 143, 0.1);
  color: #00308f;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;

  transition: 0.3s;

  ${Card}:hover & {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 48, 143, 0.4);
  }
`;