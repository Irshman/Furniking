import Header from '../Components/Header/Header'
import Feature from './Feature/Feature';
import Hero from './Hero/Hero';
import Cards from './Cards/Cards';
import Products from './Products/Products';
import ReviewSliders from '../Components/ReviewSliders/ReviewSliders';
import SpecialOffers from './SpecialOffers/SpecialOffers';
import Articles from './Articles/Articles';
import Foouter from './Foouter/Foouter';
import Offer from '../Components/Offer/Offer';


function App() {  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Feature />
        <Offer />
        <Cards />
        <SpecialOffers />
        <Products />
        <ReviewSliders />
        <Articles />
      </main>
      <Foouter />
    </>
  );
}

export default App;
