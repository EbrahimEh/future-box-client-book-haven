import React from 'react';
import { IoStar } from 'react-icons/io5';
const BookOfTheWeek = () => {
    const featuredBook = {
        _id: "691091360e2b5a6ecd9e9177",
        title: "The Silent Patient",
        author: "Alex Michaelides", 
        genre: "Psychological",
        rating: 4.3,
        summary: `Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.
        
        His refusal to talk turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety. The price of her art skyrockets, and she, the silent patient, is hidden away from the tabloids and spotlight at the Grove, a secure forensic unit in North London.`,
        coverImage: "https://static-01.daraz.com.bd/p/816da2e8b6df0a3b076f8c0a0d951376.jpg",
        userEmail: "jessica.morgan@bookhaven.com"
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Book of the Week</h2>
                <p className="text-gray-600 text-center mb-12">Featured selection from our collection</p>
                
                <div data-aos="zoom-in" className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex-shrink-0">
                        <img 
                            src={featuredBook.coverImage} 
                            alt={featuredBook.title} 
                            className="w-48 h-64 object-cover rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{featuredBook.title}</h3>
                        <p className="text-gray-600 mb-4">By {featuredBook.author}</p>
                        <p className="text-gray-700 text-justify mb-6">{featuredBook.summary}</p>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-yellow-400 text-white flex items-center  px-3 py-1 rounded-full text-sm font-semibold">
                                <IoStar /> {featuredBook.rating}/5
                            </span>
                            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {featuredBook.genre}
                            </span>
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Book of the Week
                            </span>
                        </div>
                        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition duration-300 font-semibold">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BookOfTheWeek;