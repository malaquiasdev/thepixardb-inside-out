import Head from 'next/head'

export default function Home(): JSX.Element {
  return (
    <div className="">
      <Head>
        <title>ThePixarDB App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ThePixarDB</h1>
    </div>
  )
}
