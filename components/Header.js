import React from 'react'
import TopHeader from './TopHeader'
import { navItems } from './NavITems';
import Link from 'next/link';
import logo from '../images/Hekto.png';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <TopHeader />
            <nav className='bg-white shadow-sm'>
                <div className='maximum_width mx-auto px-3'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center py-4'>
                            <Image src={logo} alt='logo' />
                            <ul className='flex items-center'>
                                {navItems.map((link, index) => {
                                    return (
                                        <li className='mx-4' key={index}>
                                            <Link href={link.path}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className='border flex items-center gap-2'>
                            <button type="submit" className='bg-[#FB2E86] py-2 px-2 text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                            <input type="search" className='outline-none' name="search" id="search" placeholder='search' />
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header