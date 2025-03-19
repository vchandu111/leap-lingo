import React from "react";
import { BookOpen, Lock, Trophy, Dumbbell, Book, Star } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const units = [
  {
    id: 1,
    title: "Unit 1",
    description: "Form basic sentences, greet people",
    color: "bg-gradient-to-r from-green-400 to-green-600"
  },
  {
    id: 2,
    title: "Unit 2", 
    description: "Learn common phrases and vocabulary",
    color: "bg-gradient-to-r from-blue-400 to-blue-600"
  },
  {
    id: 3,
    title: "Unit 3",
    description: "Master everyday conversations",
    color: "bg-gradient-to-r from-purple-400 to-purple-600"
  },
  {
    id: 4,
    title: "Unit 4",
    description: "Advanced grammar and expressions",
    color: "bg-gradient-to-r from-orange-400 to-orange-600"
  },
  {
    id: 5,
    title: "Unit 5",
    description: "Cultural context and idioms",
    color: "bg-gradient-to-r from-red-400 to-red-600"
  }
];

const MainContent = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-8">
      {units.map((unit, index) => (
        <div key={unit.id} className="space-y-4">
          <div className={`${unit.color} rounded-xl p-6 flex justify-between hover:shadow-lg transition-all duration-200`}>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{unit.title}</h2>
              <p className="text-white text-lg">{unit.description}</p>
            </div>
            <div onClick={()=>navigate(`/learn/guidebook/${unit.id}`)} className="flex justify-end">
              <button className="bg-transparent bg-opacity-20 text-white px-4 py-2 rounded-lg flex items-center gap-2 border">
                <BookOpen size={22} className="" />
                <span className="font-bold">GUIDEBOOK</span>
              </button>
            </div>
          </div>
          
          {index < units.length - 1 && (
            <div className="flex flex-col items-center gap-4 py-2">
              <div className="relative w-12 h-12 rounded-full bg-green-100 flex items-center justify-center ml-12 mt-20 cursor-pointer group">
                <div className="absolute -top-10 bg-green-500 text-white text-sm px-3 py-1 rounded pointer-events-none animate-bounce">
                  START
                </div>
                <Star 
                  onClick={()=>navigate("/lesson")} 
                  className="text-green-400 transform transition-transform duration-200 hover:scale-110" 
                  size={24}
                />
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center -ml-12">
                <Book className="text-gray-400" size={24} />
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ml-12">
                <Lock className="text-gray-400" size={24} />
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center -ml-12">
                <Book className="text-gray-400" size={24} />
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ml-12">
                <Trophy className="text-gray-400" size={24} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainContent;
