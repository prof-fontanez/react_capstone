import kitchen1 from './assets/images/kitchen1.jpg';
import kitchen2 from './assets/images/kitchen2.jpg';

const AboutUs =  props => (
    <div className='about'>
       <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <text>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</text>
        </div>
        <div className='image'>
            <img src={kitchen1} />
            <img src={kitchen2} />
        </div>
    </div>
);

export default AboutUs;