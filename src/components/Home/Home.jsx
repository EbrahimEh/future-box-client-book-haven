
import Banner from '../Banner/Banner';
import LatestBooks from '../../Pages/LatestBooks';
import TopGenres from '../TopGenres/TopGenres';
import BookOfTheWeek from '../BookOfTheWeek/BookOfTheWeek';
import AboutBookHaven from '../AboutBookHaven/AboutBookHaven';

const latestBookPromise = fetch('https://book-haven-server-gold.vercel.app/books').then(res => res.json())

const Home = () => {
    return (
         <div>
           
            <Banner></Banner>
            <LatestBooks latestBookPromise={latestBookPromise}></LatestBooks>
            <TopGenres></TopGenres>
            <BookOfTheWeek></BookOfTheWeek>
            <AboutBookHaven></AboutBookHaven>
        </div>
    );
};

export default Home;