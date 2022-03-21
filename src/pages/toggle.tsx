import type { NextPage } from 'next'
import Head from 'next/head'

const Toggle: NextPage = () => {
  return (
    <>
      <Head>
        <title>Toggle</title>
      </Head>
      <div className="mt-40 mx-auto max-w-2xl">
        <div className="w-fit">
          <div className="form-control">
            <label className="label cursor-pointer space-x-4">
              <span className="label-text">Remember me</span>
              <input type="checkbox" className="toggle" />
            </label>
          </div>
        </div>

        <input type="checkbox" className="toggle" disabled checked />
      </div>
    </>
  )
}

export default Toggle
