import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { IMovieData } from '../index'

export default function Slider({ movies }: { movies?: IMovieData[] }) {
  return (
    <section className="relative mx-auto mt-7 max-w-screen-xl shadow-sm">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
      >
        {movies?.map((m: IMovieData) => {
          return (
            <div>
              <Image
                src={m.bannerUrl}
                width={1320}
                height={495}
                loading="lazy"
                objectFit="cover"
                className="rounded-lg"
                alt="Turning Red"
              />
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}
