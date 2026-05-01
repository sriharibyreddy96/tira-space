import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      {/* TOP */}
      <Top>
        {/* BRAND */}
        <Column
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2>TIRA SPACE</h2>
          <p>
            Innovating Space, Radar & AI-driven solutions for the future.
          </p>
        </Column>

        {/* LINKS */}
        <Column
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </Column>

        {/* SERVICES */}
        <Column
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Services</h3>
          <a href="#">Hardware Design</a>
          <a href="#">Software Design</a>
          <a href="#">Testing & Analysis</a>
          <a href="#">Automation</a>
        </Column>

        {/* CONTACT */}
        <Column
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Contact</h3>
          <p>📍 India</p>
          <p>📧 info@tira.com</p>
          <p>📞 +91 9876543210</p>

          <Socials>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaWhatsapp />
          </Socials>
        </Column>
      </Top>

      {/* DIVIDER */}
      <Divider />

      {/* BOTTOM */}
      <Bottom>
        © 2026 Tira Space Technologies PVT Limited. All Rights Reserved.
      </Bottom>
    </FooterContainer>
  );
};

export default Footer;

/* ================= STYLES ================= */

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #00308F, #001f5c);
  color: white;
  padding: 60px 40px 30px;
`;

/* 🔥 TOP GRID */
const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;

/* 🔥 COLUMN */
const Column = styled.div`
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h3 {
    margin-bottom: 15px;
    position: relative;

    &::after {
      content: "";
      width: 40px;
      height: 2px;
      background: #4da3ff;
      display: block;
      margin-top: 5px;
    }
  }

  p {
    color: #ddd;
    margin-bottom: 10px;
    font-size: 14px;
  }

  a {
    display: block;
    margin-bottom: 8px;
    color: #ddd;
    text-decoration: none;
    font-size: 14px;
    transition: 0.3s;

    &:hover {
      color: #4da3ff;
      padding-left: 5px;
    }
  }
`;

/* 🔥 SOCIAL ICONS */
const Socials = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 15px;

  svg {
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #4da3ff;
      transform: scale(1.2);
    }
  }

  /* Center on mobile */
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

/* 🔥 DIVIDER LINE */
const Divider = styled.div`
  margin: 30px 0 20px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
`;

/* 🔥 BOTTOM */
const Bottom = styled.div`
  text-align: center;
  font-size: 14px;
  color: #bbb;
`;