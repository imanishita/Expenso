import { Link } from 'react-router-dom';
import '../assets/styles/welcome.css';
import Logo from '../components/utils/Logo';

function Welcome() {
    return (
        <section className="hero-section">
            <Logo/>
            <h3>Welcome to Expenso!</h3>
            <h3>Achieve financial freedom with Expenso.
            Effortlessly track your spending, stay on top of your budget, and take control of your financial journey — all in one smart, intuitive app.</h3>
            <div>
                <Link to='/auth/login'><p><button>Log in</button></p></Link>
                <Link to='/auth/register'><button>Create Account</button></Link>
            </div>
        </section>
    )
}

export default Welcome;