
const TopGenres = () => {
    const genres = [
        { name: "Fiction", books: "1,240", image: "📚", color: "bg-blue-100" },
        { name: "Mystery", books: "856", image: "🕵️", color: "bg-purple-100" },
        { name: "Science Fiction", books: "723", image: "🚀", color: "bg-green-100" },
        { name: "Romance", books: "1,542", image: "❤️", color: "bg-pink-100" },
        { name: "Biography", books: "634", image: "📖", color: "bg-yellow-100" },
        { name: "Fantasy", books: "987", image: "🐉", color: "bg-orange-100" }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Top Genres</h2>
                <p className="text-gray-600 text-center mb-12">Explore books by your favorite categories</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {genres.map((genre, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 100} 
                             className={`${genre.color} p-6 rounded-lg text-center shadow-md hover:shadow-lg transition duration-300 cursor-pointer`}>
                            <div className="text-4xl mb-3">{genre.image}</div>
                            <h3 className="font-semibold text-lg mb-1">{genre.name}</h3>
                            <p className="text-gray-600 text-sm">{genre.books} books</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TopGenres;