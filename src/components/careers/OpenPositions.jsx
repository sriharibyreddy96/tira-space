import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaMicrochip,
} from "react-icons/fa";

const OpenPositions = () => {
  const jobs = [
    {
      title: "AI Engineer",
      dept: "Artificial Intelligence",
      location: "Hyderabad / Remote",
      exp: "2+ Years",
      desc: "Develop AI models, deep learning systems, and intelligent automation.",
      type: "Full-Time",
      icon: <FaMicrochip />,
    },
    {
      title: "RF Engineer",
      dept: "RF & Microwave",
      location: "Hyderabad",
      exp: "3+ Years",
      desc: "Design and optimize RF systems for defense and communication.",
      type: "Full-Time",
      icon: <FaMicrochip />,
    },
    {
      title: "Embedded Systems Developer",
      dept: "Hardware",
      location: "Remote",
      exp: "1-3 Years",
      desc: "Work on embedded firmware, microcontrollers, and IoT systems.",
      type: "Full-Time",
      icon: <FaMicrochip />,
    },
    {
      title: "Robotics Intern",
      dept: "Robotics & AI",
      location: "Hyderabad",
      exp: "Fresher",
      desc: "Assist in building AI-powered robotic systems and automation.",
      type: "Internship",
      icon: <FaMicrochip />,
    },
    {
      title: "Software Developer",
      dept: "Software Engineering",
      location: "Remote",
      exp: "2+ Years",
      desc: "Build scalable web and system applications integrated with hardware.",
      type: "Full-Time",
      icon: <FaMicrochip />,
    },
    {
      title: "Test Engineer",
      dept: "Quality Assurance",
      location: "Hyderabad",
      exp: "2+ Years",
      desc: "Perform testing, validation, and ensure system quality standards.",
      type: "Full-Time",
      icon: <FaMicrochip />,
    },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>CAREERS</p>
        <h2>
          Open <span>Positions</span>
        </h2>
        <p className="sub">
          Explore exciting opportunities and be part of cutting-edge innovation.
        </p>
      </Header>

      {/* GRID */}
      <Grid>
        {jobs.map((job, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            {/* TOP */}
            <Top>
              <Icon>{job.icon}</Icon>
              <Tag>{job.type}</Tag>
            </Top>

            {/* TITLE */}
            <h3>{job.title}</h3>
            <p className="dept">{job.dept}</p>

            {/* INFO */}
            <Info>
              <span>
                <FaMapMarkerAlt /> {job.location}
              </span>
              <span>
                <FaClock /> {job.exp}
              </span>
            </Info>

            {/* DESC */}
            <Desc>{job.desc}</Desc>

            {/* BUTTON */}
            <button>Apply Now</button>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default OpenPositions;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f5f7ff;
`;

/* HEADER */
const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #00308f;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;

    span {
      color: #00308f;
    }
  }

  .sub {
    color: #666;
    margin-top: 10px;
  }
`;

/* GRID */
const Grid = styled.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

/* CARD */
const Card = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);

  border-radius: 15px;
  padding: 25px;

  border: 1px solid rgba(0, 0, 0, 0.05);

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    border-color: #00308f;
    box-shadow: 0 15px 35px rgba(0, 48, 143, 0.2);
  }

  h3 {
    margin: 10px 0 5px;
  }

  .dept {
    color: #00308f;
    font-size: 14px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 15px;
    width: 100%;

    padding: 10px;
    border-radius: 6px;

    border: 2px solid #00308f;
    background: transparent;
    color: #00308f;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #00308f;
      color: white;
      box-shadow: 0 0 12px rgba(0, 48, 143, 0.4);
    }
  }
`;

/* TOP */
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  width: 45px;
  height: 45px;

  border-radius: 10px;
  background: rgba(0, 48, 143, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #00308f;
  font-size: 18px;
`;

const Tag = styled.span`
  background: #00308f;
  color: white;

  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
`;

/* INFO */
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #555;

  margin: 10px 0;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

/* DESC */
const Desc = styled.p`
  font-size: 14px;
  color: #666;
`;