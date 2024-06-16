import Link from 'next/link';
import BaseHamburger from '../BaseHamburger/BaseHamburger';
import Hamburger from '../Hamburger/Hamburger';

function Navbar() {
    return (
        <header className="bg-gray-900" >
            <nav className="container relative flex items-center justify-between px-3 sm:px-2 py-8 mx-auto text-white">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                </a>

                <div className="hidden md:flex md:items-center">
                    <Link href={'/home'} legacyBehavior={true}><a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300">Home</a></Link>
                    <Link href={'/space/task'} legacyBehavior={true}><a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300"> About</a></Link>
                    <Link href={'/pricing'} legacyBehavior={true}><a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300"> Pricing</a></Link>
                    <Link href={'/contact'} legacyBehavior={true}><a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300"> Contact</a></Link>
                </div>

                <div className='flex gap-7 items-center'>
                    <div className="hidden sm:flex">
                        <Link href="/login">
                            <div className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark ml-2"> Login</div>
                        </Link>
                        <Link href="/signup">
                            <div className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark ml-2"> Sign Up</div>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <BaseHamburger />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar