import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  top: 30px;
  background: white;
  color: black;
  padding: 10px;
  display: ${({ open }) => (open ? "block" : "none")};
`;

const Dropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span>{title}</span>
      <Menu open={open}>{children}</Menu>
    </Wrapper>
  );
};

export default Dropdown;