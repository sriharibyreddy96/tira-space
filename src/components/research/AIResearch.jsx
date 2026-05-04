import styled from "styled-components";
import { motion } from "framer-motion";
import { FaBrain, FaProjectDiagram, FaChartLine, FaServer } from "react-icons/fa";

/* 🔥 Image */
import AIImg from "../../assets/Home/Hero1.jpg";

const AIResearch = () => {
  const points = [
    {
      icon: <FaBrain />,
      title: "Machine Learning & Deep Learning",
      desc: "Advanced AI models for automation, prediction, and intelligent systems.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Computer Vision",
      desc: "Image processing and object detection for real-time applications.",
    },
    {
      icon: <FaChartLine />,
      title: "Predictive Analytics",
      desc: "Data-driven insights to forecast trends and optimize performance.",
    },
    {
      icon: <FaServer />,
      title: "AI Labs & Infrastructure",
      desc: "High-performance computing environments for AI experimentation.",
    },
  ];

  return (
    <Section>
      <Wrapper>
        {/* LEFT IMAGE */}
        <ImageWrapper>
          <Image
            src={AIImg}
            alt="AI Lab"
            as={motion.img}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </ImageWrapper>

        {/* RIGHT CONTENT */}
        <Content>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Advanced AI Research & <span>Innovation Labs</span>
          </motion.h2>

          <motion.p
            className="sub"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Driving next-generation intelligence through deep learning, computer
            vision, and high-performance AI infrastructure.
          </motion.p>

          {/* FEATURES */}
          <Points>
            {points.map((item, i) => (
              <Point
                key={i}
                as={motion.div}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <Icon>{item.icon}</Icon>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </Point>
            ))}
          </Points>
        </Content>
      </Wrapper>
    </Section>
  );
};

export default AIResearch;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 100px 40px;
  background: linear-gradient(135deg, #05070f, #0a1a3a);
  position: relative;
  overflow: hidden;

  /* 🔥 Animated Gradient */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(0, 198, 255, 0.1),
      rgba(138, 43, 226, 0.1)
    );
    animation: moveBg 10s linear infinite;
  }

  @keyframes moveBg {
    0% {
      transform: translateX(-20%);
    }
    50% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(-20%);
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  max-width: 1300px;
  margin: auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

/* IMAGE */
const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

/* CONTENT */
const Content = styled.div`
  color: white;

  h2 {
    font-size: 36px;

    span {
      color: #00c6ff;
    }
  }

  .sub {
    margin-top: 15px;
    color: #bbb;
  }
`;

/* POINTS */
const Points = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 20px;
`;

const Point = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;

  padding: 15px;
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  transition: 0.3s;

  &:hover {
    border-color: #00c6ff;
    box-shadow: 0 0 20px rgba(0, 198, 255, 0.4);
    transform: translateX(5px);
  }

  h4 {
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #ccc;
  }
`;

/* ICON */
const Icon = styled.div`
  min-width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: rgba(0, 198, 255, 0.15);
  border: 1px solid #00c6ff;

  color: #00c6ff;
  font-size: 18px;

  transition: 0.3s;

  &:hover {
    transform: scale(1.1) rotate(8deg);
    background: #00c6ff;
    color: black;
  }
`;