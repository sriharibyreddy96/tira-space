import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBuilding, FaGlobe } from "react-icons/fa";

const locations = [
  {
    id: 1,
    name: "Headquarters",
    city: "Hyderabad, India",
    address: "Hitech City, Hyderabad, Telangana",
    phone: "+91 98765 43210",
    email: "hq@tiraspace.com",
    top: "45%",
    left: "65%",
  },
  {
    id: 2,
    name: "R&D Center",
    city: "Bangalore, India",
    address: "Electronic City, Bangalore",
    phone: "+91 91234 56789",
    email: "rnd@tiraspace.com",
    top: "55%",
    left: "60%",
  },
  {
    id: 3,
    name: "Global Office",
    city: "Dubai, UAE",
    address: "Business Bay, Dubai",
    phone: "+971 123 4567",
    email: "global@tiraspace.com",
    top: "40%",
    left: "50%",
  },
];

const OfficeLocations = () => {
  const [active, setActive] = useState(locations[0]);

  return (
    <Section>
      <Container>
        {/* 🌍 LEFT MAP */}
        <MapWrapper>
          <WorldMap />

          {locations.map((loc) => (
            <Dot
              key={loc.id}
              style={{ top: loc.top, left: loc.left }}
              onClick={() => setActive(loc)}
            >
              <span className="pulse" />
              <FaMapMarkerAlt />
            </Dot>
          ))}
        </MapWrapper>

        {/* 📍 RIGHT DETAILS */}
        <Details
          key={active.id}
          as={motion.div}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3>{active.name}</h3>
          <h4>{active.city}</h4>

          <Info>
            <p><FaBuilding /> {active.address}</p>
            <p><FaGlobe /> {active.phone}</p>
            <p><FaMapMarkerAlt /> {active.email}</p>
          </Info>

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </Details>
      </Container>
    </Section>
  );
};

export default OfficeLocations;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 40px;
  background: #f5f8ff;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

/* 🌍 MAP */
const MapWrapper = styled.div`
  position: relative;
  height: 450px;
  border-radius: 15px;
  overflow: hidden;
  background: #020617;
`;

/* WORLD MAP BACKGROUND */
const WorldMap = styled.div`
  width: 100%;
  height: 100%;
  background: url("https://www.transparenttextures.com/patterns/stardust.png"),
    radial-gradient(circle, #021024, #000);
`;

/* 📍 LOCATION DOT */
const Dot = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  color: #00c6ff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;

  .pulse {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgba(0, 198, 255, 0.4);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(0.8); opacity: 0.7; }
    70% { transform: scale(1.6); opacity: 0; }
    100% { opacity: 0; }
  }

  &:hover {
    color: #fff;
  }
`;

/* 📍 DETAILS */
const Details = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  h3 {
    color: #00308f;
  }

  h4 {
    margin-top: 5px;
    color: #666;
  }

  iframe {
    width: 100%;
    height: 200px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
  }
`;

const Info = styled.div`
  margin-top: 15px;

  p {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #555;
    margin-bottom: 8px;
  }
`;