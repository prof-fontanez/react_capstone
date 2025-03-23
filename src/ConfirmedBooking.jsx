import { useNavigate } from "react-router-dom";

function ConfirmedBooking () {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/');
    }

    return(
    <div className="confirmation">
        <div>
            <h1>Booking confirmed!</h1>
        </div>
        <button onClick={(e) => handleSubmit(e)}>OK</button>
    </div>

    );
};

export default ConfirmedBooking;