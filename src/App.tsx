import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { cards } from "./data/Card";
import { MdOutlineDarkMode, MdSunny } from "react-icons/md";

function App() {
  // Track dark mode state in localStorage or useState
  const [darkMode, setDarkMode] = useState(false);

  // Effect to apply dark mode class to the body when darkMode state changes
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle function for dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <main className="w-full bg-background dark:bg-darkBackground">
      {/* Header */}
      <header className="fixed flex items-center justify-between w-full h-16 px-4 shadow-md bg-primary dark:bg-darkPrimary dark:text-darkText text-textSecondary ">
        <div className="text-xl font-bold">My Dashboard</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className="p-2 transition duration-500 ease-in-out transform rounded-full bg-cyan-200 text-textLight dark:bg-darkBackground dark:text-text"
              >
                <div
                  className={`transition-transform transform duration-300 ease-in-out ${
                    darkMode ? "translate-y-2 " : "-translate-y-2"
                  }`}
                >
                  {darkMode ? (
                    <MdOutlineDarkMode className="text-yellow-500" />
                  ) : (
                    <MdSunny className="text-yellow-500" />
                  )}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="w-full h-[400px] bg-secondary  dark:bg-gradient-to-t dark:from-onDarkSurface dark:to-darkBackground flex flex-col items-center justify-center text-center text-textSecondary dark:text-darkText shadow-md pt-8 px-4"
      >
        <h1 className="text-4xl font-bold tracking-wide dark:text-darkPrimary">
          Welcome to My Dashboard
        </h1>
        <p className="mt-2 text-lg dark:text-darkTextSecondary">
          A clean and responsive UI for all your needs.
        </p>
        <button className="px-6 py-2 mt-4 text-white transition-transform duration-300 rounded bg-primary dark:bg-darkPrimary hover:scale-105 hover:shadow-lg hover:bg-accent dark:hover:bg-darkAccent">
          Get Started
        </button>
      </section>

      {/* Card Grid */}
      <section
        id="features"
        className="w-full py-8 shadow-md bg-surface dark:bg-gradient-to-t dark:from-onDarkSurface dark:to-darkBackground dark:text-darkText"
      >
        <h2 className="mb-6 text-2xl font-semibold text-center text-text dark:text-darkText">
          Explore Features
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cards.map(({ data }, key) => (
            <Card key={key} data={data} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-center w-full h-16 text-sm text-textSecondary bg-primary dark:bg-darkPrimary dark:text-darkText">
        © 2024 My Dashboard. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
