// App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import MonacoEditor from "@monaco-editor/react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { fetchAIResponse } from "./utils/api";

function App() {
  const [code, setCode] = useState("function sum() {\n  return 1 + 1;\n}");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  async function handleAIRequest(endpoint, inputType = "code") {
    setLoading(true);
    setSidebarOpen(false);
    const response = await fetchAIResponse(endpoint, inputType, code);
    setReview(response);
    setLoading(false);
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#0f172a] text-white" : "bg-gray-100 text-gray-900"} transition duration-300`}>
      <Navbar setSidebarOpen={setSidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
      {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} handleAIRequest={handleAIRequest} />}

      <main className="pt-24 px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Code Editor */}
        <motion.div className="bg-white/10 border border-cyan-500 rounded-xl p-4 shadow-lg backdrop-blur-lg"
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="text-xl font-semibold mb-2 text-cyan-400">👨‍💻 Your Code</h3>
          <MonacoEditor
            height="400px"
            language="javascript"
            theme={darkMode ? "vs-dark" : "light"}
            value={code}
            onChange={setCode}
            options={{ fontSize: 16, minimap: { enabled: false } }}
          />
          <button
            onClick={() => handleAIRequest("get-review")}
            className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition"
          >
            {loading ? "⏳ Analyzing..." : "🚀 Review Code"}
          </button>
        </motion.div>

        {/* Output / Review Box */}
        <motion.div className="bg-white/10 border border-cyan-500 rounded-xl p-4 shadow-lg backdrop-blur-lg overflow-auto"
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <h3 className="text-xl font-semibold mb-2 text-cyan-400">🤖 AI Suggestions</h3>
          <div className="prose max-w-none prose-invert text-sm sm:text-base">
            <Markdown rehypePlugins={[rehypeHighlight]}>
              {loading ? "Loading..." : review || "The AI will give suggestions here."}
            </Markdown>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;
