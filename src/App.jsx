import { useState } from 'react'
import Navbar from './components/Navbar'
import Pratos from './components/Pratos'

const beneficios = [
  { icone: '⚡', titulo: 'Entrega rápida', texto: 'Seu pedido chega quentinho em poucos minutos.' },
  { icone: '🍕', titulo: 'Variedade', texto: 'Centenas de restaurantes para todos os gostos.' },
  { icone: '💳', titulo: 'Pagamento fácil', texto: 'Pix, cartão ou dinheiro, direto no app.' },
]

const depoimentos = [
  { nome: 'Mariana S.', texto: 'Pedi o jantar em 3 cliques e chegou antes do previsto!' },
  { nome: 'Carlos P.', texto: 'A variedade de restaurantes é incrível. Uso toda semana.' },
  { nome: 'Ana L.', texto: 'Os filtros por tipo de comida facilitam demais a escolha.' },
]

function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center text-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600')",
      }}
    >
      <div className="max-w-2xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Comida deliciosa, <span className="text-orange-400">na sua porta</span>
        </h1>
        <p className="text-lg mb-8">
          GourmetOn conecta você aos melhores restaurantes da cidade com entrega rápida e segura.
        </p>
        <a href="#contato" className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition">
          Baixar o app
        </a>
      </div>
    </section>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Por que o GourmetOn?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {beneficios.map((b) => (
          <div key={b.titulo} className="text-center p-6 rounded-xl bg-orange-50">
            <div className="text-5xl mb-3">{b.icone}</div>
            <h3 className="text-xl font-semibold mb-2">{b.titulo}</h3>
            <p className="text-gray-600">{b.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Funcionalidades() {
  return (
    <section id="funcionalidades" className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Busque por tipo de comida</h2>
        <p className="text-center text-gray-600 mb-8">Escolha uma categoria e veja os pratos disponíveis.</p>
        <Pratos />
      </div>
    </section>
  )
}

function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {depoimentos.map((d) => (
          <blockquote key={d.nome} className="p-6 rounded-xl shadow bg-white">
            <p className="italic text-gray-700 mb-4">"{d.texto}"</p>
            <footer className="font-semibold text-orange-500">— {d.nome}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

function Contato() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  function enviar(e) {
    e.preventDefault() 
    setEnviado(true)
    setEmail('')
  }

  return (
    <section id="contato" className="py-20 px-4 bg-orange-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-2">Receba novidades e cupons</h2>
      <p className="mb-8">Cadastre seu e-mail para nossas próximas campanhas.</p>
      {enviado ? (
        <p className="text-xl font-semibold">Obrigado! Você está na lista 🎉</p>
      ) : (
        <form onSubmit={enviar} className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="flex-1 px-4 py-3 rounded-full text-gray-800 bg-white outline-none"
          />
          <button className="bg-black hover:bg-gray-800 px-8 py-3 rounded-full font-semibold transition">
            Quero receber
          </button>
        </form>
      )}
    </section>
  )
}

function Rodape() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 text-center">
      <p className="text-xl font-bold text-orange-400 mb-2">🍽️ GourmetOn</p>
      <p>contato@gourmeton.com • (11) 99999-9999</p>
      <p className="my-3 space-x-4">
        <a href="#" className="hover:text-orange-400">Instagram</a>
        <a href="#" className="hover:text-orange-400">Twitter</a>
        <a href="#" className="hover:text-orange-400">Termos de uso</a>
      </p>
      <p className="text-sm text-gray-500">© 2026 GourmetOn. Projeto acadêmico FIAP.</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Funcionalidades />
      <Depoimentos />
      <Contato />
      <Rodape />
    </>
  )
}
