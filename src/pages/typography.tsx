import type { NextPage } from 'next'
import MarkdownSample from '../components/MarkdownSample.mdx'

const Typography: NextPage = () => {
  return (
    <>
      <article>
        <h1 className="sr-only">Tailwind CSS Typography</h1>
        <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto">
          <MarkdownSample />
        </div>
      </article>{' '}
    </>
  )
}

export default Typography
