import './App.css';
import BookingPage from './BookinPage';
import Header from './Header';
import Main from './Main';
import Menu from './Menu';
import Nav from './Nav';
import { Routes, Route } from "react-router-dom";
import "@fontsource/karla"
import "@fontsource/markazi-text";
import Layout from './Layout';


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<BookingPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
