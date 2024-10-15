import ReviewTile from "./ReviewTile";

const Testimonials =  props => 
<div className="testimonials">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Testimonials</h2>
        <div className="testimonial">
            <ReviewTile name="Mary" rating="5" comment="Never had Bruchetta until today. It was delicious!"/>
            <ReviewTile name="Joe" rating="5" comment="Everthing was great, but the Lemon Dessert was the best."/>
            <ReviewTile name="Pham" rating="5" comment="We ordered a variety of menu items in our table. We were all amazed on how great everything was."/>
            <ReviewTile name="Nazeem" rating="5" comment="The Greek Salad was excellent!"/>
        </div>
    </div>
</div>

export default Testimonials;