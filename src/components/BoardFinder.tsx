import { Search } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Board, boardsData, ExperienceLevel } from '../data'
import { BoardCard } from './BoardCard'

function includesVolume(board: Board, volume: number) {
  const [minimum, maximum] = board.dimensions.volume.match(/\d+(?:\.\d+)?/g)?.map(Number) ?? []
  return minimum !== undefined && maximum !== undefined && volume >= minimum && volume <= maximum
}

export function BoardFinder() {
  const [experience, setExperience] = useState<ExperienceLevel | ''>('')
  const [volume, setVolume] = useState('')
  const [results, setResults] = useState<Board[] | null>(null)

  const handleSearch = () => {
    if (!experience && !volume) {
      setResults(boardsData)
      return
    }

    const requestedVolume = Number(volume)
    const filtered = boardsData.filter(board => {
      const matchExp = experience ? board.suitableExperience.includes(experience) : true
      const matchVolume = volume ? includesVolume(board, requestedVolume) : true
      return matchExp && matchVolume
    })

    setResults(filtered)
  }

  return (
    <section id="finder" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">ENCONTRE SUA PRANCHA</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Selecione seu nível e o volume desejado para encontrar modelos adequados à sua evolução.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-900 rounded-2xl p-6 md:p-10 border border-zinc-800 shadow-2xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                Nível de Surf
              </label>
              <select
                className="bg-zinc-950 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 appearance-none"
                value={experience}
                onChange={e => setExperience(e.target.value as ExperienceLevel)}
              >
                <option value="">Todos os Níveis</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                Volume desejado (L)
              </label>
              <input
                type="number"
                min="1"
                step="0.5"
                placeholder="Ex.: 30"
                className="bg-zinc-950 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 appearance-none"
                value={volume}
                onChange={e => setVolume(e.target.value)}
              />
            </div>

            <button
              onClick={handleSearch}
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors h-12.5"
            >
              <Search size={20} />
              Buscar Modelos
            </button>
          </div>
        </div>

        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-8 border-b border-zinc-800 pb-4">
              Resultados ({results.length})
            </h3>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map((board, index) => (
                  <BoardCard key={board.id} board={board} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-zinc-900 rounded-xl border border-zinc-800">
                <p className="text-gray-400 text-lg">
                  Nenhum modelo específico encontrado para este filtro.
                </p>
                <p
                  className="text-emerald-400 mt-2 font-bold cursor-pointer"
                  onClick={() => {
                    setExperience('')
                    setVolume('')
                    setResults(null)
                  }}
                >
                  Limpar filtros
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
