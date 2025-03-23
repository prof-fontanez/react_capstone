import BookingForm from "./BookingForm";

const BookingPage = (props) => {

      return  (
      <div className="bookingpage">
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
      </div>
)};

export default BookingPage;