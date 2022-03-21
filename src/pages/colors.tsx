import type { NextPage } from 'next'
import Head from 'next/head'

const Colors: NextPage = () => {
  return (
    <div>
      <Head>Colors</Head>
      <div>
        <div>
          <h1>Primary</h1>
          <div className="text-primary">Hello</div>
          <div className="text-primary-focus">Hello</div>
          <div className="text-primary-content">Hello</div>
        </div>
        <div className="divider">OR</div>
        <div>
          <h1>Secondary</h1>
          <div className="text-secondary">Hello</div>
          <div className="text-secondary-focus">Hello</div>
          <div className="text-secondary-content">Hello</div>
        </div>
        <div className="divider">OR</div>
        <div>
          <h1>Accent</h1>
          <div className="text-accent">Hello</div>
          <div className="text-accent-focus">Hello</div>
          <div className="text-accent-content">Hello</div>
        </div>
        <div className="divider">OR</div>
        <div>
          <h1>Neutral</h1>
          <div className="text-neutral">Hello</div>
          <div className="text-neutral-focus">Hello</div>
          <div className="text-neutral-content">Hello</div>
        </div>
        <div className="divider">OR</div>
        <div>
          <h1>Other...</h1>
          <div className="text-info">Hello</div>
          <p className="bg-error text-info">Hello</p>
          <div className="text-success">Hello</div>
          <div className="bg-info text-success-content">Hello</div>
        </div>

        <button className="btn btn-primary">Button</button>
        <button className="btn btn-primary-focus">Button</button>
        <button className="btn btn-primary-content">Button</button>
        <input type="checkbox" className="checkbox checkbox-secondary" />
        <button className="btn from-accent to-primary-content">Button</button>
      </div>
    </div>
  )
}

export default Colors
