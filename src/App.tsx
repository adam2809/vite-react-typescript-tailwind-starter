import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import PageRouter from './Router'
import { Button } from './components/ui/button'

import { AnimatePresence } from 'framer-motion'
import FadeAnimation from './components/fade-animation'

const App: React.FC = () => {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <PageRouter />
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default App
