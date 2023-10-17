import Cards from "./Cards"
import Categories from "./Categories";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Prod from "./Prod";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <Prod />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;