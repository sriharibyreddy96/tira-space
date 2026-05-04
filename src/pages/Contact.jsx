import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import OfficeLocations from '../components/contact/OfficeLocations'
import SmartContactForm from '../components/contact/SmartContactForm'
import ContactChannels from '../components/contact/ContactChannels'
import PartnershipCTA from '../components/contact/PartnershipCTA'

const Contact = () => {
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