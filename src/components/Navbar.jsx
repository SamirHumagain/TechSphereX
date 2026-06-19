import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src="/logo.jpeg" alt="TechSphereX" />
          <span>TechSphereX</span>
        </Link>

        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {[
            { to: '/', label: 'HOME' },
            { to: '/about', label: 'ABOUT' },
            { to: '/services', label: 'SERVICES' },
            { to: '/products', label: 'PRODUCTS' },
            { to: '/careers', label: 'CAREERS' },
            { to: '/contact', label: 'CONTACT' },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
