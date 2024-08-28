import { Link } from "react-router-dom";

export default function Custom404() {
    return (
    
        <div className='text-center my-20'>
            <h1 className='text-9xl font-extrabold py-8 bg-gradient-to-t from-cyan-950 via-cyan-500 to-cyan-700 bg-clip-text text-transparent'>Oopsie!</h1>
            <h2 className='text-3xl leading-10 text-cyan-600 py-3 font-extrabold'>Page Not Found</h2>
            <p className='font-medium text-base py-2'> The page you are looking doesn't exist.</p>
            <div className='flex gap-3 my-4 justify-center'>
                <Link to="/" className='py-2 px-4 block bg-cyan-500 rounded-lg text-white text-sm font-medium hover:transition-all duration-300 ease-in-out'>
                    Go back home
                </Link>
                <button onClick={() => window.history.back()}>
                    <p className="py-2 px-4 block border border-cyan-600 bg-white rounded-lg text-black text-sm transition-all duration-300 ease-in-out">Go back to Previous page</p>
                </button>
            </div>
        </div>
            
        
    );
}
