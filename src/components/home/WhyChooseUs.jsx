import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaUsers,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const data = [
    {
      icon: <FaShieldAlt />,
      title: "Trusted & Secure",
      desc: "We ensure high-level security standards with reliable and mission-critical solutions for defense and space applications.",
      color: "#00308F",
    },
    {
      icon: <FaRocket />,
      title: "Innovation Driven",
      desc: "Our cutting-edge technologies combine AI, satellite systems, and advanced radar solutions to deliver future-ready systems.",
      color: "#1e90ff",
    },
    {
      icon: <FaCogs />,
      title: "Advanced Engineering",
      desc: "From hardware design to AI-powered software, we provide complete end-to-end engineering solutions.",
      color: "#6a11cb",
    },
    {
      icon: <FaUsers />,
      title: "Customer Focused",
      desc: "We prioritize client satisfaction by delivering customized solutions and continuous support.",
      color: "#2e7d32",
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <h2>
          Why <span>Choose Us</span>
        </h2>
        <p>
          At TIRA SPACE, we combine innovation, precision, and expertise to
          deliver world-class space and defense solutions. Our commitment to
          quality and advanced engineering ensures reliable systems that meet
          the demands of tomorrow.
        </p>
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

export default WhyChooseUs;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: linear-gradient(to right, #f5f7ff, #eef2ff);
`;

const Header = styled.div`
  text-align: center;
  max-width: 800px;
  margin: auto;
  margin-bottom: 60px;

  h2 {
    font-size: 38px;
    margin-bottom: 15px;

    span {
      color: #00308F;
    }
  }

  p {
    color: #555;
    line-height: 1.6;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 30px;

  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  padding: 40px 25px;
  border-radius: 15px;
  text-align: center;

  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
  }

  h3 {
    margin-top: 20px;
    font-size: 20px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }
`;

const Icon = styled.div`
  width: 70px;
  height: 70px;
  margin: auto;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 28px;

  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
`;