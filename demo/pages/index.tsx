import Head from 'next/head'
import DataDisplayStats from '../components/DataDisplayStats'
import Feature from '../components/Feature'
import Header from '../components/Header'
import Hero from '../components/Hero/index'
import { Movies, IMovieData } from '../components/Movies'
import Slider from '../components/Slider'

export default function Home({ data }: { data?: IMovieData[] }): JSX.Element {
  return (
    <div className="">
      <Head>
        <title>ThePixarDB: The Best OTT Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Feature />
        <DataDisplayStats />
        <Slider />
        <Movies data={data} />
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
        (m: { id: string; title: string; posterUrl: string }) => {
          return { id: m.id, title: m.title, posterUrl: m.posterUrl }
        }
      ),
    },
  }
}
