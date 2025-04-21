import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Button } from './components/ui/button'

import { AnimatePresence } from 'framer-motion'
import FadeAnimation from './components/fade-animation'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FadeAnimation>
                <Button>
                  <Link to="/categories">Go to Home</Link>
                </Button>
              </FadeAnimation>
            }
          />
          <Route
            path="/categories"
            element={
              <FadeAnimation>
                <Button>
                  <Link to="/">Go to Categories</Link>
                </Button>
              </FadeAnimation>
            }
          />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>
)
