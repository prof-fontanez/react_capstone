import BookingForm from "./BookingForm";
import { useReducer } from "react";

import {fetchAPI} from './bookingsAPI';

const BookingPage = () => {

    function updateTimes(date) {
        return fetchAPI(date);
      }
    
      const output = fetchAPI(new Date());    
      const [availableTimes, dispatch] = useReducer(updateTimes, output);
    
      return  (
        <div className="bookingpage">
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </div>
)};

export default BookingPage;