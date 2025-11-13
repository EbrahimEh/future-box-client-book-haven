import React, { use } from 'react';
import { IoIosStar } from 'react-icons/io';

const LatestBooks = ({ latestBookPromise }) => {
    const books = use(latestBookPromise)
    console.log(books)
    return (
        <div>
            <h1 className='text-center tracking-widest md:text-4xl text-2xl py-5 font-semibold md:mt-10'>Latest Books</h1>
            
            <div className='max-w-7xl mx-auto grid md:grid-cols-3 xl:grid-cols-3 md:gap-10 gap-5 px-8 md:py-10 grid-cols-1'>
                {
                    books.map(book => <div key={book._id}>
                        <div data-aos="zoom-in" className="card bg-base-200 shadow-sm">
                            <figure className="px-3 pt-6">
                                <img
                                    src={book.coverImage}
                                    alt=""
                                    className="rounded-xl w-60 h-72" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title flex justify-between">
                                    {book.title}
                                    <div className="badge py-4 badge-secondary">{book.genre}</div>
                                </h2>
                                <p className='line-clamp-2'>{book.summary}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">{book.author}</div>
                                    <div className="badge badge-outline"><IoIosStar />{book.rating}</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestBooks;