import styled from "styled-components";
import { motion } from "framer-motion";
import { FaComments, FaCogs, FaTools } from "react-icons/fa";
import ConsultImg from "../../assets/Home/Hero11.jpg"; // replace with real image

const PlatingConsultation = () => {
  return (
    <Section>
      <Container>
        {/* LEFT CONTENT */}
        <Left
          as={motion.div}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Component-Level Plating Consultation</h2>

          <p className="desc">
            We provide expert consultation to diagnose plating issues at the
            component level and deliver optimized, reliable solutions tailored
            to your application.
          </p>

          {/* FEATURES */}
          <Features>
            <Item>
              <FaTools />
              <div>
                <h4>Issue Diagnosis</h4>
                <p>Identify root causes in plating defects and failures.</p>
              </div>
            </Item>

            <Item>
              <FaCogs />
              <div>
                <h4>Smart Recommendations</h4>
                <p>Custom solutions based on materials and use cases.</p>
              </div>
            </Item>

            <Item>
              <FaComments />
              <div>
                <h4>Expert Consultation</h4>
                <p>Direct collaboration with engineering specialists.</p>
              </div>
            </Item>
          </Features>

          {/* SOLUTION BOX */}
          <SolutionBox
            as={motion.div}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ✔ Optimized plating strategies for maximum performance & durability
          </SolutionBox>
        </Left>

        {/* RIGHT IMAGE */}
        <Right
          as={motion.div}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={ConsultImg} alt="consultation" />
        </Right>
      </Container>
    </Section>
  );
};

export default PlatingConsultation;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f5f8ff;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

/* LEFT */
const Left = styled.div`
  h2 {
    font-size: 32px;
    color: #00308f;
    margin-bottom: 15px;
  }

  .desc {
    color: #555;
    margin-bottom: 25px;
  }
`;

/* FEATURES */
const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;

  svg {
    font-size: 22px;
    color: #00308f;
    margin-top: 5px;
  }

  h4 {
    margin: 0;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

/* SOLUTION BOX */
const SolutionBox = styled.div`
  margin-top: 30px;
  padding: 15px 20px;
  border-radius: 10px;

  background: #00308f;
  color: white;
  font-weight: 500;

  box-shadow: 0 5px 15px rgba(0, 48, 143, 0.3);
`;

/* RIGHT */
const Right = styled.div`
  img {
    width: 100%;
    border-radius: 15px;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transition: 0.4s;
  }

  img:hover {
    transform: scale(1.05);
  }
`;