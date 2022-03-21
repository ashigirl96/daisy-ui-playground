import type { NextPage } from 'next'
import Head from 'next/head'

const Card: NextPage = () => {
  return (
    <>
      <Head>
        <title>Card</title>
      </Head>
      <div className="mx-auto max-w-xl space-y-20">
        <div
          className="card w-96 bg-base-100 shadow-2xl mt-20"
          data-theme="cupcake"
        >
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              width={400}
              height={225}
            />
          </figure>
          <div className="card-body text-success">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="space-x-2">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div
          className="card w-96 bg-base-100 shadow-xl image-full"
          data-theme="dracula"
        >
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
