import React from "react";
import {
  FaTimes, FaMicrophone, FaVolumeUp, FaCompress,
  FaExpand, FaShieldAlt, FaBolt, FaCode
} from "react-icons/fa";

const Sidebar = ({ setSidebarOpen, handleAIRequest }) => {
  const actions = [
    { icon: <FaCode />, label: "Code Review", color: "from-purple-500 to-pink-500", type: "code-review" },
    { icon: <FaMicrophone />, label: "Speak", color: "from-blue-500 to-indigo-700", type: "speak-review" },
    { icon: <FaVolumeUp />, label: "Humanize", color: "from-indigo-500 to-purple-600", type: "humanize-speech" },
    { icon: <FaCompress />, label: "Shorten", color: "from-orange-500 to-red-500", type: "shorten-review" },
    { icon: <FaExpand />, label: "Expand", color: "from-green-500 to-teal-600", type: "elongate-review" },
    { icon: <FaShieldAlt />, label: "Security Check", color: "from-red-600 to-rose-500", type: "security-check" },
    { icon: <FaBolt />, label: "Performance Boost", color: "from-yellow-500 to-green-500", type: "performance-boost" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-72 z-50 p-6 bg-[#0f0f0f]/90 backdrop-blur-2xl border-r border-cyan-500/30 shadow-[inset_0_0_10px_#00f2ff40] rounded-r-3xl animate-slideIn overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={() => setSidebarOpen(false)}
        className="absolute top-4 right-4 text-2xl text-white hover:text-red-400 transition-all duration-300"
        aria-label="Close Sidebar"
      >
        <FaTimes />
      </button>

      {/* Title */}
      <h2 className="text-3xl font-extrabold text-center text-cyan-400 mb-10 tracking-wide drop-shadow-glow">
        ⚙️ AI Toolbox
      </h2>

      {/* AI Feature Buttons */}
      <div className="flex flex-col gap-4">
        {actions.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleAIRequest(btn.type, "text")}
            className={`bg-gradient-to-r ${btn.color} py-3 px-4 rounded-2xl flex items-center gap-4 text-white text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00f2ff80]`}
          >
            <span className="text-xl">{btn.icon}</span>
            <span>{btn.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
