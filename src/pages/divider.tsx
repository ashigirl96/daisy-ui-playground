import type { NextPage } from 'next'
import Head from 'next/head'

const Divider: NextPage = () => {
  return (
    <>
      <Head>
        <title>Divider!</title>
      </Head>
      <div className="max-w-2xl mt-20 mx-auto">
        <div className="flex w-full">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            content
          </div>
          <div className="divider divider-horizontal" />
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            content
          </div>
        </div>
      </div>
    </>
  )
}

export default Divider
