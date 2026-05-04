import { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo1 from "../../assets/Logo1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      {/* Logo */}
      <LogoWrapper>
        <img src={Logo1} alt="logo" />
      </LogoWrapper>

      {/* Right Links */}
      <Links>
        <a href="/tira-space">Home</a>
        <a href="/tira-space/about">About</a>
        <a href="/tira-space/services">Services</a>
        <a href="/tira-space/products">Products</a>
        <a href="/tira-space/research">Research</a>
        <a href="/tira-space/careers">Careers</a>
        <a href="/tira-space/contact">Contact</a>
      </Links>

      {/* Mobile Icon */}
      <MenuIcon onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      {/* Mobile Menu */}
      {open && (
        <MobileMenu
          as={motion.div}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
        >
          <a href="/tira-space">Home</a>
          <a href="/tira-space/about">About</a>
          <a href="/tira-space/services">Services</a>
          <a href="/tira-space/products">Products</a>
          <a href="/tira-space/research">Research</a>
          <a href="/tira-space/careers">Careers</a>
          <a href="/tira-space/contact">Contact</a>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;

/* ================= STYLES ================= */

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px; /* ✅ fixed height (no extra gap) */
  background: #00308f;
  display: flex;
  align-items: center;
  padding: 0 40px;
  z-index: 1000;
`;

/* 🔥 Logo Styling */
const LogoWrapper = styled.div`
  img {
    height: 50px;
    border-radius: 10px;
    padding: 5px;
    background: white;

    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
    }
  }
`;

/* 🔥 Right Aligned Links */
const Links = styled.div`
  display: flex;
  gap: 30px;
  margin-left: auto; /* ✅ pushes links to right */

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    position: relative;

    /* underline animation */
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0%;
      height: 2px;
      background: white;
      transition: 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* 🔥 Mobile Icon */
const MenuIcon = styled.div`
  display: none;
  margin-left: auto;
  color: white;
  font-size: 26px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* 🔥 Mobile Menu */
const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  right: 0;
  width: 260px;
  height: calc(100vh - 70px); /* ✅ no extra space */
  background: #00308f;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: 0.3s;

    &:hover {
      padding-left: 10px;
      color: #ddd;
    }
  }
`;
