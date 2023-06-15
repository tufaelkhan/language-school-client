import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Planning from "../Planning/Planning";
import PopularClass from "../PopularClass/PopularClass";
import PopularTeachers from "../PopularTeachers/PopularTeachers";
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Language school || Home </title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Contact></Contact>
            <PopularTeachers></PopularTeachers>
            <Planning></Planning>
        </div>
    );
};

export default Home;