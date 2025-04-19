import { useState } from "react";

const skills = [
  "C++ Multithreading",
  "Thread Synchronization",
  "Promise/Future",
  "Unity Raycasting",
  "Enemy AI & Line of Sight",
  "Gun Pickup Systems",
  "Inventory UI & Sorting",
  "wxWidgets UI Design",
  "Expression Parsing",
  "MATLAB Simulation",
  "Probability Modeling",
  "Data Visualization",
  "VHDL Testbenches",
  "Digital Logic Design",
  "Memory Management",
  "Thread-safe Communication"
];

const journal = [
  {
    title: "C++ Multithreaded Work Processor",
    summary:
      "Created joinable and detached threads that communicate with printer threads using std::promise and std::future. Learned safe concurrency, synchronization, and thread lifecycle management.",
    skills: ["C++", "Threads", "Promise", "Future", "Mutex", "Condition Variable"]
  },
  {
    title: "Unity Enemy AI with Line of Sight",
    summary:
      "Used raycasting, Vector3 angles, and field-of-view logic for stealth-based enemy detection. Added vision cones and detection zones.",
    skills: ["Unity", "C#", "Raycasting", "AI"]
  },
  {
    title: "Gun Pickup & Inventory UI",
    summary:
      "Built systems to pick up weapons, store them in inventory, drop/sort them via UI. Supported drag-and-drop and stat-based sorting.",
    skills: ["Unity", "C#", "UI", "Inventory Systems"]
  },
  {
    title: "wxWidgets Calculator",
    summary:
      "Created a calculator app with full GUI using wxWidgets. Parsed expressions, handled events with an event table, and included sin/cos/tan unary support.",
    skills: ["C++", "wxWidgets", "Event Handling"]
  },
  {
    title: "MATLAB MMO Probability Simulator",
    summary:
      "Simulated drop rates and bug occurrence in an MMO using MATLAB. Focused on interpreting rand vs randi, loops, and probabilistic modeling.",
    skills: ["MATLAB", "Probability", "Simulation"]
  },
  {
    title: "Data Visualization with Character Customization Survey",
    summary:
      "Plotted bar graphs, pie charts, and histograms using MATLAB to visualize preferences from a character customization survey.",
    skills: ["MATLAB", "Data Visualization"]
  },
  {
    title: "VHDL Circuit Design & Test Benches",
    summary:
      "Created 4-to-1 MUX, AND/OR/XOR gates, D-latches, and full adders in VHDL. Built test benches to verify functionality using Xilinx tools.",
    skills: ["VHDL", "Test Benches", "Digital Logic"]
  },
  {
    title: "Brick Breaker Game Mechanics",
    summary:
      "Implemented core game mechanics like paddle collision, ball response, and win/lose conditions. Integrated basic text rendering and game flow.",
    skills: ["Unity", "2D Physics", "Game Mechanics"]
  },
  {
    title: "Arcade Minigames in Street Wars",
    summary:
      "Added dungeon escape minigames within a larger multiplayer game. Connected 2D arcade logic into main open-world mechanics.",
    skills: ["Unity", "Minigame Integration"]
  }
];

export default function DeveloperPortfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">🧙 Sheldon Sharp's Developer Realm</h1>

      <section className="mb-8">
        <h2 className="text-2xl mb-2">🎓 Skills Unlocked</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className="bg-purple-800 px-3 py-1 rounded-full text-center text-sm shadow-md hover:bg-purple-600"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-4">📘 Developer Journal Entries</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {journal.map((entry, i) => (
            <div
              key={i}
              className="bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer rounded-xl p-4 shadow-lg"
              onClick={() => setSelected(i)}
            >
              <h3 className="text-xl font-semibold mb-2">🗂️ {entry.title}</h3>
              <p className="text-sm text-zinc-300">{entry.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {selected !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-zinc-900 rounded-xl p-6 max-w-lg text-left relative">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setSelected(null)}
            >
              ❌
            </button>
            <h3 className="text-2xl mb-2">{journal[selected].title}</h3>
            <p className="mb-4">{journal[selected].summary}</p>
            <div>
              <strong className="text-purple-400">Skills Gained:</strong>
              <ul className="list-disc list-inside text-sm mt-1">
                {journal[selected].skills.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
