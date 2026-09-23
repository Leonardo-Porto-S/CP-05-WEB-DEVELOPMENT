import { useState, useEffect } from 'react'

const links = [
  { href: '#sobre', texto: 'Sobre' },
  { href: '#funcionalidades', texto: 'Funcionalidades' },
  { href: '#depoimentos', texto: 'Depoimentos' },
  { href: '#contato', texto: 'Contato' },
]

export default function Navbar() {
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll) 
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        rolou ? 'bg-black/90 shadow-lg' : 'bg-black/30'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="#inicio" className="text-2xl font-bold text-orange-400">
          🍽️ GourmetOn
        </a>
        <ul className="hidden md:flex gap-6 text-white">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-orange-400 transition">
                {l.texto}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
