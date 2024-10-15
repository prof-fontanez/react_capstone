import FooterLinks from './FooterLinks';
import {SocialIcon} from 'react-social-icons';
import littlelemonicon from './assets/images/little_lemon_logo(lg).jpg'

function Footer () {

    const doormatNavLinks = [<a>Home</a>, <a>About</a>, <a>Menu</a>, <a>Reservations</a>, <a>Order Online</a>, <a>Login</a> ];
    const contactsLinks = ['Address: 123 Anyway St. Chicago IL 12345', 'Phone: (888) 555-1234', 'Email: info@littlelemon.com'];
    const socialMediaLinks = [<SocialIcon url="https://twitter.com" />, <SocialIcon url="https://facebook.com" />];

    return (
    <div className='footer'>
        <img src={littlelemonicon} alt=''/>
        <FooterLinks items={doormatNavLinks}/>
        <FooterLinks items={contactsLinks}/>
        <FooterLinks items={socialMediaLinks}/>
    </div>
    );
}

export default Footer;