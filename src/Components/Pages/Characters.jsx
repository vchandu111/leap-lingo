import React from "react";
import charactersData from "../../data/characters.json";
import useSpeechSynthesis from "../../Hooks/useSpeechSynthesis";

const CharacterCard = ({ character, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all
      ${
        isActive
          ? "bg-blue-50 border-blue-400"
          : "bg-white hover:border-blue-200 hover:bg-blue-50 border-gray-200"
      }
    `}
  >
    <span className="text-4xl mb-2">{character.hindi}</span>
    <span className="text-gray-500 text-sm">{character.english}</span>
    <div className="h-1 w-12 bg-gray-200 mt-2 rounded-full"></div>
  </div>
);

const Characters = () => {
  const { speak, speakingId } = useSpeechSynthesis("hi-IN");

  const handleCharacterClick = (character) => {
    speak(character.hindi, character.english);
  };

  // Get all sections dynamically from the JSON data
  const sections = Object.entries(charactersData).map(([key, value]) => ({
    title: key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    characters: value,
  }));

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Let's learn Characters!
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Get to know the characters and sounds
        </p>

        

        <div className="grid grid-cols-5 gap-4">
          {sections.map((section, sectionIndex) => (
            <React.Fragment key={section.title}>
              {/* Add section title if it's not the first section */}
              {sectionIndex !== 0 && (
                <div className="col-span-5 text-2xl font-semibold text-center my-8">
                  {section.title}
                </div>
              )}

              {/* Characters in the section */}
              {section.characters.map((char) => (
                <CharacterCard
                  key={char.english}
                  character={char}
                  isActive={speakingId === char.english}
                  onClick={() => handleCharacterClick(char)}
                />
              ))}

              {/* Add empty cells to complete the row */}
              {Array(5 - (section.characters.length % 5))
                .fill(null)
                .map((_, index) => (
                  <div
                    key={`empty-${section.title}-${index}`}
                    className="aspect-square"
                  />
                ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
