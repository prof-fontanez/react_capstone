import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';
import Hero from './Hero';
import Testimonials from './Testimonials';
import Nav from './Nav';
import AboutUs from './AboutUs';
import "@fontsource/karla"
import "@fontsource/markazi-text";


function App() {
  return (
    <>
      <div className="banner">
        <Header />
        <Nav/>
      </div>
      <Homepage />
      <Hero />
      <Testimonials />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
