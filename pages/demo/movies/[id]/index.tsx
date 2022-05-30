import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Header from '../../../../components/Header/index'
import Footer from '../../../../components/Footer'

type IMovieDetail = {
  id: string
  title: string
  description: string
  genres: string
  runtime: number
  budget: number
  revenue: number
  releaseYear: number
  rating: string
  images: any
}

export default function MoviesDetailPage({ data }: { data: IMovieDetail }) {
  return (
    <div>
      <Head>
        <title>ThePixarDB: The Best OTT Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="absolute -z-10">
          <div className="relative min-h-[calc(100vh-72px)]">
            <Image src={data.images} layout="fill" objectFit="cover" />
          </div>
        </div>
        <section className="relative z-50">
          <p>{data.id}</p>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>{data.genres}</p>
          <p>{data.runtime}</p>
          <p>{data.budget}</p>
          <p>{data.releaseYear}</p>
          <p>{data.revenue}</p>
          <p>{data.rating}</p>
          <p>{data.images}</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context: any): Promise<any> {
  const res = await fetch(
    `https://thepixardb.malaquias.dev/api/v0/movies/${context.query.id}`
  )
  const movie = await res.json()
  return {
    props: {
      data: {
        id: movie.id,
        title: movie.title,
        description: movie.description,
        genres: movie.genres.map((g: string) => g + ' '),
        runtime: `${Math.floor(movie.runtime / 60)} h ${
          movie.runtime % 60
        } m •`,
        budget: movie.budget,
        releaseYear: movie.releaseDate?.split('-')[0],
        revenue: movie.revenue,
        rating: movie.rating.value,
        images: movie.images[1].path,
      },
    },
  }
}
