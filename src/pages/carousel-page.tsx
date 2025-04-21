import { Card, CardContent } from '../components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../components/ui/carousel'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

export function CarouselPage() {
  return (
    <>
        <Carousel className="w-full max-w-xs">
        <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
                <Card>
                    <CardContent className="flex items-center justify-center p-6">
                        <div>
                            <span className="text-4xl font-semibold">{index + 1}</span>
                        </div>
                    </CardContent>
                </Card>
            </CarouselItem>
            ))}
        </CarouselContent>
        </Carousel>
        <Link to="/categories">
        <div className='flex justify-center'>
          <Button className='mt-1 flex-auto'>
            Zobacz więcej
          </Button>
        </div>
        </Link>
    </>
  )
}
