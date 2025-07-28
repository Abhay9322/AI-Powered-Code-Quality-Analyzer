// import axios from "axios";

// const API_URL = "http://localhost:3000/ai"; 
// const BASE_URL = "http://localhost:3000"; 

// export async function fetchAIResponse(endpoint, inputType, inputValue) {
//   try {
//     const textBasedEndpoints = ["shorten-review", "humanize-speech", "elongate-review"];

//     const isTextRequest = textBasedEndpoints.includes(endpoint);
//     const payload = isTextRequest 
//       ? { text: inputValue }
//       : { code: inputValue };

//     const response = await axios.post(`${API_URL}/${endpoint}`, payload);

//     if (response.data.audio) {
//       const audioUrl = `${BASE_URL}${response.data.audio}`;
//       const audio = new Audio(audioUrl);

//       audio.addEventListener('canplaythrough', () => {
//         audio.play().then(() => {
//           console.log("🔊 Playing Audio Response...");
//         }).catch((err) => {
//           console.error("Audio Play Error:", err);
//           alert("Tap to play audio!");
//         });
//       });

//       return "🔊 Playing Audio Response...";
//     }

//     return (
//       response.data.review || 
//       response.data.humanizedText || 
//       response.data.shortenedText || 
//       response.data.elongatedText || 
//       response.data.securityIssues || 
//       response.data.performanceSuggestions || 
//       "No response from AI"
//     );
//   } catch (error) {
//     console.error("API Error:", error.response?.data || error.message);
//     return "⚠️ Error fetching AI response";
//   }
// }



import axios from "axios";

// 👇 Use deployed backend URL
const API_URL = "https://ai-powered-code-quality-analyzer.onrender.com/ai";
const BASE_URL = "https://ai-powered-code-quality-analyzer.onrender.com";

export async function fetchAIResponse(endpoint, inputType, inputValue) {
  try {
    const textBasedEndpoints = ["shorten-review", "humanize-speech", "elongate-review"];

    const isTextRequest = textBasedEndpoints.includes(endpoint);
    const payload = isTextRequest
      ? { text: inputValue }
      : { code: inputValue };

    // 👇 This will now hit the deployed API
    const response = await axios.post(`${API_URL}/${endpoint}`, payload);

    // Handle audio response if available
    if (response.data.audio) {
      const audioUrl = `${BASE_URL}${response.data.audio}`;
      const audio = new Audio(audioUrl);

      audio.addEventListener('canplaythrough', () => {
        audio.play().then(() => {
          console.log("🔊 Playing Audio Response...");
        }).catch((err) => {
          console.error("Audio Play Error:", err);
          alert("Tap to play audio!");
        });
      });

      return "🔊 Playing Audio Response...";
    }

    // Handle other text responses
    return (
      response.data.review ||
      response.data.humanizedText ||
      response.data.shortenedText ||
      response.data.elongatedText ||
      response.data.securityIssues ||
      response.data.performanceSuggestions ||
      "No response from AI"
    );
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    return "⚠️ Error fetching AI response";
  }
}
