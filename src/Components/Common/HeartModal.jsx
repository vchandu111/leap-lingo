import React from "react";
import noHeartImage from "../../assets/images/noHeart.png";

const HeartModal = ({ onRefill }) => {

  const handleRefill = () => {
    onRefill();
    window.location.reload(); // Go back to previous route
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1c1b1f] p-8 rounded-2xl flex flex-col items-center max-w-md w-full mx-4">
        <img src={noHeartImage} alt="Mascot" className="w-24 h-24 mb-4" />
        <h2 className="text-white text-2xl font-bold text-center mb-8">
          You ran out of hearts. Have a free refill on us to keep going!
        </h2>
        <button
          onClick={handleRefill}
          className="w-full bg-[#84d8ff] text-[#1c1b1f] font-bold py-4 rounded-xl text-lg hover:bg-[#6bc4eb] transition-colors"
        >
          REFILL FOR FREE
        </button>
      </div>
    </div>
  );
};

export default HeartModal;
