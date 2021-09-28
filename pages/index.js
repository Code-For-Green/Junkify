import Head from 'next/head'
import Showcase from '../components/Showcase'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Junkify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Showcase></Showcase>
    </div>
  )
}
