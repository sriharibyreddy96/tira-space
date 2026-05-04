import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const ContactHero = () => {
  const cardRef = useRef(null);

  /* 🔥 Typing Effect */
  const text = "Connecting you to the future...";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  /* 🔥 Mouse Tilt Effect */
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 20;
    const rotateY = (x - rect.width / 2) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <Section>
      {/* 🌌 Stars Background */}
      <Stars />

      {/* 🚀 Content Card */}
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        as={motion.div}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Let’s Connect with <span>TIRA SPACE</span>
        </h1>

        <TypingText>{displayText}</TypingText>

        <p>
          Reach out to us for collaborations, support, or innovative solutions
          in space, AI, and defense technologies.
        </p>

        {/* 🔥 Quick Contact */}
        <QuickInfo>
          <span><FaPhoneAlt /> +91 98765 43210</span>
          <span><FaEnvelope /> contact@tiraspace.com</span>
          <span><FaGlobe /> Global Reach</span>
        </QuickInfo>

        <Button
          as={motion.button}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Now
        </Button>
      </Card>
    </Section>
  );
};

export default ContactHero;

/* ================= STYLES ================= */

const Section = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: radial-gradient(circle at center, #020617, #000000);
`;

/* 🌌 STAR BACKGROUND */
const Stars = styled.div`
  position: absolute;
  inset: 0;
  background: transparent;

  &:before, &:after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: radial-gradient(white 1px, transparent 1px);
    background-size: 50px 50px;
    animation: moveStars 60s linear infinite;
  }

  &:after {
    animation-duration: 120s;
    opacity: 0.5;
  }

  @keyframes moveStars {
    from { transform: translate(0, 0); }
    to { transform: translate(-500px, -500px); }
  }
`;

/* 🚀 GLASS CARD */
const Card = styled.div`
  position: relative;
  z-index: 2;

  max-width: 700px;
  padding: 40px;

  border-radius: 20px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  text-align: center;
  color: white;

  transition: transform 0.2s ease;

  h1 {
    font-size: 42px;

    span {
      color: #00c6ff;
      text-shadow: 0 0 10px rgba(0, 198, 255, 0.7);
    }
  }

  p {
    margin-top: 15px;
    color: #ccc;
  }

  @media (max-width: 768px) {
    padding: 25px;

    h1 {
      font-size: 26px;
    }
  }
`;

/* ✨ TYPING TEXT */
const TypingText = styled.h3`
  margin-top: 10px;
  color: #00c6ff;
  font-weight: 500;
  min-height: 24px;
`;

/* 📡 QUICK INFO */
const QuickInfo = styled.div`
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  span {
    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 13px;
    color: #aaa;
  }
`;

/* 🔥 BUTTON */
const Button = styled.button`
  margin-top: 30px;
  padding: 12px 30px;

  border-radius: 8px;
  border: none;

  background: linear-gradient(45deg, #00c6ff, #0072ff);
  color: white;

  font-weight: 500;
  cursor: pointer;

  box-shadow: 0 0 20px rgba(0, 198, 255, 0.5);

  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 198, 255, 0.9);
  }
`;