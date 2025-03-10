import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Import individual welcome screen components
import IntroWelcome from './IntroWelcome';
import HdyhauWelcome from './HdyhauWelcome';
import GoalsWelcome from './GoalsWelcome';
import ScheduleWelcome from './ScheduleWelcome';
import StartWelcome from './StartWelcome';

// Main Welcome container that renders the correct step component
const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Define the welcome flow steps
  const steps = {
    intro: {
      component: IntroWelcome,
      next: 'hdyhau',
      prev: null
    },
    hdyhau: {
      component: HdyhauWelcome,
      next: 'goals',
      prev: 'intro'
    },
    goals: {
      component: GoalsWelcome,
      next: 'schedule',
      prev: 'hdyhau'
    },
    schedule: {
      component: ScheduleWelcome,
      next: 'start',
      prev: 'goals'
    },
    start: {
      component: StartWelcome,
      next: 'complete',
      prev: 'schedule'
    }
  };
  
  // Get current step from URL or default to intro
  const [currentStep, setCurrentStep] = useState('intro');
  
  // Store user selections for each step
  const [selections, setSelections] = useState({
    hdyhau: null,
    goals: null,
    schedule: null
  });
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const welcomeStep = queryParams.get('welcomeStep');
    if (welcomeStep && steps[welcomeStep]) {
      setCurrentStep(welcomeStep);
    }
  }, [location.search]);
  
  // Handle continue button click
  const handleContinue = () => {
    const nextStep = steps[currentStep]?.next;
    if (nextStep === 'complete') {
      // Navigate to home page when flow is complete
      navigate('/home');
    } else if (nextStep) {
      // Navigate to next step
      navigate(`/welcome?welcomeStep=${nextStep}`);
    }
  };
  
  // Handle back button click
  const handleBack = () => {
    const prevStep = steps[currentStep]?.prev;
    if (prevStep) {
      navigate(`/welcome?welcomeStep=${prevStep}`);
    }
  };
  
  // Track selected option for current step
  const handleOptionSelect = (option) => {
    setSelections({
      ...selections,
      [currentStep]: option
    });
  };
  
  // Render the current step component
  const StepComponent = steps[currentStep]?.component || IntroWelcome;
  
  return (
    <div className="min-h-screen ">
      <StepComponent 
        onContinue={handleContinue} 
        onBack={handleBack}
        selectedOption={selections[currentStep]}
        onSelectOption={handleOptionSelect}
      />
    </div>
  );
};

export default Welcome;