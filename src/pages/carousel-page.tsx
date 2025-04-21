import { Card, CardContent } from '../components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '../components/ui/carousel'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

interface ImageImportInterface {
  default: string
}
export function CarouselPage() {
  const images = import.meta.glob('../img/*.{png,jpg,jpeg,svg}', {
    eager: true
  })
  return (
    <>
      <Carousel className="w-full max-w-xs">
        <CarouselContent className="">
          {Object.values(images).map((image, index) => (
            <CarouselItem key={index}>
              <img
                key={index}
                src={(image as ImageImportInterface).default}
                alt={`Image ${index + 1}`}
                className="rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Link to="/categories">
        <div className="flex justify-center">
          <Button className="mt-3 flex-auto text-2xl py-8 uppercase font-serif tracking-widest">
            Menu
          </Button>
        </div>
      </Link>
    </>
  )
}
