import React from 'react'
import Banner from './Banner'
import LanguageCarousel from './Languages'
import LearningIntroSection from './LearningIntroSection'
import BenefitsSection from './BenefitsSection'
import DownloadSection from './DownloadSection'
import ResearchSection from './ResearchSection'
import SchoolsSection from './SchoolsSection'

const Home = () => {
  return (
      <>
          <Banner />
          <LanguageCarousel />
          <LearningIntroSection />
          <BenefitsSection />
          <DownloadSection />
          <SchoolsSection/>
          <ResearchSection />
    </>
  )
}

export default Home