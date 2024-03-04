import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './navbarfour.css'; 

function NavbarFour() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="b-b">
                    <div className="II">
                        <div className="I-f" id="s"><b>It's Pokémon <br /> Day - get 'em <br/> all!</b></div>
                        <div className="I-f" id="t"><h6>Complete your collection with <br/> new, valuable and hard to find</h6></div>
                        <div className="I-f" id="f"><button>Start the hunt</button></div> 
                    </div>
                    <div className="III">
                        <img id="imge2"src={"https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/lW4AAOSw5c5lxK1o/$_57.JPG"} alt={"*"} />
                    </div>
                </div>
            </div>
            <div>
                {/* Add content for second slide here */}
                <div className="b-b">
                    <div className="II">
                        <div className="I-f" id="s"><b>Discover a<br />Kaleidoscope of<br/>cards</b></div>
                        <div className="I-f" id="t"><h6>Build your collection of trading <br /> cards and collectible card games.</h6></div>
                        <div className="I-f" id="f"><button>Find your favorities</button></div> 
                    </div>
                    <div className="III">
                        <img id="imge2"src={"https://i.ebayimg.com/images/g/jfYAAOSw6rhlbyzM/s-l960.webp"} alt={"*"} />
                    </div>
                </div>
            </div>
            
        </Slider>
    );
}

export default NavbarFour;
