import React from 'react'
import RDOverview from '../components/research/RDOverview'
import DroneSection from '../components/research/DroneSection'
import RoboticsAI from '../components/research/RoboticsAI'
import AIResearch from '../components/research/AIResearch'
import FutureTech from '../components/research/FutureTech'

const Research = () => {
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