

const FooterLinks = ({items}) => (

    <div>
        <ul>
            {items.map((item, index) => (
                <li className="footerlist" key={index}>{item}</li>
            ))}
        </ul>
    </div>

);

export default FooterLinks;