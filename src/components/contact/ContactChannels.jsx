import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTools,
  FaClock,
} from "react-icons/fa";

const channels = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 91234 56789"],
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    details: ["support@tiraspace.com", "sales@tiraspace.com"],
  },
  {
    icon: <FaTools />,
    title: "Support",
    details: ["Technical Support", "Sales Inquiry", "General Help"],
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    details: ["Mon - Fri: 9 AM - 6 PM", "Sat: 10 AM - 2 PM"],
  },
];

const ContactChannels = () => {
  return (
    <Section>
      <Header>
        <h2>Contact & Support Channels</h2>
        <p>Multiple ways to reach us for support, inquiries, and collaboration.</p>
      </Header>

      <Grid>
        {channels.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Icon>{item.icon}</Icon>

            <h3>{item.title}</h3>

            <Details>
              {item.details.map((d, index) => (
                <p key={index}>{d}</p>
              ))}
            </Details>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default ContactChannels;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: linear-gradient(135deg, #020617, #001f3f);
  color: white;
`;

/* HEADER */
const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 32px;
  }

  p {
    margin-top: 10px;
    color: #aaa;
  }
`;

/* GRID */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

/* CARD */
const Card = styled.div`
  position: relative;
  padding: 30px;
  border-radius: 15px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);

  border: 1px solid rgba(0, 198, 255, 0.2);

  overflow: hidden;
  cursor: pointer;

  transition: 0.4s;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 0 25px rgba(0, 198, 255, 0.6);
    border-color: #00c6ff;
  }

  h3 {
    margin-top: 15px;
  }
`;

/* ICON */
const Icon = styled.div`
  font-size: 26px;
  color: #00c6ff;

  transition: 0.4s;

  ${Card}:hover & {
    transform: rotate(10deg) scale(1.2);
    color: #fff;
  }
`;

/* DETAILS (EXPAND EFFECT) */
const Details = styled.div`
  margin-top: 10px;
  max-height: 0;
  overflow: hidden;
  transition: 0.4s ease;

  p {
    font-size: 14px;
    color: #ccc;
    margin: 5px 0;
  }

  ${Card}:hover & {
    max-height: 200px;
  }
`;