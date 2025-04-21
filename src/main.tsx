import React from 'react'
import './App.css'
import App from './App'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Button } from './components/ui/button'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/about"
          element={
            <>
              <Button>
                <Link to="/">Go to Home</Link>
              </Button>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
