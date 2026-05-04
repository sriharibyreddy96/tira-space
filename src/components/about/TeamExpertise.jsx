import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

/* Sample Images */
import T1 from "../../assets/Home/Hero11.jpg";
import T2 from "../../assets/Home/Hero12.jpg";
import T3 from "../../assets/Home/Hero13.jpg";

const TeamExpertise = () => {
  const team = [
    {
      name: "Dr. Arjun Rao",
      role: "Chief Scientist",
      img: T1,
    },
    {
      name: "Priya Sharma",
      role: "AI Engineer",
      img: T2,
    },
    {
      name: "Rahul Verma",
      role: "RF Specialist",
      img: T3,
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Engineers" },
    { value: "120+", label: "Projects Delivered" },
    { value: "10+", label: "Global Clients" },
  ];

  return (
    <Section>
      {/* HEADER */}
      <Header>
        <p>OUR TEAM</p>
        <h2>
          Team & <span>Expertise</span>
        </h2>
        <p className="sub">
          A team of experts driving innovation in space and defense technologies.
        </p>
      </Header>

      {/* TEAM GRID */}
      <TeamGrid>
        {team.map((member, i) => (
          <Card
            key={i}
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <ImageWrapper>
              <img src={member.img} alt={member.name} />

              {/* SOCIAL ICONS */}
              <Overlay>
                <FaLinkedin />
                <FaTwitter />
              </Overlay>
            </ImageWrapper>

            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </Card>
        ))}
      </TeamGrid>

      {/* STATS */}
      <StatsGrid>
        {stats.map((item, i) => (
          <StatCard
            key={i}
            as={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </StatCard>
        ))}
      </StatsGrid>
    </Section>
  );
};

export default TeamExpertise;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #ffffff;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 50px;

  p {
    color: #00308F;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;

    span {
      color: #00308F;
    }
  }

  .sub {
    color: #666;
    margin-top: 10px;
  }
`;

/* 🔥 TEAM GRID */
const TeamGrid = styled.div`
  display: grid;
  gap: 30px;
  margin-bottom: 60px;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background: #f8f9fc;
  border-radius: 15px;
  padding-bottom: 20px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    margin-top: 15px;
  }

  p {
    color: #777;
    font-size: 14px;
  }
`;

/* 🔥 IMAGE */
const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px 15px 0 0;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: 0.4s;
  }

  ${Card}:hover img {
    transform: scale(1.1);
  }
`;

/* 🔥 SOCIAL OVERLAY */
const Overlay = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  background: rgba(0, 48, 143, 0.7);

  opacity: 0;
  transition: 0.3s;

  svg {
    color: white;
    font-size: 22px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }

  ${Card}:hover & {
    opacity: 1;
  }
`;

/* 🔥 STATS */
const StatsGrid = styled.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StatCard = styled.div`
  background: #00308F;
  color: white;
  padding: 30px;
  border-radius: 12px;

  h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
  }

  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #001f5c;
  }
`;