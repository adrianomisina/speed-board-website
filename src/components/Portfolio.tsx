import { useState } from 'react'
import { BoardCategory, boardsData } from '../data'
import { BoardCard } from './BoardCard'

const categories: BoardCategory[] = [
  'Shortboard - Performance',
  'Evolution',
  'Fun',
  'Fish',
  'Longboards'
]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<BoardCategory | null>(null)
  const visibleBoards = selectedCategory
    ? boardsData.filter(board => board.category === selectedCategory)
    : boardsData

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-3">
            Modelos
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">PORTFÓLIO SPD</h3>
          <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filtrar modelos por categoria">
          <button
            type="button"
            aria-pressed={selectedCategory === null}
            onClick={() => setSelectedCategory(null)}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${selectedCategory === null ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800 hover:text-white'}`}
          >
            Todos
          </button>
          {categories.map(category => (
            <button
              key={category}
              type="button"
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${selectedCategory === category ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800 hover:text-white'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBoards.map((board, index) => (
            <BoardCard key={board.id} board={board} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
