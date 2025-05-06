import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'

import { Button } from './components/ui/button'

import FadeAnimation from './components/fade-animation'
import { CarouselPage } from './pages/carousel-page'
import { Card } from './components/ui/card'

const Router: React.FC = () => {
  const location = useLocation()
  return (
    <Card className="p-3">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <FadeAnimation>
              <CarouselPage />
            </FadeAnimation>
          }
        />
        <Route
          path="/categories"
          element={
            <FadeAnimation>
              <Link to="/">
                <Button className="text-2xl py-8 px-6 uppercase font-serif tracking-widest">
                  Home
                </Button>
              </Link>
            </FadeAnimation>
          }
        />
      </Routes>
    </Card>
  )
}

export default Router
