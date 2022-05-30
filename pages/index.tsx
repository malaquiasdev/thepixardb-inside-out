import Head from 'next/head'
import DataDisplayStats from '../components/Home/DataDisplayStats'
import Feature from '../components/Home/Feature'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Home/Hero/index'
import Galary from '../components/Home/Galary'
import DemoLink from '../components/Home/DemoLink'

export default function Home(): JSX.Element {
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
        <DemoLink />
      </main>
      <Footer />
    </div>
  )
}
