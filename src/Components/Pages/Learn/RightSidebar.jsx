import React from 'react';
import { Zap, Edit2 } from 'lucide-react';

// RightSidebar Component
const RightSidebar = () => {
  return (
    <div className="w-80 flex flex-col gap-4">
      <DailyQuests />
      <XpProgress />
      <ProfilePrompt />
    </div>
  );
};


// Daily Quests Component
const DailyQuests = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Daily Quests</h3>
      <div className="flex items-center gap-4">
        <Zap className="text-yellow-400 w-8 h-8" />
        <div className="flex-1">
          <p className="font-medium text-gray-700">Earn 10 XP</p>
          <div className="bg-gray-200 h-2 rounded-full w-full mt-1">
            <div className="bg-gray-300 h-full rounded-full w-0"></div>
          </div>
          <p className="text-xs text-gray-400 mt-1">0 / 10</p>
        </div>
        <div className="w-10 h-10 bg-yellow-100 rounded p-1">
          <div className="w-full h-full bg-yellow-500 flex items-center justify-center rounded-sm">
            <div className="w-6 h-2 bg-yellow-700 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// XP Progress Component
const XpProgress = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-700">XP Progress</h3>
        <button className="text-blue-400 font-medium text-sm flex items-center gap-1">
          <Edit2 size={14} />
          EDIT GOAL
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-yellow-100 p-1 rounded">
          <div className="w-full h-full bg-yellow-500 rounded-sm flex items-center justify-center">
            <div className="w-8 h-2 bg-yellow-700 rounded-sm"></div>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-medium text-gray-700">Daily goal</p>
          <div className="bg-gray-200 h-2 rounded-full w-full mt-1">
            <div className="bg-gray-300 h-full rounded-full w-0"></div>
          </div>
          <div className="flex justify-end">
            <p className="text-xs text-gray-400 mt-1">0/10 XP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Prompt Component
const ProfilePrompt = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-bold text-gray-700 mb-2">Create a profile to save your progress!</h3>
      <div className="flex flex-col gap-2 mt-4">
        <button className="bg-green-500 text-white py-3 px-4 rounded-xl font-bold">
          CREATE A PROFILE
        </button>
        <button className="bg-blue-400 text-white py-3 px-4 rounded-xl font-bold">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;