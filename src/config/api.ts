// Google API Configuration
export const GOOGLE_API_KEY = "AIzaSyBHVT-1cRaEC5ye7nFACwSflo10n9G4KQY";

// Google Maps Configuration
export const GOOGLE_MAPS_CONFIG = {
  apiKey: GOOGLE_API_KEY,
  libraries: ['places', 'geometry', 'drawing'],
};

// Google Gemini AI Configuration
export const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GOOGLE_API_KEY}`;

// API Helper Functions
export async function askGemini(question: string): Promise<string> {
  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a helpful travel assistant for Just Roam, a travel planning platform. Answer this travel-related question: ${question}`
          }]
        }]
      })
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Sorry, I am unable to answer that question right now. Please try again later.';
  }
}

// Load Google Maps Script
export function loadGoogleMaps(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window.google !== 'undefined') {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places,geometry`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
