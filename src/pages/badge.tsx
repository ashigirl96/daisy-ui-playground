import type { NextPage } from 'next'

const Badge: NextPage = () => {
  return (
    <>
      <div className="mx-auto pt-10 max-w-4xl flex justify-center items-center space-x-4">
        <div className="badge badge-accent">accent</div>
        <div className="badge badge-accent badge-outline">accent</div>
        <div className="badge badge-accent badge-sm">accent</div>
        <div className="badge badge-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          accent
        </div>
      </div>
      <div className="mx-auto pt-10 max-w-4xl flex justify-center items-center space-x-4">
        <button className="btn gap-4">
          Fav
          <div className="badge badge-ghost">+99</div>
        </button>
      </div>
    </>
  )
}

export default Badge
