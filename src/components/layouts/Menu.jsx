import './Menu.css'

import { Link } from 'react-router-dom'
export const Menu = props => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/param/1">Params #01</Link>
        </li>
        <li>
          <Link to="/param/legal">Params #02</Link>
        </li>
        <li>
          <Link to="about">Sobre</Link>
        </li>
        <li>
          <Link to="notfound">404</Link>
        </li>
      </ul>
    </nav>
  </aside>
)