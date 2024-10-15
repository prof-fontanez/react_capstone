import foodsample from './assets/images/foodsample(sm).jpg';

const Homepage =  props => (

    <div className="homepage">
        <span>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <text>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</text>
            <button>Reserve a table</button>
        </span>
        <span className='picture'>
            <img src={foodsample} />
        </span>
    </div>
);

export default Homepage;