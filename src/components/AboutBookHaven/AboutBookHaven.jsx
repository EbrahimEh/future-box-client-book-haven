
const AboutBookHaven = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">About Book Haven</h2>
                <p className="text-gray-600 text-center mb-12">Your Digital Sanctuary for Literary Treasures</p>
                
                <div data-aos="fade-up" className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Welcome to <span className="font-semibold text-primary">Book Haven</span>, your premier digital library where book lovers unite. 
                        We've created a sanctuary for readers to discover, share, and celebrate the magic of literature.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Our platform connects readers with thousands of books across all genres - from timeless classics 
                        to contemporary masterpieces. Whether you're seeking thrilling mysteries, heartwarming romances, 
                        or thought-provoking non-fiction, Book Haven is your gateway to endless reading adventures.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Join our community of passionate readers, share your favorite discoveries, and build your personal 
                        digital bookshelf. At Book Haven, every page turn brings you closer to your next favorite story.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <div className="text-3xl mb-3">📚</div>
                            <h4 className="font-semibold mb-2">Vast Collection</h4>
                            <p className="text-gray-600">Thousands of books across all genres</p>
                        </div>
                        <div className="text-center p-6 bg-green-50 rounded-lg">
                            <div className="text-3xl mb-3">👥</div>
                            <h4 className="font-semibold mb-2">Community Driven</h4>
                            <p className="text-gray-600">Share and discover with fellow readers</p>
                        </div>
                        <div className="text-center p-6 bg-purple-50 rounded-lg">
                            <div className="text-3xl mb-3">💫</div>
                            <h4 className="font-semibold mb-2">Personal Library</h4>
                            <p className="text-gray-600">Build and manage your digital bookshelf</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutBookHaven;