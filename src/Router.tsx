import React from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'

import { Button } from './components/ui/button'

import { AnimatePresence } from 'framer-motion'
import FadeAnimation from './components/fade-animation'

const PageRouter: React.FC = () => {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <FadeAnimation>
              <Link to="/categories">
                <Button>
                  Go to Home
                </Button>
              </Link>
              </FadeAnimation>
            }
          />
          <Route
            path="/categories"
            element={
              <FadeAnimation>
                <Link to="/">
                  <Button>
                    Go to Categories
                  </Button>
                </Link>
              </FadeAnimation>
            }
          />
        </Routes>
    );
};

export default PageRouter;