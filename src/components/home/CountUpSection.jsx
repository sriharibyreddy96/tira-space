import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

/* 🔥 Custom Counter Hook */
const useCountUp = (end, duration, startAnimation) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

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
  }, [startAnimation, end, duration]);

  return count;
};

/* 🔥 Single Counter Card (IMPORTANT FIX) */
const CounterCard = ({ value, label, color, start, delay }) => {
  const count = useCountUp(value, 5000, start);

  return (
    <Card
      as={motion.div}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Number style={{ color }}>{count}+</Number>
      <Label>{label}</Label>
    </Card>
  );
};

const CountUpSection = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  /* 🔥 Trigger on Scroll (run once) */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // ✅ stop observing after trigger
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const data = [
    { value: 150, label: "Projects", color: "#ff6b6b" },
    { value: 80, label: "Satellites", color: "#4ecdc4" },
    { value: 300, label: "Clients", color: "#ffd93d" },
    { value: 12, label: "Years", color: "#1a73e8" },
  ];

  return (
    <Wrapper ref={sectionRef}>
      {data.map((item, i) => (
        <CounterCard
          key={i}
          value={item.value}
          label={item.label}
          color={item.color}
          start={start}
          delay={i * 0.2}
        />
      ))}
    </Wrapper>
  );
};

export default CountUpSection;

/* ================= STYLES ================= */

const Wrapper = styled.section`
  padding: 80px 40px;
  background: #f5f7ff;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-align: center;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  padding: 40px 20px;
  background: white;
  border-radius: 15px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`;

const Number = styled.h2`
  font-size: 42px;
  font-weight: bold;
`;

const Label = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #555;
`;