import type { NextPage } from 'next'
import Head from 'next/head'

const Link: NextPage = () => {
  return (
    <>
      <Head>
        <title>Link</title>
      </Head>
      <div className="hero min-h-screen">
        <div className="link link-primary hero-content">I'm a simple link</div>
      </div>
    </>
  )
}

export default Link
