import { useState, useEffect } from 'react'

const categorias = ['Chicken', 'Beef', 'Seafood', 'Dessert', 'Pasta']

export default function Pratos() {
  const [categoria, setCategoria] = useState('Chicken')
  const [pratos, setPratos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)


  useEffect(() => {
    let cancelado = false

    async function buscarPratos() {
      setCarregando(true)
      setErro(null)
      try {
        const resposta = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
        )
        if (!resposta.ok) throw new Error('Falha na requisição')
        const dados = await resposta.json() 
        if (!cancelado) setPratos((dados.meals || []).slice(0, 8))
      } catch (e) {
        if (!cancelado) setErro('Não foi possível carregar os pratos.')
      } finally {
        if (!cancelado) setCarregando(false)
      }
    }

    buscarPratos()
    return () => {
      cancelado = true
    }
  }, [categoria])

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categorias.map((c) => (
          <button
            key={c}
            onClick={() => setCategoria(c)}
            className={`px-4 py-2 rounded-full transition ${
              c === categoria
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 hover:bg-orange-100'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {carregando && <p className="text-center text-gray-500">Carregando...</p>}
      {erro && <p className="text-center text-red-500">{erro}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {!carregando &&
          pratos.map((p) => (
            <div key={p.idMeal} className="bg-white rounded-xl shadow overflow-hidden hover:scale-105 transition">
              <img src={p.strMealThumb} alt={p.strMeal} className="w-full h-40 object-cover" />
              <p className="p-3 font-semibold text-gray-800">{p.strMeal}</p>
            </div>
          ))}
      </div>
    </div>
  )
}
