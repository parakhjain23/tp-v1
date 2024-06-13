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

      <header className="bg-indigo-500">
        <nav className="container relative flex items-center justify-between px-6 py-8 mx-auto text-white">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </a>

          <button className="md:hidden">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </span>
          </button>

          <div className="hidden md:flex md:items-center">
            <a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300">Home</a>
            <a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300"> About</a>
            <a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300"> Portfolio</a>
            <a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300"> Contact</a>
            <Link href="/login">
              <div className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark ml-2"> Login</div>
            </Link>
            <Link href="/signup">
              <div className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark ml-2"> Sign Up</div>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section>
          <div className="relative grid w-full bg-indigo-500 h-96 lg:h-[32rem] place-items-center">
            <div className="flex flex-col items-center mx-auto text-center">
              <h1 className="text-4xl font-semibold text-white uppercase md:text-7xl">Task Pro</h1>
              <p className="mt-6 text-lg leading-5 text-white">The best in town.</p>
              <a href="#about" className="mt-8 cursor-pointer animate-bounce">
                <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="27" cy="26" r="18" stroke="white" strokeWidth="2" />
                  <path d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
          <svg className="fill-indigo-500" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
          </svg>
        </section>

        <section className="container px-6 py-8 mx-auto lg:py-16" id="about">
          <div className="lg:flex lg:items-center lg:-mx-4">
            <div className="lg:w-1/2 lg:px-4">
              <h3 className="text-xl font-medium text-gray-500 md:text-2xl lg:text-3xl">We create awesome Product-spaces & Tasks.</h3>
              <p className="mt-6 text-gray-600 ">Effortlessly organize your projects and tasks with our intuitive application, offering customizable product spaces, task management, and ready-to-use templates for seamless collaboration.</p>
              <button className="flex items-center mt-8 -mx-2 text-indigo-500">
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

      <footer className="bg-indigo-500">
        <div className="container flex flex-col items-center justify-between py-4 mx-auto md:flex-row">
          <p className="text-sm text-white">© 2024 Next.js Template. All rights reserved.</p>
          <div className="flex mt-4 space-x-6 md:mt-0">
            <a href="#" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 5a3 3 0 00-3-3H5a3 3 0 00-3 3v14a3 3 0 003 3h8l3 3V5z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 10L12 15m5-5l-5 5" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 15h12L9 6m6 9v5m0 0V9m0 5H5m14-5h-4" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}