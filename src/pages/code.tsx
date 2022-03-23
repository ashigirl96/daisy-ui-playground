import type { NextPage } from 'next'
import Head from 'next/head'

const Code: NextPage = () => {
  return (
    <>
      <Head>
        <title>code!</title>
      </Head>
      <div className="mockup-code">
        <pre data-prefix="1">
          <code>npm i daisyui</code>
        </pre>
        <pre data-prefix="2">
          <code>installing...</code>
        </pre>
        <pre data-prefix="3" className="bg-warning text-warning-content">
          <code>Error!</code>
        </pre>
      </div>
    </>
  )
}

export default Code
