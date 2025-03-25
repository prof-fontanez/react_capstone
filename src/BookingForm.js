
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = props => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("")
    const [occasion, setOccasion] = useState("None");  
    const navigate = useNavigate();

    useEffect(() => {
        let currentDate = new Date().toJSON().slice(0, 10);
        setDate(currentDate);
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        props.submitForm(e);
        navigate('/confirmation');
    }

    function handleDateChange(e) {
        setDate(e);
        props.dispatch(e);
    }

    const [emailValid, setEmailValid] = useState(null);
    const [nameValid, setNameValid] = useState(null);

    const validateEmail = (email) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailValid(validateEmail(value));
    };
    
    const validateName = (name) => {
        const regex = /^[a-zA-Z\s'-]+$/;
        return regex.test(name) && name.length >= 2 && name.length <= 50;
    };
  
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setNameValid(validateName(value));
    };
      
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
                        onChange={(e) => handleNameChange(e)}/>
				</div>
                <div>
                    {nameValid === null ? null : nameValid ? (<></>) : (
                        <text className="text-red-600">Invalid name string. Alphanumeric characters only.</text>
                    )}
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
                        width='200px'
                        onChange={(e) => handleEmailChange(e)} />
                </div>
                <div>
                    {emailValid === null ? null : emailValid ? (<></>) : (
                    <text className="text-red-600">Invalid email address</text>
                    )}
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
                <div/>
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
                <div/>
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
                <div/>
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
                <div/>
            </form>
            <button 
                aria-label="Click to complete your reservation"
                className="button" 
                disabled={!name || !nameValid || !email || !emailValid }
                onClick={(e) => handleSubmit(e)}>Make your reservation
            </button>
        </div>
    </>
)};

export default BookingForm;