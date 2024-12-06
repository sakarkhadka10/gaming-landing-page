import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar/>
        <Hero />
      </main>
    </>
  );
};

export default App;
