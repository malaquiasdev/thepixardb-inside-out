import React from 'react'

type IMovieDetail = {
  id: string
  title: string
  description: string
  genres: string
  runtime: number
  budget: number
  revenue: number
  releaseYear: number
  rating: any
  images: any
}

export default function MoviesDetailPage({ data }: { data: IMovieDetail }) {
  return (
    <div>
      <p>{data.id}</p>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>{data.genres}</p>
      <p>{data.runtime}</p>
      <p>{data.budget}</p>
      <p>{data.releaseYear}</p>
      <p>{data.revenue}</p>
      <p>{data.rating.organ}</p>
      <p>{data.rating.value}</p>
      <p>{data.images[0].path}</p>
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
        rating: movie.rating,
        images: movie.images,
      },
    },
  }
}
