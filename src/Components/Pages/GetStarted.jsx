import React from 'react';
import languageData from '../../data/learn.json';
import { Navigate, useNavigate } from 'react-router-dom';

const LanguageSelector = () => {
    const navigate  = useNavigate()
  const handleLanguageSelect = (language) => {
    // Store the selected language in local storage
      localStorage.setItem('selectedLanguage', JSON.stringify(language));
      navigate('/welcome')
    
    // Optional: You might want to navigate to the next page or trigger some action
    // For example: navigate('/next-step')
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">I want to learn...</h1>
      
      <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 lg:grid-cols-5 gap-8">
        {languageData.map((language) => (
          <div 
            key={language.language_code} 
            onClick={() => handleLanguageSelect(language)}
            className="bg-white rounded-lg py-14 shadow-sm border border-gray-200 flex flex-col items-center cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-12 mb-4 flex items-center justify-center">
              {/* Since we can't use external images, we'll use a placeholder */}
              <img 
                src={language.image_url} 
                alt={`${language.language} flag`}
                className="w-full h-full object-contain"
              />
            </div>
            
            <h3 className="font-semibold text-xl text-center text-gray-800">{language.language}</h3>
            <p className="text-gray-500 text-center">{language.num_learners_string}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;