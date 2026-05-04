import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaUserCheck,
  FaClipboardCheck,
} from "react-icons/fa";

/* 🔥 ICON PULSE ANIMATION */
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.12); }
  100% { transform: scale(1); }
`;

const QualityCommitment = () => {
  const data = [
    {
      title: "Quality Assurance",
      desc: "Strict quality checks at every stage to ensure top-tier performance and reliability.",
      icon: <FaCheckCircle />,
      color: "#4caf50",
    },
    {
      title: "Testing Standards",
      desc: "Comprehensive testing aligned with global aerospace and defense standards.",
      icon: <FaClipboardCheck />,
      color: "#1a73e8",
    },
    {
      title: "Secure Systems",
      desc: "Advanced security protocols ensuring data integrity and operational safety.",
      icon: <FaShieldAlt />,
      color: "#00bcd4",
    },
    {
      title: "Customer Commitment",
      desc: "Dedicated support and long-term partnerships focused on client success.",
      icon: <FaUserCheck />,
      color: "#2ecc71",
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>OUR PROMISE</p>
        <h2>
          Quality & <span>Commitment</span>
        </h2>
        <p className="sub">
          Delivering excellence through precision, reliability, and customer focus.
        </p>
      </Header>

      {/* GRID */}
      <Grid>
        {data.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Icon style={{ background: item.color }}>
              {item.icon}
            </Icon>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default QualityCommitment;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f4f8fb;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 50px;

  p {
    color: #1a73e8;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;

    span {
      color: #1a73e8;
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
  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  padding: 30px 25px;
  border-radius: 15px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
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

  animation: ${pulse} 2s infinite;
`;
