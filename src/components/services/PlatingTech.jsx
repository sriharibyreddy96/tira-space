import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRulerCombined, FaChartLine } from "react-icons/fa";

/* 🔥 CountUp Hook */
const useCountUp = (end, duration, start) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      startVal += increment;

      if (startVal >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return count;
};

/* ✅ FIX: Separate Component */
const CounterCard = ({ value, label, color, start, delay }) => {
  const count = useCountUp(value, 3000, start);

  return (
    <StatCard
      as={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <FaChartLine style={{ color }} />
      <h3 style={{ color }}>{count}+</h3>
      <p>{label}</p>
    </StatCard>
  );
};

const PlatingTech = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  /* 🔥 Scroll Trigger */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 99, label: "Accuracy (%)", color: "#00c6ff" },
    { value: 50, label: "Industries Served", color: "#ff6b6b" },
    { value: 120, label: "Projects Done", color: "#4caf50" },
  ];

  const bars = [
    { label: "Precision Level", value: 95 },
    { label: "Reliability", value: 92 },
    { label: "Performance", value: 90 },
  ];

  return (
    <Section ref={sectionRef}>
      {/* HEADER */}
      <Header>
        <h2>Plating Thickness Measurement Technologies</h2>
        <p>
          High-precision measurement systems ensuring accuracy, reliability, and
          superior industrial performance across multiple domains.
        </p>
      </Header>

      {/* GRID */}
      <Content>
        {/* LEFT */}
        <Left>
          <IconBox>
            <FaRulerCombined />
          </IconBox>

          <h3>Advanced Measurement Systems</h3>

          <p>
            We provide cutting-edge plating thickness measurement technologies
            ensuring micron-level precision, compliance with industry standards,
            and consistent performance.
          </p>

          {/* PROGRESS BARS */}
          {bars.map((item, i) => (
            <Bar key={i}>
              <div className="top">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>

              <div className="progress">
                <motion.div
                  className="fill"
                  initial={{ width: 0 }}
                  animate={{ width: start ? `${item.value}%` : 0 }}
                  transition={{ duration: 1, delay: i * 0.3 }}
                />
              </div>
            </Bar>
          ))}
        </Left>

        {/* RIGHT */}
        <Right>
          {stats.map((item, i) => (
            <CounterCard
              key={i}
              value={item.value}
              label={item.label}
              color={item.color}
              start={start}
              delay={i * 0.2}
            />
          ))}
        </Right>
      </Content>
    </Section>
  );
};

export default PlatingTech;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f9fbff;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 32px;
    color: #00308f;
  }

  p {
    margin-top: 10px;
    color: #555;
    max-width: 600px;
    margin-inline: auto;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: #00308f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const Bar = styled.div`
  margin-bottom: 15px;

  .top {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .progress {
    height: 8px;
    background: #eee;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 5px;
  }

  .fill {
    height: 100%;
    background: #00308f;
  }
`;

const Right = styled.div`
  display: grid;
  gap: 20px;
`;

const StatCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  svg {
    font-size: 28px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 28px;
  }

  p {
    color: #555;
  }

  &:hover {
    transform: translateY(-6px);
  }
`;