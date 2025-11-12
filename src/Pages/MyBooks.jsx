import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const MyBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/mybooks/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setBooks(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error:', error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [user]);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            fetch(`http://localhost:3000/books/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setBooks(books.filter(book => book._id !== id));
                        toast.success('Book deleted successfully!');
                    }
                })
                .catch(error => {
                    console.error('Delete error:', error);
                    toast.error('Failed to delete book');
                });
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="loading loading-spinner loading-lg"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Please Login First</h2>
                    <p className="text-gray-600 mb-6">You need to be logged in to view your books.</p>
                    <Link to="/login" className="btn btn-primary">Login Now</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-2">My Books</h1>
                <p className="text-gray-600 text-center mb-8">Books added by: {user.displayName || user.email}</p>

                {books.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                        <div className="text-6xl mb-4">📚</div>
                        <h3 className="text-xl font-semibold mb-2">No Books Found</h3>
                        <p className="text-gray-600 mb-6">You haven't added any books yet.</p>
                        <Link to="/add-book" className="btn btn-primary">Add Your First Book</Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
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
                                                <span className="badge badge-outline badge-sm">{book.genre}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-yellow-500">⭐</span>
                                                    <span>{book.rating}/5</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-2">
                                                    <Link
                                                        to={`/update-book/${book._id}`}
                                                        className="btn btn-primary btn-sm"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(book._id)}
                                                        className="btn btn-error btn-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                <div className="mt-6 text-center text-gray-600">
                    Showing {books.length} of your books
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyBooks;