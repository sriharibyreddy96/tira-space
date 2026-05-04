import styled from "styled-components";
import { motion } from "framer-motion";

/* Sample Images */
import P1 from "../../assets/Home/Hero11.jpg";
import P2 from "../../assets/Home/Hero12.jpg";
import P3 from "../../assets/Home/Hero13.jpg";
import P4 from "../../assets/Home/Hero14.jpg";

const ProductsSolutions = () => {
  const data = [
    {
      title: "Radar Systems",
      img: P1,
      desc: "Advanced radar solutions for defense and surveillance.",
    },
    {
      title: "AI Engine",
      img: P2,
      desc: "Next-gen AI processing for smart decision systems.",
    },
    {
      title: "Satellite Communication",
      img: P3,
      desc: "Reliable space communication technologies.",
    },
    {
      title: "RF Engineering",
      img: P4,
      desc: "High-frequency RF systems with precision engineering.",
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>OUR SOLUTIONS</p>
        <h2>
          Products & <span>Solutions</span>
        </h2>
        <p className="sub">
          Delivering cutting-edge technology solutions for space and defense.
        </p>
      </Header>

      {/* GRID */}
      <Grid>
        {data.map((item, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Inner>
              {/* FRONT */}
              <Front $bg={item.img}>
                <Overlay />
                <h3>{item.title}</h3>
              </Front>

              {/* BACK */}
              <Back>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Back>
            </Inner>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default ProductsSolutions;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #0b0f1a;
  color: white;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #4ecdc4;
    font-weight: bold;
  }

  h2 {
    font-size: 36px;

    span {
      color: #4ecdc4;
    }
  }

  .sub {
    color: #bbb;
    margin-top: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 25px;

  /* Laptop */
  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  perspective: 1000px;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${Card}:hover & {
    transform: rotateY(180deg);
  }

  /* Disable flip on mobile */
  @media (max-width: 768px) {
    transform: none !important;
  }
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  backface-visibility: hidden;
  overflow: hidden;
`;

/* FRONT */
const Front = styled(Face)`
  background: url(${p => p.$bg}) center/cover no-repeat;
  display: flex;
  align-items: flex-end;
  padding: 20px;

  h3 {
    z-index: 2;
    font-size: 20px;
  }
`;

/* DARK OVERLAY */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
`;

/* BACK */
const Back = styled(Face)`
  background: #111827;
  transform: rotateY(180deg);
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin-bottom: 10px;
    color: #4ecdc4;
  }

  p {
    color: #ccc;
    font-size: 14px;
  }

  /* Mobile fallback */
  @media (max-width: 768px) {
    transform: none;
    position: relative;
    margin-top: 10px;
    height: auto;
  }
`;