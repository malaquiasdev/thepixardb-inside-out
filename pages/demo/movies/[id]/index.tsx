import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Header from '../../../../components/Header/index'
import Footer from '../../../../components/Footer'

type IMovieDetail = {
  id: string
  title: string
  description: string
  descriptionShort: string
  genres: string
  runtime: number
  budget: number
  revenue: number
  releaseYear: number
  releaseDate: string
  rating: string
  background: string
}

export default function MoviesDetailPage({ data }: { data: IMovieDetail }) {
  return (
    <div className="relative">
      <Head>
        <title>ThePixarDB: The Best OTT Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="relative z-50">
        <div className="relative min-h-[calc(100vh-72px)]">
          <Image
            src="https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508947/images/16_9/clean_w2160_h1215.jpeg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex items-center space-x-3 md:space-x-5">
          <button className="flex items-center justify-center rounded bg-[#f9f9f9] py-2.5 px-6 text-xs text-black hover:bg-[#c6c6c6] md:text-base">
            <img
              src="/images/play-icon-black.svg"
              alt=""
              className="h-6 md:h-8"
            />
            <span className="font-medium uppercase tracking-wide">Play</span>
          </button>

          <button className="flex items-center justify-center rounded border border-[#f9f9f9] bg-black/30 py-2.5 px-6 text-xs text-[#f9f9f9] hover:bg-[#c6c6c6] md:text-base">
            <img
              src="/images/play-icon-white.svg"
              alt=""
              className="h-6 md:h-8"
            />
            <span className="font-medium uppercase tracking-wide">Trailer</span>
          </button>
          <p className="text-xs md:text-sm">
            {data.releaseYear} • {data.runtime} • {data.genres}{' '}
          </p>
          <h4 className="max-w-4xl text-sm md:text-lg">{data.description}</h4>
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Details
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Title</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.title}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.description}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Short Description
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.descriptionShort}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Genres</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.genres}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Runtime</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.runtime}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Budget</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.budget}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Release Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.releaseDate}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Rating</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.rating}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context: any): Promise<any> {
  const res = await fetch(
    `https://apithepixardb.malaquias.dev/api/v0/movies/${context.query.id}`
  )
  const movie = await res.json()
  return {
    props: {
      data: {
        id: movie.id,
        title: movie.title,
        description: movie.description,
        descriptionShort: movie.descriptionShort,
        genres: movie.genres.map((g: string) => g + ' '),
        runtime: `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`,
        budget: movie.budget,
        releaseYear: movie.releaseDate?.split('-')[0],
        releaseDate: movie.releaseDate,
        revenue: movie.revenue,
        rating: movie.rating.value,
        background: movie.images[1].path,
      },
    },
  }
}
