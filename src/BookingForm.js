
import { useState } from "react";
import Confirmation from "./Confirmation";

const BookingForm = props => {
    const [isConfirmationOpen, setConfirmationOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("None");  
    const [finalTime, setFinalTime] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setConfirmationOpen(true);
    }

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function handleConfirmationClosed() {
        setConfirmationOpen(false);
        setName("");
        setEmail("");
        setPeople(1);
        setDate("");
        setOccasion("None");
        setFinalTime("");
    }

    return (
    <>
        <div className="backdrop">
            <h1>Book a table</h1>
            <form className="bookingform">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="name">Name:</label>
                </div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="text" 
                        id="name" 
                        placeholder="Enter your name"
                        required
                        minLength={2}
                        maxLength={50}
                        value={name}
                        width='200px'
                        onChange={(e) => setName(e.target.value)}/>
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="email">Email:</label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="email" 
                        id="email"
                        placeholder="Email"
                        value={email}
                        required
                        minLength={4}
                        maxLength={200}
                        width='200px'
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="res-date">Choose date</label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="date" 
                        id="res-date"
                        required
                        value={date}
                        width='200px'
                        onChange={handleDateChange}/>
                </div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="res-time">Choose time</label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <select 
                        id="res-time" 
                        required width='200px' 
                        value={finalTime}
                        onChange={(e) => setFinalTime(e.target.value)}>
                            <option>17:00</option>
                            <option>17:30</option>
                            <option>18:00</option>
                            <option>18:30</option>
                            <option>19:00</option>
                            <option>19:30</option>
                            <option>20:00</option>
                            <option>20:30</option>
                            <option>21:00</option>
                            <option>21:30</option>
                            <option>22:00</option>
                            <option>22:30</option>
                    </select>
                </div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="guests">Number of guests</label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="number" 
                        id="guests" 
                        value={people}
                        required
                        min={1}
                        max={10}
                        width='200px'
                        onChange={(e) => setPeople(e.target.value)}/>
                </div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<label htmlFor="occasion">Occasion</label>
                </div>
                <div style={{ display: 'flex'}}>
                    <select id="occasion"
                        required
                        placeholder="Select an occasion"
                        value={occasion}
                        width={200}
                        onChange={(e) => setOccasion(e.target.value)}>
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                            <option>Other</option>
                    </select>
                </div>
            </form>
            <button 
                className="button" 
                onClick={(e) => handleSubmit(e)}>Make your reservation
            </button>
        </div>
        
        {isConfirmationOpen && (
            <Confirmation onClose={() => handleConfirmationClosed()}>
                <h1>Reservation completed!</h1>
                <div>Name: {name}</div>
                <div>Number of guests: {people}</div>
                <div>Occasion: {occasion}</div>
                <div>Date: {date}</div>
                <div>Time: {finalTime}</div>
            </Confirmation>
        )}
    </>
)};

export default BookingForm;