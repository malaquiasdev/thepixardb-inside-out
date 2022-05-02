import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Slider from '../../components/Demo/Slider'
import { Movies, IMovieData } from '../../components/Demo'

export default function DemoPage({ data }: { data?: IMovieData[] }) {
  return (
    <div>
      <Head>
        <title>ThePixarDB: The Best OTT Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Slider movies={data?.slice(0, 3)} />
        <Movies data={data} title="Movies" />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://thepixardb.malaquias.dev/api/v0/movies')
  const movies = await res.json()
  return {
    props: {
      data: movies.map(
        (m: {
          id: string
          title: string
          posterUrl: string
          bannerUrl: string
        }) => {
          return {
            id: m.id,
            title: m.title,
            posterUrl: m.posterUrl,
            bannerUrl: m.bannerUrl,
          }
        }
      ),
    },
  }
}
