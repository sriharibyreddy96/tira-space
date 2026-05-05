import React, { useEffect } from 'react'
import RDOverview from '../components/research/RDOverview'
import DroneSection from '../components/research/DroneSection'
import RoboticsAI from '../components/research/RoboticsAI'
import AIResearch from '../components/research/AIResearch'
import FutureTech from '../components/research/FutureTech'

const Research = () => {
      // ✅ Runs when About page loads
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <RDOverview />
      <DroneSection />
      <RoboticsAI />
      <AIResearch />
      <FutureTech />
    </>
  )
}

export default Research