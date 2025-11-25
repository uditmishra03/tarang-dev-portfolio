import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white px-4">
            <div className="text-center">
                {/* Profile Image */}
                <div className="mb-6 flex justify-center">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500">
                        <Image
                            src="/images/profile.jpg"
                            alt="Tarang Profile"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Name and Title */}
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Tarang</span>
                </h1>

                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-blue-400 text-xl">⚙️</span>
                    <p className="text-xl md:text-2xl text-gray-300">DevOps Engineer & Cloud Architect</p>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p className="text-gray-400">Currently in Dubai 🇦🇪</p>
                </div>

                {/* Tagline */}
                <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg italic">
                    🗺️ Building bridges between code, cloud, and culture.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300"
                    >
                        Get in touch <FaArrowRight />
                    </Link>

                    <Link
                        href="https://linkedin.com/in/your-profile"
                        target="_blank"
                        className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-full transition-all duration-300"
                    >
                        <FaLinkedin size={24} />
                    </Link>

                    <Link
                        href="https://github.com/your-username"
                        target="_blank"
                        className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-full transition-all duration-300"
                    >
                        <FaGithub size={24} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;

