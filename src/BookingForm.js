
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = props => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("")
    const [occasion, setOccasion] = useState("None");  
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        props.submitForm(e);
        navigate('/confirmation');
    }

    function handleDateChange(e) {
        setDate(e);
        props.dispatch(e);
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
                        aria-label="Name"
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
                        aria-label="Email"
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
                    <input 
                        id="res-date" 
                        aria-label="Choose a date"
                        value={date} 
                        width='200px'
                        onChange={(e) => handleDateChange(e.target.value)} 
                        type="date" 
                        required/>
                </div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="res-time">Choose time</label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <select 
                        id="res-time" 
                        aria-label="Select a time"
                        required 
                        width='200px' 
                        value={times}
                        onChange={(e) => setTimes(e.target.value)}>
                            {props?.availableTimes?.availableTimes?.map(availableTimes => {return <option aria-label={availableTimes} key={availableTimes}>{availableTimes}</option>})}
                    </select>
                </div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="guests">Number of guests</label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="number" 
                        id="guests" 
                        aria-label="Select number of guests"
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
                        aria-label="Select an occasion"
                        placeholder="Select an occasion"
                        value={occasion}
                        width={200}
                        onChange={(e) => setOccasion(e.target.value)}>
                            <option aria-label="None">None</option>
                            <option aria-label="Birthday">Birthday</option>
                            <option aria-label="Anniversary">Anniversary</option>
                            <option aria-label="Engagement">Engagement</option>
                            <option aria-label="Other occassion">Other</option>
                    </select>
                </div>
            </form>
            <button 
                aria-label="Click to complete your reservation"
                className="button" 
                disabled={!name || !email || !date}
                onClick={(e) => handleSubmit(e)}>Make your reservation
            </button>
        </div>
    </>
)};

export default BookingForm;