
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

export const AIAdvisor: React.FC = () => {
  const [research, setResearch] = useState('');
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getAdvice = async () => {
    if (!research.trim()) return;
    setLoading(true);
    setAnalysis(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am a researcher at Sanford Burnham Prebys interested in entrepreneurship. My field is: ${research}. Give me 3 concise biotech startup ideas or commercialization pathways related to this field. Be professional and visionary.`,
        config: {
          systemInstruction: "You are the AI Entrepreneurship Advisor for the SBP-EC club. You help elite biomedical scientists think about commercialization.",
        }
      });
      setAnalysis(response.text || "Could not generate ideas. Please try again.");
    } catch (error) {
      console.error(error);
      setAnalysis("Error connecting to the AI Advisor. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#8B0000]/10 max-w-3xl mx-auto mt-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#8B0000] rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#8B0000]">AI Bio-Innovator Lab</h3>
      </div>
      
      <p className="text-gray-600 mb-6 italic">
        Enter your research focus area below to get AI-powered commercialization ideas.
      </p>

      <div className="space-y-4">
        <textarea
          value={research}
          onChange={(e) => setResearch(e.target.value)}
          placeholder="e.g., Cancer immunotherapy, Autophagy in neurodegeneration..."
          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none min-h-[100px] transition-all"
        />
        <button
          onClick={getAdvice}
          disabled={loading || !research.trim()}
          className="w-full bg-[#8B0000] text-white py-4 rounded-xl font-bold hover:bg-[#660000] disabled:opacity-50 transition-colors shadow-lg shadow-[#8B0000]/20 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Thinking...
            </>
          ) : 'Generate Start-up Ideas'}
        </button>
      </div>

      {analysis && (
        <div className="mt-8 p-6 bg-[#FAFAF5] rounded-xl border border-[#8B0000]/5 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="prose prose-sm max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
            {analysis}
          </div>
        </div>
      )}
    </div>
  );
};
