import './App.css';
import BookingPage from './BookingPage';
import Main from './Main';
import Menu from './Menu';
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from './Layout';
import AboutUs from './AboutUs';
import  { useReducer } from "react";
import ConfirmedBooking from './ConfirmedBooking';


function App() {
  
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };
  const submitAPI = function(formData) {
      return true;
  };

  const initialState = {availableTimes:  fetchAPI(new Date())}
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
      return {availableTimes: fetchAPI(new Date(date))}
  }
  const navigate = useNavigate();
  function submitForm (formData) {
      if (submitAPI(formData)) {
          navigate("/booking")
      }
  }

return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path='/confirmation' element={<ConfirmedBooking/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
