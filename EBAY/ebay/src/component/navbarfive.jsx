import { Link } from 'react-router-dom';
import './navbarfive.css'

function NavbarFive() {
        return (
            <>
            <div className="main-five">
                <div className="main-one">
                      <h2 className="main-five-one">Explore Popular Categories</h2>
                </div>

              
                <div className="main-two">
                    <section className='main-two-one'>
                    <img src={"https://ir.ebaystatic.com/cr/v/c01/01_P_Aeng.jpg"} alt={"#"} className="circle-img" />
                    <p className='content'>Parts & accessories</p>
                    </section>
                    <section className='main-two-one'>
                        <img src={"https://ir.ebaystatic.com/cr/v/c01/01_Trading Cards.jpg"} alt={"#"} className="circle-img"/>
                        <p className='content'>Trading cards</p>
                    </section>
                    <section className='main-two-one'>
                        <img src={"https://ir.ebaystatic.com/cr/v/c01/03_Pre-loved Luxuryeng.jpg"} alt={"#"} className="circle-img"/>
                        <p className='content'>Pre-loved luxury</p>
                    </section>
                    <section className='main-two-one'>
                        <img src={"	https://ir.ebaystatic.com/cr/v/c01/04_Sneakerseng.jpg"} alt={"#"} className="circle-img"/>
                        <p className='content'>Sneakers</p>
                    </section>
                    <section className='main-two-one'>
                        <img src={"https://ir.ebaystatic.com/cr/v/c01/05_Watcheseng.jpg"} alt={"#"} className="circle-img"/>
                        <p className='content'>Watches</p>
                    </section>
                    <section className='main-two-one'>
                        <img src={"https://ir.ebaystatic.com/cr/v/c01/06_Handbagseng.jpg"} alt={"#"} className="circle-img"/>
                        <p className='content'>Handbags</p>
                    </section>
                    <section className='main-two-one'>
                        <img src={"https://ir.ebaystatic.com/cr/v/c01/07_Start Sellingeng.jpg"} alt={"#"} className="circle-img"/>
                        <p className='content'>Start selling</p>
                    </section>
                    
                </div>

            </div>
           

            </>
        )
}

export default NavbarFive;