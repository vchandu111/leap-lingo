import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import unitData from "../../../../data/unit.json";
import Layout from "../Layout";
import { Volume2, Volume } from "lucide-react";

const Unit = () => {
  const { unitId } = useParams();
  const unit = unitData.units.find((unit) => unit.id === parseInt(unitId));
  const [speakingId, setSpeakingId] = useState(null);

  const speak = useCallback((text, id) => {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Create and configure utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    
    // Get French voice if available
    const voices = window.speechSynthesis.getVoices();
    const frenchVoice = voices.find(voice => voice.lang.startsWith('fr'));
    if (frenchVoice) {
      utterance.voice = frenchVoice;
    }

    setSpeakingId(id);
    // Speak the text
    window.speechSynthesis.speak(utterance);
    
    utterance.onend = () => {
      setSpeakingId(null);
    };
  }, []);

  const PhraseCard = ({ french, english, id }) => (
    <div className="p-3 w-fit rounded-lg shadow-md transition-colors">
      <div className="flex items-center gap-3">
        <button
          className={`text-blue-500 hover:text-blue-600 transition-transform ${speakingId === id ? 'scale-110' : ''}`}
          onClick={() => speak(french, id)}
        >
          {speakingId === id ? <Volume2 size={20} className="animate-pulse text-red-600" /> : <Volume className="text-red-600" size={20} />}
        </button>
        <span className="font-medium text-gray-900">{french}</span>
      </div>
      <div className="text-gray-600 mt-2">{english}</div>
    </div>
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h1 className="text-3xl font-bold mb-2">{unit.title}</h1>
          <p className="text-gray-600 text-lg">{unit.description}</p>
        </div>

        {unit.sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            {section.description && (
              <p className="text-gray-600 mb-4">{section.description}</p>
            )}

            {section.phrases && (
              <div className="space-y-8">
                {section.phrases.map((phrase, i) => (
                  <PhraseCard
                    key={i}
                    id={`phrase-${index}-${i}`}
                    french={phrase.French}
                    english={phrase.English}
                  />
                ))}
              </div>
            )}

            {section.examples && (
              <div className="space-y-8">
                {section.examples.map((example, i) => (
                  <PhraseCard
                    key={i}
                    id={`example-${index}-${i}`}
                    french={example.French}
                    english={example.English}
                  />
                ))}
              </div>
            )}

            {section.conjugation && (
              <div className="space-y-8">
                {section.conjugation.map((conj, i) => (
                  <PhraseCard
                    key={i}
                    id={`conj-${index}-${i}`}
                    french={`${conj.subject} ${conj.verb}`}
                    english={conj.English}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Unit;
