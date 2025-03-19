import './App.css';
import BookingPage from './BookingPage';
import Main from './Main';
import Menu from './Menu';
import { Routes, Route } from "react-router-dom";
import "@fontsource/karla"
import "@fontsource/markazi-text";
import Layout from './Layout';
import AboutUs from './AboutUs';


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<BookingPage/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
