import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';
// import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const MyBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://book-haven-server-gold.vercel.app/mybooks/${user.email}`)
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
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            background: '#fff',
            color: '#333'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://book-haven-server-gold.vercel.app/books/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setBooks(books.filter(book => book._id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your book has been deleted successfully.",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                            background: '#fff',
                            color: '#333'
                        });
                    }
                })
                .catch(error => {
                    console.error('Delete error:', error);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete book. Please try again.",
                        icon: "error",
                        confirmButtonColor: "#d33",
                        background: '#fff',
                        color: '#333'
                    });
                });
            }
        });
    };

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
                <h1 className="text-2xl font-bold text-center md:mt-16 mb-2">My Books</h1>

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
                                                        Update
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
            {/* <ToastContainer /> */}
        </div>
    );
};

export default MyBooks;