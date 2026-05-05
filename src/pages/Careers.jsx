import React, { useEffect } from 'react'
import JoinMission from '../components/careers/JoinMission'
import OpenPositions from '../components/careers/OpenPositions'
import WhyWork from '../components/careers/WhyWork'

const Careers = () => {
      // ✅ Runs when About page loads
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <JoinMission />
      <OpenPositions />
      <WhyWork />
    </>
  )
}

export default Careers