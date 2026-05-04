import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaProjectDiagram, FaCogs } from "react-icons/fa";

/* Optional Images (replace if needed) */
import Img1 from "../../assets/Home/Hero11.jpg";
import Img2 from "../../assets/Home/Hero12.jpg";
import Img3 from "../../assets/Home/Hero13.jpg";
import Img4 from "../../assets/Home/Hero14.jpg";

const SoftwareDevelopment = () => {
  const data = [
    {
      icon: <FaCode />,
      title: "Web Applications",
      desc: "Scalable and high-performance web platforms tailored to business needs.",
      img: Img1,
    },
    {
      icon: <FaCogs />,
      title: "Embedded Software",
      desc: "Real-time embedded solutions integrated with advanced hardware systems.",
      img: Img2,
    },
    {
      icon: <FaCloud />,
      title: "Automation Systems",
      desc: "Smart automation solutions improving efficiency and system reliability.",
      img: Img3,
    },
    {
      icon: <FaProjectDiagram />,
      title: "API Integration",
      desc: "Seamless integration of APIs and interconnected system architectures.",
      img: Img4,
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <h2>
          Custom Software <span>Development & Integration</span>
        </h2>
        <p>
          Delivering flexible, scalable, and integrated software solutions for
          modern engineering and technology ecosystems.
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
            <ImageWrapper>
              <img src={item.img} alt={item.title} />
            </ImageWrapper>

            {/* CONTENT */}
            <Content>
              <Icon>{item.icon}</Icon>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default SoftwareDevelopment;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f9fbff;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 34px;

    span {
      color: #00308F;
    }
  }

  p {
    margin-top: 10px;
    color: #555;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 25px;

  /* Laptop */
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
  border-radius: 15px;
  overflow: hidden;

  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  }
`;

/* 🔥 IMAGE */
const ImageWrapper = styled.div`
  height: 180px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s;
  }

  ${Card}:hover & img {
    transform: scale(1.08);
  }
`;

/* 🔥 CONTENT */
const Content = styled.div`
  padding: 20px;
  text-align: center;

  h3 {
    margin: 10px 0;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

/* 🔥 ICON */
const Icon = styled.div`
  font-size: 30px;
  color: #00308F;
  margin-bottom: 10px;
  transition: 0.3s;

  ${Card}:hover & {
    transform: scale(1.2);
    color: #001f5c;
  }
`;