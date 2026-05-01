import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Hero11 from "../../assets/Home/Hero11.jpg";
import Hero12 from "../../assets/Home/Hero12.jpg";
import Hero13 from "../../assets/Home/Hero13.jpg";
import Hero14 from "../../assets/Home/Hero14.jpg";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const swiperRef = useRef(null);

  const slides = [
    { img: Hero11, text: "Radar Systems" },
    { img: Hero12, text: "Satellite Tech" },
    { img: Hero13, text: "AI Defense" },
    { img: Hero14, text: "Space Innovation" },
  ];

  return (
    <Wrapper>
      {/* 🔥 CUSTOM ARROWS */}
      <ArrowLeft onClick={() => swiperRef.current.slidePrev()}>
        <FaChevronLeft />
      </ArrowLeft>

      <ArrowRight onClick={() => swiperRef.current.slideNext()}>
        <FaChevronRight />
      </ArrowRight>

      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <Slide $bg={item.img}>
              
              <Overlay />

              <Watermark>{item.text}</Watermark>

              <Content
                as={motion.div}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1>{item.text}</h1>
                <p>Next Generation Space & Radar Technology</p>
                <button>Explore</button>
              </Content>

            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default Hero;

/* ================= STYLES ================= */

const Wrapper = styled.section`
  height: 90vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  .swiper {
    height: 100%;
  }

  .swiper-slide {
    height: 100%;
  }

  /* DOTS */
  .swiper-pagination-bullet {
    background: white;
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    background: #00308F;
    opacity: 1;
  }
`;

/* 🔥 CUSTOM ARROWS */
const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  width: 55px;
  height: 55px;

  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.7);

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 18px;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: #00308F;
    border-color: #00308F;
    transform: translateY(-50%) scale(1.08);
    box-shadow: 0 0 15px rgba(0, 48, 143, 0.6);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

const ArrowLeft = styled(Arrow)`
  left: 20px;
`;

const ArrowRight = styled(Arrow)`
  right: 20px;
`;

const Slide = styled.div`
  height: 90vh;
  width: 100%;
  position: relative;

  background: url(${(p) => p.$bg}) center/cover no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 20px;

  @media (max-width: 1024px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 70vh;
  }

  @media (max-width: 480px) {
    height: 65vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.25)
  );
`;

const Watermark = styled.h1`
  position: absolute;
  font-size: 100px;
  color: rgba(255, 255, 255, 0.05);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 70px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  position: relative;
  color: white;
  max-width: 700px;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 25px;
    color: #ddd;
    font-size: 18px;
  }

  button {
    padding: 12px 28px;
    background: #00308F;
    border: 2px solid #00308F;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 500;
    box-shadow: 0 4px 10px rgba(0, 48, 143, 0.3);
  }

  button:hover {
    background: transparent;
    border-color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 36px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 14px;
    }
  }
`;