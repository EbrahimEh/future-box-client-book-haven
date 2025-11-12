import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const AddBook = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleAddBook = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const form = e.target;
        const bookData = {
            title: form.title.value,
            author: form.author.value,
            genre: form.genre.value,
            rating: parseInt(form.rating.value),
            summary: form.summary.value,
            coverImage: form.coverImage.value,
            userEmail: user?.email, 
            userName: user?.displayName 
        };

        console.log('Adding book:', bookData); 

        try {
            const response = await fetch('http://localhost:3000/books', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            });
            
            if (response.ok) {
                toast.success('Book added successfully!');
                navigate('/allBooks');
            } else {
                toast.error('Failed to add book');
            }
        } catch (error) {
            console.error(error);
            toast.error('Error adding book');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="max-w-2xl mx-auto py-8 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Add New Book</h2>
            
            <form onSubmit={handleAddBook} className="space-y-4 bg-base-100 p-6 rounded-lg shadow-md">
                <input type="text" name="title" placeholder="Book Title" className="input input-bordered w-full" required />
                <input type="text" name="author" placeholder="Author" className="input input-bordered w-full" required />
                <select name="genre" className="select select-bordered w-full" required>
                    <option value="">Select Genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Biography">Biography</option>
                </select>
                <input type="number" name="rating" min="1" max="5" placeholder="Rating (1-5)" className="input input-bordered w-full" required />
                <textarea name="summary" placeholder="Book Summary" className="textarea textarea-bordered w-full" rows="4" required></textarea>
                <input type="url" name="coverImage" placeholder="Cover Image URL" className="input input-bordered w-full" required />
                <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                    {loading ? 'Adding Book...' : 'Add Book'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddBook;