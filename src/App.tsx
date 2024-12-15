import "./App.css";
import Card, { ICard } from "./components/Card";

function App() {
  const cards: ICard[] = [
    {
      data: {
        description: "This is the first card description",
        src: "https://via.placeholder.com/150",
        alt: "Placeholder Image",
        title: "Card 1",
      },
    },
    {
      data: {
        description: "This is the first card description",
        src: "https://via.placeholder.com/150",
        alt: "Placeholder Image",
        title: "Card 1",
      },
    },
    {
      data: {
        description: "This is the first card description",
        src: "https://via.placeholder.com/150",
        alt: "Placeholder Image",
        title: "Card 1",
      },
    },
    {
      data: {
        description: "This is the first card description",
        src: "https://via.placeholder.com/150",
        alt: "Placeholder Image",
        title: "Card 1",
      },
    },
    {
      data: {
        description: "This is the second card description",
        src: "https://via.placeholder.com/150",
        alt: "Placeholder Image",
        title: "Card 2",
      },
    },
  ];
  return (
    <main className="w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 z-10 flex items-center justify-between w-full h-16 px-4 bg-teal-800 shadow-md">
        <div className="text-xl font-bold text-white">My Dashboard</div>
        <nav>
          <ul className="flex space-x-4 text-white">
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
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="w-full h-[400px] bg-teal-400 flex flex-col items-center justify-center text-center text-white p-8"
      >
        <h1 className="text-4xl font-bold">Welcome to My Dashboard</h1>
        <p className="mt-2 text-lg">
          A clean and responsive UI for all your needs.
        </p>
        <button className="px-6 py-2 mt-4 text-white bg-teal-700 rounded hover:bg-teal-600">
          Get Started
        </button>
      </section>

      {/* Card Grid */}
      <section id="features" className="w-full py-8 bg-gray-100">
        <h2 className="mb-6 text-2xl font-semibold text-center">
          Explore Features
        </h2>
        {/* <div className="w-full h-32 bg-gray-300 rounded-lg animate-pulse"></div> */}

        <div className="grid w-full grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cards.map(({ data }, key) => (
            <Card key={key} data={data} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-center w-full h-16 text-sm text-white bg-teal-800">
        © 2024 My Dashboard. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
