import React from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'

import { Button } from './components/ui/button'

import { AnimatePresence } from 'framer-motion'
import FadeAnimation from './components/fade-animation'

const App: React.FC = () => {
    return (
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
    );
};

export default App;