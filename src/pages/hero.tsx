import type { NextPage } from 'next'

const Hero: NextPage = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200" data-theme="night">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row max-w-[60rem] gap-4">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Webサイトの中でも一番最初に目に付くエリアを「ヒーローエリア」と呼びます。
      近年、海外のWeb制作でトレンドになっているのが、このヒーローエリア全体に画像や動画を配置し、
      その上にメッセージやメニューなどを配置するという、大胆なデザイン手法です。2019/07/31
       */}
      <div
        className="hero min-h-screen"
        style={{
          // 背景
          backgroundImage:
            'url(https://api.lorem.space/image/fashion?w=1000&h=800);',
        }}
      >
        {/*背景をぼかしてる */}
        <div className="hero-overlay bg-opacity-60" />
        {/* heroの中身 */}
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
