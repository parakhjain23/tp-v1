import Head from "next/head";
import Link from "next/link";

export default function Home() {
  console.log('Home page');

  return (
    <div>
      <Head>
        <title>Next.js Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <div className="relative grid w-full bg-gray-900 h-96 lg:h-[32rem] place-items-center">
            <div className="flex flex-col items-center mx-auto text-center">
              <h1 className="text-4xl font-semibold text-white uppercase md:text-7xl bg-gradient-to-r from-custom-blue to-custom-green text-transparent bg-clip-text">Task Pro</h1>
              <p className="mt-6 text-lg leading-5 text-white">The best in town.</p>
              <a href="#about" className="mt-8 cursor-pointer animate-bounce">
                <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="27" cy="26" r="18" stroke="white" strokeWidth="2" />
                  <path d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>

          <svg className="fill-gray-900" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
          </svg>
        </section>

        <section className="container px-6 py-8 mx-auto lg:py-16" id="about">
          <div className="lg:flex lg:items-center lg:-mx-4">
            <div className="lg:w-1/2 lg:px-4">
              <h3 className="text-xl font-medium text-gray-300 md:text-2xl lg:text-3xl">We create awesome Product-spaces & Tasks.</h3>
              <p className="mt-6 text-gray-500 ">Effortlessly organize your projects and tasks with our intuitive application, offering customizable product spaces, task management, and ready-to-use templates for seamless collaboration.</p>
              <button className="flex items-center mt-8 -mx-2 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="mx-1 font-semibold">PLAY VIDEO</p>
              </button>
            </div>
            <div className="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
              <img className="object-cover w-full rounded-xl h-96" src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Video thumbnail" />
            </div>
          </div>
        </section>

        {/* Additional sections go here */}

      </main>

      <footer className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#" aria-label="Home">
              {/* <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo"/> */}
              TaskPro
            </a>

            <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">Let's create your first Product Space</p>

            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
              <Link href={'/login'}>
                <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:w-auto hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" aria-label="Get Started">Get started</button>
              </Link>
            </div>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">© Copyright 2021. All Rights Reserved.</p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Teams">Teams</a>

              <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Privacy">Privacy</a>

              <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Cookies">Cookies</a>
            </div>
          </div>
        </div>
      </footer>



    </div>
  );
}