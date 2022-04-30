import React from 'react'

export default function Gallary() {
  return (
    <section className="overflow-hidden">
      <div className="lg:text-center">
        <h2 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-indigo-600 sm:text-4xl">
          Gallary
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
          A few examples of our content.
        </p>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508947/images/16_9/en_w1920_h1080.jpeg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508943/images/16_9/en_w1920_h1080.jpeg"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508442/images/16_9/en_w3840_h2160.jpeg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508439/images/16_9/en_w1440_h810.jpeg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV301528/images/16_9/en_w3840_h2160.jpeg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV260513/images/16_9/en_w3840_h2160.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
