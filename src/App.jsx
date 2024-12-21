import Faq from "./components/Faq";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
    </main>
  );
};

export default App;
