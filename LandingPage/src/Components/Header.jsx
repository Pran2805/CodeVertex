import React from 'react';
import twitter from './assets/twitter.png';
import insta from './assets/insta.png';
import fb from './assets/fb.png';
import yt from './assets/yt.png';
import p from './assets/p.png';
import linkedin from './assets/linkedin.png';
import call from './assets/call.png';
import mail from './assets/email.png';
import logo from './assets/logo.png';

function Header() {
    return (
        <header>
            <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white">
                <div className="container mx-auto px-4 py-2 md:py-4 flex flex-col md:flex-row justify-between items-center">
                    {/* Social Media Icons */}
                    <div className="hidden xs:flex flex-wrap space-x-4 mb-2 md:mb-0">
                        <img src={twitter} alt="Twitter" className="w-7 h-auto invert cursor-pointer" />
                        <img src={insta} alt="Instagram" className="w-7 h-auto invert cursor-pointer" />
                        <img src={fb} alt="Facebook" className="w-7 h-auto invert cursor-pointer" />
                        <img src={yt} alt="YouTube" className="w-7 h-auto invert cursor-pointer" />
                        <img src={p} alt="Pinterest" className="w-7 h-auto invert cursor-pointer" />
                        <img src={linkedin} alt="LinkedIn" className="w-7 h-auto invert cursor-pointer" />
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col md:flex-row items-center text-sm md:text-base mb-2 md:mb-0">
                        <div className="flex items-center space-x-2 mb-1 md:mb-0">
                            <img src={call} alt="Call" className='w-6 h-auto invert' />
                            <span>+12-345-7890</span>
                        </div>
                        <div className="hidden md:block mx-2 text-white">|</div>
                        <div className="flex items-center space-x-2">
                            <img src={mail} alt="Email" className='w-6 h-auto invert' />
                            <span>demolandpage@gmail.com</span>
                        </div>
                    </div>

                    {/* Request Button */}
                    <button className="bg-transparent text-white border border-white rounded-full px-4 py-2 md:px-6 md:py-3 cursor-pointer hover:bg-white hover:text-black hover:ease-in-out active:text-white">
                        Request a console
                    </button>
                </div>

                {/* Navigation */}
                <nav className="bg-white">
                    <div className="container mx-auto px-4 py-2 md:py-4 flex flex-col md:flex-row justify-between items-center">
                        {/* Logo and Title */}
                        <div className="flex items-center space-x-4 mb-2 md:mb-0">
                            <img src={logo} alt="Logo" className="w-10 md:w-12" />
                            <h1 className="text-xl md:text-2xl font-bold text-black">Landing Page</h1>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center mb-2 md:mb-0">
                            <a href="#" className="font-bold text-black">Home</a>
                            <a href="#" className="font-bold text-black">Blog</a>
                            <a href="#" className="font-bold text-black">Page</a>
                            <a href="#" className="font-bold text-black">Services</a>
                            <a href="#" className="font-bold text-black">Testimonials</a>
                            <a href="#" className="font-bold text-black">Contact</a>
                            <button className="bg-orange-400 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-orange-300 active:bg-orange-500">
                                Buy Now
                            </button>
                        </div>

                        {/* Search Button */}
                        <div id="search">
                            <button className="text-black px-4 py-2 bg-white rounded-full">🔍</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
