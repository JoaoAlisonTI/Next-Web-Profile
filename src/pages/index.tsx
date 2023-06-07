import Head from 'next/head'
import HomePage from './HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Site - João Alison</title>
        <meta name="description" content="Come see my website developed with Next.js 👨🏽‍💻" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  )
}
