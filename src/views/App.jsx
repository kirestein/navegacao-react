import './App.css'
import { Menu } from '../components/layouts/Menu'
import { Content } from '../components/layouts/Content'
import { 
  BrowserRouter as Router,
} from 'react-router-dom'
export const App = props => (
  <div className="App">
    <Router>
      <Menu />
      <Content />
    </Router>
  </div>
)