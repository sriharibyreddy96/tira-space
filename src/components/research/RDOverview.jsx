import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFlask, FaAtom, FaLightbulb } from "react-icons/fa";

import RDImg from "../../assets/LOGO8.jpg";

/* 🔥 CountUp Hook */
const useCountUp = (end, duration, start) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return count;
};

/* 🔥 FIXED: Separate Component for Hook */
const StatItem = ({ value, label, start }) => {
  const count = useCountUp(value, 2000, start);

  return (
    <Stat>
      <h3>{count}+</h3>
      <p>{label}</p>
    </Stat>
  );
};

const RDOverview = () => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  /* 🔥 Scroll Trigger */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const statsData = [
    { value: 120, label: "Projects Completed" },
    { value: 25, label: "Patents & Innovations" },
    { value: 10, label: "Advanced Labs" },
  ];

  return (
    <Section ref={ref}>
      <Wrapper>
        {/* LEFT IMAGE */}
        <ImageBox
          as={motion.div}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={RDImg} alt="R&D" />
        </ImageBox>

        {/* RIGHT CONTENT */}
        <Content
          as={motion.div}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tag">RESEARCH</p>

          <h2>Driving Innovation Through Advanced R&D</h2>

          <p className="desc">
            At TIRA SPACE, our Research & Development drives innovation across
            AI, robotics, RF engineering, and space technologies, enabling
            next-generation solutions for complex challenges.
          </p>

          {/* FEATURES */}
          <Features>
            <div>
              <FaFlask />
              <span>Advanced Research Labs</span>
            </div>
            <div>
              <FaAtom />
              <span>Cutting-edge Technologies</span>
            </div>
            <div>
              <FaLightbulb />
              <span>Innovation-driven Approach</span>
            </div>
          </Features>

          {/* STATS */}
          <Stats>
            {statsData.map((item, i) => (
              <StatItem
                key={i}
                value={item.value}
                label={item.label}
                start={start}
              />
            ))}
          </Stats>
        </Content>
      </Wrapper>
    </Section>
  );
};

export default RDOverview;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: linear-gradient(to right, #f9fbff, #eef3ff);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

/* IMAGE */
const ImageBox = styled.div`
  overflow: hidden;
  border-radius: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

/* CONTENT */
const Content = styled.div`
  .tag {
    color: #00308f;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;
    margin: 10px 0;
  }

  .desc {
    color: #555;
    margin-bottom: 20px;
  }
`;

/* FEATURES */
const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      color: #00308f;
    }
  }
`;

/* STATS */
const Stats = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Stat = styled.div`
  h3 {
    font-size: 28px;
    color: #00308f;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;