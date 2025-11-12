import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { IoIosStar, IoIosArrowBack } from 'react-icons/io';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/allBooks/${id}`)
            .then(res => res.json())
            .then(data => {
                setBook(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching book:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
          
                <Link to="/all-books" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
                    <IoIosArrowBack />
                    Back to All Books
                </Link>

          
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      
                        <div className="lg:w-2/5 p-8 flex items-center justify-center bg-gray-100">
                            <img 
                                src={book.coverImage} 
                                alt={book.title}
                                className="w-64 h-80 lg:w-80 lg:h-96 object-cover rounded-lg shadow-2xl"
                            />
                        </div>
                        
         
                        <div className="lg:w-3/5 p-8">
                            <div className="mb-6">
                                <h1 className="text-4xl font-bold text-gray-900 mb-3">{book.title}</h1>
                                <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
                                
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="badge badge-primary badge-lg">{book.genre}</span>
                                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                                        <IoIosStar className="text-yellow-500" />
                                        <span className="font-semibold">{book.rating}/5</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4">About the Book</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {book.summary}
                                </p>
                            </div>

                            <div className="border-t pt-6">
                                <h3 className="text-xl font-semibold mb-4">Book Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-600">Author</p>
                                        <p className="font-semibold">{book.author}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Genre</p>
                                        <p className="font-semibold">{book.genre}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Rating</p>
                                        <p className="font-semibold">{book.rating}/5 Stars</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Added by</p>
                                        <p className="font-semibold">{book.userEmail}</p>
                                    </div>
                                </div>
                            </div>

                           
                            <div className="flex gap-4 mt-8">
                                <button className="btn btn-primary px-8">
                                    Add to Favorites
                                </button>
                                <button className="btn btn-outline px-8">
                                    Share Book
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;