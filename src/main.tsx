import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Button } from './components/ui/button'
import App from './App'

import { AnimatePresence } from 'framer-motion'
import FadeAnimation from './components/fade-animation'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
