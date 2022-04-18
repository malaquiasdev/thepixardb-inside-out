import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Slider() {
  return (
    <section className="relative mx-auto mt-7 max-w-screen-2xl shadow-2xl">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508947/images/16_9/en_w1920_h1080.jpeg"
            alt="Turning Red"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508943/images/16_9/en_w1920_h1080.jpeg"
            alt="Luca"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508442/images/16_9/en_w3840_h2160.jpeg"
            alt="Soul"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508439/images/16_9/en_w1440_h810.jpeg"
            alt="Onward"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV301528/images/16_9/en_w3840_h2160.jpeg"
            alt="Toy Story 4"
          />
        </div>
      </Carousel>
    </section>
  )
}
