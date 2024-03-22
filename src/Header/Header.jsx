import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>This is main page</h2>
            <nav>
               
                <Link to="/">Home</Link>
                <NavLink to="/users">users</NavLink>
              
                <NavLink to="/posts">Posts</NavLink>
              
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;