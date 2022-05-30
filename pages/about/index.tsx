import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>ThePixarDB: The Best OTT Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative overflow-hidden">
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">About us</span>
          </h1>
        </div>
        <div className="my-10 mx-auto flex max-w-[1900px] flex-col space-y-2 px-8">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Who we are
          </h2>
          <p>
            We are an open-source metadata aggregation engine for the best movie
            componay of the world. We are fans of the Pixar Animation Studios.
          </p>
          <p>
            Our main goal is to have the best core metadata information to
            provide a universal view, along with ingesting individual data from
            others providers to enrich our dataset and be an unique API and one
            click to go.
          </p>
          <p>We have some benefits like:</p>
          <ul
            role="list"
            className="list-disc space-y-3 pl-5 marker:text-sky-400"
          >
            <li>
              Strict guidelines to ensure consistently high quality data across
              datasets, categories and regions.
            </li>
            <li>Our data is multi language.</li>
            <li>
              The datasets contains movies information like rating, runtime,
              cast and crew. Celebrity information like primary Name, gender,
              birthplace, and awards and pictures.
            </li>
          </ul>
        </div>
        <div className="my-10 mx-auto flex max-w-[1900px] flex-col space-y-2 px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            How much information do we have here?
          </h2>
          <p>Working in progress...</p>
        </div>
        <div className="my-10 mx-auto flex max-w-[1900px] flex-col space-y-2 px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            The API is missing stuff 😔
          </h2>
          <p>
            We know! Feel free to contribute to open issues on{' '}
            <a
              className="group"
              href="https://github.com/malaquiasdev/thepixardb"
            >
              <span className="span">GitHub.</span>
            </a>
          </p>
          <p>Have ideas for new features? Open a issue too!!</p>
        </div>
        <div className="my-10 mx-auto flex max-w-[1900px] flex-col space-y-2 px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            Legal Notice
          </h2>
          <p>
            We do not claim ownership of any of the images or data in the API.
            We comply with the Digital Millennium Copyright Act (DMCA) and
            expeditiously remove infringing content when properly notified.
          </p>
          <p>
            Any data and/or images you upload you expressly grant us a license
            to use. You are prohibited from using the images and/or data in
            connection with libelous, defamatory, obscene, pornographic, abusive
            or otherwise offensive content.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
