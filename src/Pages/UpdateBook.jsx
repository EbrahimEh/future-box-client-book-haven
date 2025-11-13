import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

const UpdateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`https://book-haven-server-gold.vercel.app/allBooks/${id}`)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData);
        
        fetch(`https://book-haven-server-gold.vercel.app/books/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedData)
        })
        .then(() => {
            alert('Book updated!');
            navigate('/mybooks');
        });
    };

    return (
        <div className="max-w-2xl mt-16 mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Update Book</h1>
            <form onSubmit={handleUpdate} className="space-y-4">
                <input name="title" defaultValue={book.title} className="input input-bordered w-full" required />
                <input name="author" defaultValue={book.author} className="input input-bordered w-full" required />
                <input name="genre" defaultValue={book.genre} className="input input-bordered w-full" required />
                <input name="rating" type="number" defaultValue={book.rating} className="input input-bordered w-full" required />
                <textarea name="summary" defaultValue={book.summary} className="textarea textarea-bordered w-full" required />
                <input name="coverImage" defaultValue={book.coverImage} className="input input-bordered w-full" required />
                <button type="submit" className="btn btn-primary w-full">Update Book</button>
            </form>
        </div>
    );
};

export default UpdateBook;