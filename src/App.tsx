import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BoardFinder } from './components/BoardFinder';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BoardFinder />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

