import React from 'react';
import { Flame, Crown, CheckCircle, PartyPopper } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          Why you'll love learning with Leap Lingo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left column with two benefits */}
          <div className="space-y-12">
            {/* Benefit 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Flame className="text-orange-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-800">Effective and efficient</h3>
              </div>
              <p className="text-gray-600 pl-9">
                Our curriculum enhances your reading comprehension, listening abilities, and conversation skills through proven methods. 
                See our <a href="#" className="text-blue-500">research findings</a> for details!
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-800">Personalized learning</h3>
              </div>
              <p className="text-gray-600 pl-9">
                We blend advanced AI technology with linguistic expertise to create customized lessons that adapt to your unique skill level and learning rhythm.
              </p>
            </div>
          </div>
          
          {/* Center column with app image */}
          <div className="flex justify-center">
            <img 
              src="../../../public/assets/images/laptop.svg" 
              alt="Leap Lingo App" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right column with two benefits */}
          <div className="space-y-12">
            {/* Benefit 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Crown className="text-yellow-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-800">Stay motivated</h3>
              </div>
              <p className="text-gray-600 pl-9">
                Develop consistent language practice through our engaging gamification elements, daily challenges, and gentle nudges from Leap the frog, your personal learning companion.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <PartyPopper className="text-purple-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-800">Have fun with it!</h3>
              </div>
              <p className="text-gray-600 pl-9">
                Learning a language should be enjoyable, not tedious! Our colorful exercises and charming characters make daily practice something you'll genuinely look forward to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;