import { useCallback, useState } from "react";

   const useSpeechSynthesis = (defaultLang = "fr-FR") => {
     const [speakingId, setSpeakingId] = useState(null);

     const speak = useCallback((text, id) => {
       // Cancel any ongoing speech
       window.speechSynthesis.cancel();

       // Create and configure utterance
       const utterance = new SpeechSynthesisUtterance(text);
       utterance.lang = defaultLang;

       // Get the voice for the specified language if available
       const voices = window.speechSynthesis.getVoices();
       const selectedVoice = voices.find((voice) => voice.lang.startsWith(defaultLang.split('-')[0]));
       if (selectedVoice) {
         utterance.voice = selectedVoice;
       }

       setSpeakingId(id);
       // Speak the text
       window.speechSynthesis.speak(utterance);

       utterance.onend = () => {
         setSpeakingId(null);
       };
     }, [defaultLang]);

     return { speak, speakingId };
   };

   export default useSpeechSynthesis;