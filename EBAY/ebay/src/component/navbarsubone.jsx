import { Link } from 'react-router-dom';
import './navbarsubone.css'
import { TfiBell } from "react-icons/tfi";
import { BiCart } from "react-icons/bi";
import { useContext } from 'react';
import { myContext } from './Context/AuthContextProvider';

function NavbarSubOne() {
    const { loginUser } = useContext(myContext);

    const handleBellClick = () => {
        if (!loginUser) {
            alert("Please sign in to view items you are watching.");
        }
        
    };


    const handleCart = () => {
        if(!loginUser) {
            return (
                <>
                <b>Your cart is empty </b>
                <span>Time to start shopping!</span>
                </>
            )
        }
    }

    return (
        <>
            <div className='main'>
                <div className="superior">
                    <section className='superior-one-one'>
                        <span>Hi!</span>{' '}
                        <Link to="sign-in">Sign in</Link>{' '}
                        <span>or</span>{' '}
                        <Link to='register'>register</Link>
                    </section>
                    <section className='superior-one-two'>Daily Deals</section>
                    <section className='superior-one-three'><span>Help & Contact</span></section>
                </div>
                <div className="inferior">
                    <div className="inferior-one-one"><span>Sell</span></div>
                    <div className="inferior-one-two">
                        <select>
                            <option value="">Watchlist</option>
                        </select>
                    </div>
                    <div className="inferior-one-three">
                        <select name="My eBay" id="">
                            <option value="">My eBay</option>
                        </select>
                    </div>
                    <div className="inferior-one-four">
                        <TfiBell onMouseOver={handleBellClick} />
                    </div> 
                    <div className="inferior-one-five">
                        <BiCart onMouseOver={handleCart}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarSubOne;
