import React, { useEffect } from 'react'
import AboutTira from '../components/about/AboutTira'
import VisionMission from '../components/about/VisionMission'
import CoreTechnologies from '../components/about/CoreTechnologies'
import ProductsSolutions from '../components/about/ProductsSolutions'
import Industries from '../components/about/Industries'
import ResearchInnovation from '../components/about/ResearchInnovation'
import QualityCommitment from '../components/about/QualityCommitment'
import TeamExpertise from '../components/about/TeamExpertise'

const About = () => {
    // ✅ Runs when About page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <AboutTira />
        <VisionMission />
        <CoreTechnologies />
        <ProductsSolutions />
        <Industries />
        <ResearchInnovation />
        <QualityCommitment />
        <TeamExpertise />
    </>
  )
}

export default About