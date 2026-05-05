import React, { useEffect } from 'react'
import ContactHero from '../components/contact/ContactHero'
import OfficeLocations from '../components/contact/OfficeLocations'
import SmartContactForm from '../components/contact/SmartContactForm'
import ContactChannels from '../components/contact/ContactChannels'
import PartnershipCTA from '../components/contact/PartnershipCTA'

const Contact = () => {
      // ✅ Runs when About page loads
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <ContactHero />
      <OfficeLocations />
      <SmartContactForm />
      <ContactChannels />
      <PartnershipCTA />
    </>
  )
}

export default Contact