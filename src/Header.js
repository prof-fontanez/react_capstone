import logo from './assets/images/little_lemon_logo(sm).jpg'

function Header () {

    return (
        <header>
            <meta name="description" content="The Little Lemon restaurant website"/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:image" content="https://unsplash.com/photos/focus-photography-of-pumpkin-V1dae2Jj6-0"/>
            <img src={logo} alt="Little Lemon's logo" />
        </header>

    );
}

export default Header;