import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/allBooks')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="loading loading-spinner loading-lg"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">All Books</h1>
                <p className="text-gray-600 text-center mb-8">Discover our complete collection of {books.length} books</p>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            {/* Table Header */}
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-left">Cover</th>
                                    <th className="px-6 py-4 text-left">Book Title</th>
                                    <th className="px-6 py-4 text-left">Author</th>
                                    <th className="px-6 py-4 text-left">Genre</th>
                                    <th className="px-6 py-4 text-left">Rating</th>
                                    <th className="px-6 py-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {books.map(book => (
                                    <tr key={book._id} className="hover:bg-gray-50 transition duration-200">
                                        <td className="px-6 py-4">
                                            <img 
                                                src={book.coverImage} 
                                                alt={book.title}
                                                className="w-12 h-16 object-cover rounded shadow-sm"
                                            />
                                        </td>
                                        <td className="px-6 py-4 font-semibold">{book.title}</td>
                                        <td className="px-6 py-4">{book.author}</td>
                                        <td className="px-6 py-4">
                                            <span className=" badge-sm">{book.genre}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-500">⭐</span>
                                                <span>{book.rating}/5</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link 
                                                to={`/book-details/${book._id}`}
                                                className="btn btn-primary btn-sm"
                                            >
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="mt-6 text-center text-gray-600">
                    Showing {books.length} books in our collection
                </div>
            </div>
        </div>
    );
};

export default AllBooks;