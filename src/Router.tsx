import React from 'react'
import {
  Link,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'

import { Button } from './components/ui/button'

import FadeAnimation from './components/fade-animation'
import { CarouselPage } from './pages/carousel-page'

const Router: React.FC = () => {
  const location = useLocation()
  return (
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
              <Button>Go to Categories</Button>
            </Link>
          </FadeAnimation>
        }
      />
    </Routes>
  )
}

export default Router
