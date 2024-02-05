// components/Navbar.js
import Link from 'next/link';

const Header = () => {
    return (
        <nav className="bg-indigo-600 p-4 border-b">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <span className="text-white text-lg font-bold">NK</span>
                </div>
                <div className="space-x-4">
                    <Link href="/">
                        <span className="text-white">Home</span>
                    </Link>
                    <Link href="/about">
                        <span className="text-white">About</span>
                    </Link>
                    <Link href="/contact">
                        <span className="text-white">Contact</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
