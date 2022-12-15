import Header from './components/Header/Header'
import Advantages from './components/Advantages/Advantages';
import AboutUs from './components/AboutUs/AboutUs'
import Features from './components/Features/Features'
import Catalog from './components/Catalog/Catalog'
import Consultants from './components/Consultants/Consultants';
import Brands from './components/Brands/Brands'
import Information from './components/Information/Information'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Advantages />
        <AboutUs />
        <Features />
        <Catalog />
        <Consultants />
        <Brands />
        <Information />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
