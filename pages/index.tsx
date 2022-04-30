import Head from 'next/head'
import DataDisplayStats from '../components/Home/DataDisplayStats'
import Feature from '../components/Home/Feature'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Home/Hero/index'
import { Movies, IMovieData } from '../components/Movies'
import Slider from '../components/Home/Slider'
import Galary from '../components/Home/Galary'

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
        <Galary />
        <Movies data={data} title="Movies" />
        <Footer />
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
