import React from "react";
import { Link } from "react-router-dom";
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 mt-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
                {/* Logo / Brand */}
                <div>
                    <Link to="/" className="flex items-center justify-center sm:justify-start">
                        <h2 className="text-2xl font-bold text-red-500">Movie-X</h2>
                    </Link>
                    <p className="mt-2 text-sm">Discover your next favorite movie.</p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Navigate</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/" className="hover:underline">Movie List</Link></li>
                        <li><Link to="/favorite" className="hover:underline">Favorites</Link></li>
                    </ul>
                </div>

                {/* Social / Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Connect</h3>
                    <div className="flex justify-center sm:justify-start gap-4 text-xl">
                        <a href="https://github.com/gideonel/Movie-x" target="_blank" rel="noreferrer" className="hover:text-red-400"><FaGithub /></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-red-400"><FaTwitter /></a>
                        <a href="https://ng.linkedin.com/in/lordgideon-el" target="_blank" rel="noreferrer" className="hover:text-red-400"><FaLinkedin /></a>


                        <a href="https://www.facebook.com/gideon.oyama.7/" target="_blank" rel="noreferrer" className="hover:text-red-400"><FaFacebook /></a>
                        <a href="https://www.instagram.com/lord_gideonel/" target="_blank" rel="noreferrer" className="hover:text-red-400"><FaInstagram /></a>
                        <a href="https://ng.linkedin.com/in/lordgideon-el" target="_blank" rel="noreferrer" className="hover:text-red-400"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                <p className="flex items-center justify-center gap-1">
                    <FaRegCopyright className="inline" /> {new Date().getFullYear()} Movie-X. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
