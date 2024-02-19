import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12 font-abc">
            <div className="container mx-auto flex flex-wrap justify-between px-4">
                <div className="w-full md:w-1/4 lg:w-auto mb-6 md:mb-0">
                    <div className="font-semibold mb-4 text-lg">ABOUT US</div>
                    <ul className="text-sm">
                        <li><a href="#" className="hover:text-gray-300">TERMS & CONDITIONS</a></li>
                        <li><a href="#" className="hover:text-gray-300">PRIVACY POLICY</a></li>
                        <li><a href="#" className="hover:text-gray-300">CANCELLATION & RETURN POLICY</a></li>
                        <li><a href="#" className="hover:text-gray-300">FAQS</a></li>
                        <li><a href="#" className="hover:text-gray-300">CONTACT US</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 lg:w-auto mb-6 md:mb-0">
                    <div className="font-semibold mb-4 text-lg">MEN</div>
                    <ul className="text-sm">
                        <li><a href="#" className="hover:text-gray-300">SHORT SLEEVE</a></li>
                        <li><a href="#" className="hover:text-gray-300">LONG SLEEVE</a></li>
                        <li><a href="#" className="hover:text-gray-300">POLO</a></li>
                        <li><a href="#" className="hover:text-gray-300">SHIRT</a></li>
                        <li><a href="#" className="hover:text-gray-300">HOODIE</a></li>
                        <li><a href="#" className="hover:text-gray-300">COMFY TROUSER</a></li>
                        <li><a href="#" className="hover:text-gray-300">SPORTS TROUSER</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 lg:w-auto mb-6 md:mb-0">
                    <div className="font-semibold mb-4 text-lg">WOMEN</div>
                    <ul className="text-sm">
                        <li><a href="#" className="hover:text-gray-300">COMFY TROUSER</a></li>
                        <li><a href="#" className="hover:text-gray-300">FACE MASK</a></li>
                        <li><a href="#" className="hover:text-gray-300">CLASSIC</a></li>
                        <li><a href="#" className="hover:text-gray-300">DESIGNER EDITION</a></li>
                        <li><a href="#" className="hover:text-gray-300">KIDS MASK</a></li>
                        <li><a href="#" className="hover:text-gray-300">SPORTS</a></li>
                        <li><a href="#" className="hover:text-gray-300">JERSEY</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 lg:w-auto mb-6 md:mb-0">
                    <div className="font-semibold mb-4 text-lg">KIDS</div>
                    <ul className="text-sm">
                        <li><a href="#" className="hover:text-gray-300">MAGGIE</a></li>
                        <li><a href="#" className="hover:text-gray-300">SHORT SLEEVE</a></li>
                        <li><a href="#" className="hover:text-gray-300">LONG SLEEVE</a></li>
                        <li><a href="#" className="hover:text-gray-300">SHORTS</a></li>
                        <li><a href="#" className="hover:text-gray-300">TROUSER</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
                © 2024 Your Company. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
