// export default function NavBar() {

//     return (
//         <div className="bg-gray-50 flex items-center justify-center mt-4">
//             <div className="flex gap-2 items-center font-newsone justify-center py-1 px-20 border-2 rounded border-black">
//                 <button className="border-2 p-1">Sign In</button>
//                 <button className="border-2 p-1"> Sign Up</button>

//             </div>
//         </div>
//     );

// }
export default function NavBar() {
    return (
        <nav className="bg-gray-50 border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <span className="font-news text-2xl font-semibold bg-gradient-to-r bg-clip-text from-blue-800 to-gray-900
                        text-transparent">Inspply</span>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="text-gray-700 hover:text-gray-900 transition font-newsone">
                            Sign in
                        </button>
                        <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-600 hover:px-8 transition-all duration-500 font-newsone">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}