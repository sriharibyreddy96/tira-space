import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaSatellite,
  FaUniversity,
  FaBroadcastTower,
  FaUserShield,
} from "react-icons/fa";

const Industries = () => {
  const data = [
    { title: "Defense", icon: <FaShieldAlt />, color: "#ff6b6b" },
    { title: "Space Research", icon: <FaSatellite />, color: "#4ecdc4" },
    { title: "Government", icon: <FaUniversity />, color: "#1a73e8" },
    { title: "Telecom", icon: <FaBroadcastTower />, color: "#f7971e" },
    { title: "Security", icon: <FaUserShield />, color: "#6a11cb" },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>OUR INDUSTRIES</p>
        <h2>
          Industries We <span>Serve</span>
        </h2>
        <p className="sub">
          Delivering cutting-edge solutions across multiple critical sectors.
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
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Icon style={{ background: item.color }}>
              {item.icon}
            </Icon>
            <h3>{item.title}</h3>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Industries;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f8f9fc;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 50px;

  p {
    color: #00308F;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;

    span {
      color: #00308F;
    }
  }

  .sub {
    color: #666;
    margin-top: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 30px;

  /* Laptop */
  grid-template-columns: repeat(5, 1fr);

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 12px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.05);
  }
`;

const Icon = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 26px;

  transition: 0.3s;

  ${Card}:hover & {
    transform: scale(1.2);
  }
`;
