import './Content.css'
import { Routes, Route } from 'react-router-dom'

import { About } from '../../views/examples/About'
import { Home } from '../../views/examples/Home'
import { Params } from '../../views/examples/Params'
import { NotFound } from '../../views/examples/NotFound'
export const Content = props => (
  <main className="Content">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/param/:id' element={<Params />} />
      <Route path='/notfound' element={<NotFound />} />
    </Routes>
  </main>
)