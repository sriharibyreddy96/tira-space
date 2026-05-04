import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaGlobe,
  FaLock,
  FaBroadcastTower,
  FaIndustry,
} from "react-icons/fa";

/* 🔥 Use real images */
import Img1 from "../../assets/Logo6.jpg";
import Img2 from "../../assets/Logo6.jpg";
import Img3 from "../../assets/Logo6.jpg";
import Img4 from "../../assets/Logo6.jpg";
import Img5 from "../../assets/Logo6.jpg";

const UseCases = () => {
  const data = [
    {
      title: "Defense & Military",
      desc: "Advanced radar, missile, and surveillance systems designed for mission-critical defense operations.",
      img: Img1,
      icon: <FaShieldAlt />,
    },
    {
      title: "Space Research",
      desc: "Satellite systems and AI-powered solutions supporting deep space exploration and communication.",
      img: Img2,
      icon: <FaGlobe />,
    },
    {
      title: "Homeland Security",
      desc: "Smart monitoring, threat detection, and border security technologies for national safety.",
      img: Img3,
      icon: <FaLock />,
    },
    {
      title: "Telecom & Communication",
      desc: "Reliable RF, microwave, and communication systems enabling seamless connectivity.",
      img: Img4,
      icon: <FaBroadcastTower />,
    },
    {
      title: "Industrial Automation",
      desc: "Precision automation and AI-driven systems improving efficiency in industrial environments.",
      img: Img5,
      icon: <FaIndustry />,
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>APPLICATIONS</p>
        <h2>
          Product <span>Use Cases</span>
        </h2>
        <p className="sub">
          Real-world deployment of our advanced technologies across industries.
        </p>
      </Header>

      {/* CONTENT */}
      <Wrapper>
        {data.map((item, i) => (
          <Row
            key={i}
            reverse={i % 2 !== 0}
            as={motion.div}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            {/* IMAGE */}
            <Image bg={item.img}>
              <Overlay />
            </Image>

            {/* TEXT */}
            <Content>
              <Icon>{item.icon}</Icon>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Content>
          </Row>
        ))}
      </Wrapper>
    </Section>
  );
};

export default UseCases;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f5f7ff;
`;

/* HEADER */
const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    color: #00308f;
    font-weight: bold;
  }

  h2 {
    font-size: 36px;

    span {
      color: #00308f;
    }
  }

  .sub {
    margin-top: 10px;
    color: #555;
  }
`;

/* WRAPPER */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

/* ROW */
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  flex-direction: ${(p) => (p.reverse ? "row-reverse" : "row")};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/* IMAGE */
const Image = styled.div`
  flex: 1;
  height: 280px;
  border-radius: 15px;

  background: url(${(p) => p.bg}) center/cover no-repeat;
  position: relative;

  overflow: hidden;

  transition: 0.4s;

  &:hover {
    transform: scale(1.03);
  }
`;

/* OVERLAY */
const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.2)
  );
`;

/* CONTENT */
const Content = styled.div`
  flex: 1;

  h3 {
    font-size: 22px;
    margin: 10px 0;
  }

  p {
    color: #555;
    line-height: 1.6;
  }
`;

/* ICON */
const Icon = styled.div`
  width: 55px;
  height: 55px;

  background: #00308f;
  color: white;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;

  margin-bottom: 10px;

  transition: 0.3s;

  &:hover {
    background: #001f5c;
    transform: scale(1.1);
  }
`;