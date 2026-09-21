import { boardsData } from '../data';
import { BoardCard } from './BoardCard';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-3">Modelos</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">PORTFÓLIO SPD</h3>
          <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardsData.map((board, index) => (
            <BoardCard key={board.id} board={board} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
