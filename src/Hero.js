import MenuSpecial from "./MenuSpecial";
import bruchetta from "./assets/images/bruchetta(sm).jpg";
import salad from "./assets/images/salad(sm).jpg";
import dessert from "./assets/images/lemon_dessert.jpg";
import { useNavigate } from 'react-router-dom';

const Hero =  props => {

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/menu');
    }

    return(
        <div className="hero">
        <div className="hero_container">
            <h2>This weeks specials!</h2>
            <button className="button" onClick={(e) => handleSubmit(e)} >Online menu</button>
        </div>
        <div className="hero_container">
            <MenuSpecial image={bruchetta} price='$12.99' title='Bruchetta' description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style Feta Cheese, garnished with crunchy garlic and Rosemary Croutons." />
            <MenuSpecial image={salad} price='$5.99' title='Greek Salad' description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
            <MenuSpecial image={dessert} price='$5' title='Lemon Dessert' description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
        </div>
    </div>
    );
};

export default Hero;