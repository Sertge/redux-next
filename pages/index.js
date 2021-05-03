import Head from 'next/head'

export default function Home() {
  return (
    <div className={"flex min-h-screen p-2 flex-col items-center align-middle"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col justify-center items-center">
        <h1 className={"bg-blue-100 leading-4 text-6xl h-10 "}>
          Welcome to <a className={"bg-blue-100 text-blue-800"} href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={"text-gray-800 bg-gray-300"}>
          Get started by editing{' '}
          <code className={"bg-red-200 font-bold h-10"}>pages/index.js</code>
        </p>

        <div className={"flex align-middle items-center flex-wrap max-w-3xl mt-12"}>
          <a href="https://nextjs.org/docs" className={"m-4 p-6 text-left border-gray-600 border-2 rounded-lg w-2/5"}>
            <h3 className={"mb-4 text-2xl"}>Documentation &rarr;</h3>
            <p className={"m-0 text-xl"}>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={"m-4 p-6 text-left border-gray-600 border-2 rounded-lg w-2/5"}>
            <h3 className={"mb-4 text-2xl"}>Learn &rarr;</h3>
            <p className={"m-0 text-xl"}>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={"m-4 p-6 text-left border-gray-600 border-2 rounded-lg w-2/5"}
          >
            <h3 className={"mb-4 text-2xl"}>Examples &rarr;</h3>
            <p className={"m-0 text-xl"}>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={"m-4 p-6 text-left border-gray-600 border-2 rounded-lg w-2/5"}
          >
            <h3 className={"mb-4 text-2xl"}>Deploy &rarr;</h3>
            <p className={"m-0 text-xl"}>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={"h-30 border-t-2"}>
        <a className={"flex items-center m-2"}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={"ml-2 h-4"} />
        </a>
      </footer>
    </div>
  )
}
