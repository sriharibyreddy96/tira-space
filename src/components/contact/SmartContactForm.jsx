import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

const steps = [
  { label: "What’s your name?", key: "name", icon: <FaUser /> },
  { label: "Your email address?", key: "email", icon: <FaEnvelope /> },
  { label: "Phone number?", key: "phone", icon: <FaPhone /> },
  { label: "How can we help you?", key: "message", icon: <FaPaperPlane /> },
];

const SmartContactForm = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleNext = () => {
    if (!form[steps[step].key]) return;

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <Section>
      <Card
        as={motion.div}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {!success ? (
          <>
            {/* 🔥 Progress */}
            <Progress>
              <div style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
            </Progress>

            {/* 🔥 Question */}
            <Question
              key={step}
              as={motion.h2}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {steps[step].icon} {steps[step].label}
            </Question>

            {/* 🔥 Input */}
            <Input
              as={motion.input}
              type="text"
              placeholder="Type your answer..."
              value={form[steps[step].key] || ""}
              onChange={(e) =>
                setForm({ ...form, [steps[step].key]: e.target.value })
              }
              whileFocus={{ scale: 1.02 }}
            />

            {/* 🔥 Button */}
            <Button onClick={handleNext}>
              {step === steps.length - 1 ? "Submit" : "Next"}
            </Button>

            {/* 🔄 Loading */}
            {loading && <Loader />}
          </>
        ) : (
          <Success
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Message Sent Successfully!
          </Success>
        )}
      </Card>
    </Section>
  );
};

export default SmartContactForm;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #020617, #001f3f);
`;

const Card = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 40px;
  border-radius: 20px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  color: white;
  text-align: center;
`;

const Progress = styled.div`
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 30px;
  overflow: hidden;

  div {
    height: 100%;
    background: linear-gradient(90deg, #00c6ff, #0072ff);
    transition: 0.3s;
  }
`;

const Question = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;

  margin-bottom: 20px;

  outline: none;

  background: rgba(255, 255, 255, 0.1);
  color: white;

  &:focus {
    box-shadow: 0 0 10px #00c6ff;
  }
`;

const Button = styled.button`
  padding: 12px 30px;
  border-radius: 8px;

  border: none;
  background: linear-gradient(45deg, #00c6ff, #0072ff);

  color: white;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 15px #00c6ff;
  }
`;

const Loader = styled.div`
  margin-top: 20px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top: 3px solid #00c6ff;
  border-radius: 50%;
  width: 25px;
  height: 25px;

  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Success = styled.div`
  font-size: 22px;
  color: #00ffcc;
`;