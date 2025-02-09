"use client"

import { useRouter } from 'next/navigation';
export default function NavBar() {
    const router = useRouter();
    return (
        <nav className="bg-gray-50 border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <span onClick={() => router.push('/')}
                            className="font-news text-2xl font-semibold bg-gradient-to-r bg-clip-text from-blue-800 to-gray-900
                        text-transparent cursor-pointer">Inspply</span>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-4" >
                        <button onClick={() => router.push('/sign-in')}
                            className="opacity-70 hover:opacity-100 text-black transition font-newsone">
                            Sign in
                        </button>
                        <button onClick={() => router.push('/sign-up')}
                            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-500 font-newsone">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}