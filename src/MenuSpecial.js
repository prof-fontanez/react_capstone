import delivery_icon from "./assets/images/delivery_icon.jpg"

function MenuSpecial(props) {

    return(
        <span className='menuspecial'>
            <img className="menuspecial_img" src={props.image}/>
            <text>{props.title}</text>
            <price>{props.price}</price>
            <textarea>{props.description}</textarea>
            <text>Order a delivery</text>
            <img className="delivery_icon" src={delivery_icon}/>

        </span>
    );
}

export default MenuSpecial;