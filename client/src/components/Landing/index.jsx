import { Link } from 'react-router-dom';
import './landing.css'

function Landing() {
    return (
        <div className="container">
            <h2>Breaking Bad</h2>
            <Link to='/characters'>
                <button type="button" className="btn btn-outline-primary">WELCOME</button>
            </Link>
        </div>
    );
};

export default Landing;