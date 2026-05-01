import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaSatelliteDish,
  FaBroadcastTower,
  FaWaveSquare,
  FaMicrochip,
  FaLocationArrow,
} from "react-icons/fa";

import P1 from "../../assets/Home/Hero1.jpg";
import P2 from "../../assets/Home/Hero1.jpg";
import P3 from "../../assets/Home/Hero1.jpg";
import P4 from "../../assets/Home/Hero1.jpg";
import P5 from "../../assets/Home/Hero1.jpg";

const Products = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: "01",
      title: "Tele Command Antennas",
      img: P1,
      icon: <FaSatelliteDish />,
      color: "#1e3c72",
      desc: "High precision Tele command antennas for reliable communication.",
      features: [
        "High Gain & Efficiency",
        "Wide Frequency Range",
        "Robust & Reliable",
        "Weather Resistant",
      ],
    },
    {
      id: "02",
      title: "Spiral Antennas",
      img: P2,
      icon: <FaBroadcastTower />,
      color: "#11998e",
      desc: "Compact spiral antennas offering wideband performance.",
      features: [
        "Wideband Performance",
        "Lightweight Design",
        "Compact Structure",
        "High Durability",
      ],
    },
    {
      id: "03",
      title: "UHF & VHF Filters",
      img: P3,
      icon: <FaWaveSquare />,
      color: "#f7971e",
      desc: "High performance filters ensuring signal clarity.",
      features: [
        "Low Insertion Loss",
        "High Selectivity",
        "Custom Configurations",
        "Military Grade Quality",
      ],
    },
    {
      id: "04",
      title: "AI Engine & Embrai",
      img: P4,
      icon: <FaMicrochip />,
      color: "#6a11cb",
      desc: "Advanced AI engine for intelligent processing.",
      features: [
        "AI/ML Algorithms",
        "Real-time Processing",
        "Edge Computing",
        "Secure & Scalable",
      ],
    },
    {
      id: "05",
      title: "Navigation Systems",
      img: P5,
      icon: <FaLocationArrow />,
      color: "#2e7d32",
      desc: "Reliable navigation systems for precise tracking.",
      features: [
        "High Accuracy",
        "Multi-GNSS Support",
        "Real-time Tracking",
        "Rugged & Reliable",
      ],
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>OUR PRODUCTS</p>
        <h2>
          Advanced Solutions, <span>Built for Tomorrow</span>
        </h2>
        <p className="sub">
          High-performance systems engineered for space, defense and beyond.
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
            transition={{ delay: i * 0.15 }}
          >
            {/* IMAGE */}
            <Top $bg={item.img}>
              <span className="number">{item.id}</span>
              <h3>{item.title}</h3>
            </Top>

            {/* ICON */}
            <Icon style={{ background: item.color }}>
              {item.icon}
            </Icon>

            {/* CONTENT */}
            <Bottom style={{ background: item.color }}>
              <p>{item.desc}</p>

              <ul>
                {item.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </Bottom>
          </Card>
        ))}
      </Grid>

      {/* BUTTON */}
      <Button onClick={() => navigate("/products")}>
        View All Products →
      </Button>
    </Section>
  );
};

export default Products;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f5f7ff;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #00308F;
    font-weight: bold;
  }

  h2 {
    font-size: 36px;

    span {
      color: #00308F;
    }
  }

  .sub {
    color: #555;
    margin-top: 10px;
  }
`;

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

const Card = styled.div`
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  height: 100%; /* 🔥 Equal height fix */

  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const Top = styled.div`
  height: 240px;
  background: url(${p => p.$bg}) center/cover no-repeat;
  position: relative;
  padding: 20px;
  color: white;

  display: flex;
  align-items: flex-end;

  h3 {
    z-index: 2;
    margin-bottom: 10px;
  }

  .number {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 60px;
    opacity: 0.1;
    font-weight: bold;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }
`;

const Icon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 22px;

  position: absolute;
  top: 210px; /* 🔥 Adjusted */
  left: 50%;
  transform: translateX(-50%);

  border: 3px solid white;
  z-index: 5;
`;

const Bottom = styled.div`
  flex: 1; /* 🔥 Equal height content */
  padding: 50px 20px 30px;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-bottom: 15px;
    font-size: 14px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 13px;
      margin-bottom: 8px;
      position: relative;
      padding-left: 15px;

      &::before {
        content: "•";
        position: absolute;
        left: 0;
      }
    }
  }
`;

const Button = styled.button`
  margin: 50px auto 0;
  display: block;

  padding: 14px 30px;
  background: #00308F;
  color: white;
  border: none;
  cursor: pointer;

  border-radius: 6px;
  font-size: 16px;

  transition: 0.3s;

  &:hover {
    background: #001f5c;
    transform: translateY(-2px);
  }
`;