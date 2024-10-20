import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { NavBar } from './components/menu/NavBar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
  </StrictMode>,
)