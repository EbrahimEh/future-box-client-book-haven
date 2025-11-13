
import { Link } from 'react-router';
import bookBanner from '../../assets/bookBanner.jpg'


const Banner = () => {

    return (
        <div className='w-full relative'>
            <div className='w-full md:h-screen overflow-hidden'>
                <img className='md:max-h-screen mx-auto w-full object-cover' src={bookBanner} alt="Books Haven Banner" />
            </div>
            <div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4'>
                <h1 data-aos="fade-right" className='text-gray-300 text-3xl md:text-6xl md:mt-0 mt-10 font-bold mb-4'>Books Haven</h1>
                <p data-aos="fade-left" className=' text-gray-300 hidden md:flex text-sm md:text-xl max-w-2xl mb-8'>Discover Your Next Favorite Book in Our Vast Collection</p>
                <div data-aos="zoom-in" className='flex flex-col sm:flex-row gap-4'>
                    <Link to="/allBooks">
                        <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 md:py-3 md:px-6 rounded-lg shadow-lg transition duration-300'>
                            All Books
                        </button></Link>
                    <Link to="/add-book">
                        <button className='bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-1 px-3 md:py-3 md:px- rounded-lg transition duration-300'>
                            Create Books
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;