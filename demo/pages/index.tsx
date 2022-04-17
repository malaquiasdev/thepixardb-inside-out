import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

export default function Home(): NextPage {
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