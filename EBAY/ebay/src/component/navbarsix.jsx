import './navbarsix.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

function NavbarSix() {
    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <>
        <div id="parent">
            <div className='child1' id="first"><Link to="today-deal">Today's Deals - All With Free Shipping </Link></div>
            <div className='child1' id="second"><Link to="see-all">See all</Link></div>
        </div>
            <Carousel responsive={responsive}>
                <Link className='child2'>
                    <div className="child2-one">
                        <img id='images' src={"https://i.ebayimg.com/thumbs/images/g/QFAAAOSw5AlkioHB/s-l500.webp"} alt={"*"} />
                    </div>
                    <article className="child2-one">
                        <div className="child2-innerchild">PUMA Women's Riaze Prowl</div>
                        <div className="child2-innerchild"><b>$74.99</b>$85.00</div>
                    </article>
                   
                </Link>
                <Link className='child2'>
                <div className="child2-one">
                <img id="images" src={"https://i.ebayimg.com/thumbs/images/g/0eYAAOSwcHZlMDWu/s-l500.webp"} alt={"*"} />
                </div>
                    <article className="child2-one">
                        <div className="child2-innerchild">Intel - Core i7-14700K 14th Gen ...</div>
                        <div className="child2-innerchild" id="price">See Price $444.99</div>
                    </article>
                </Link>


                <Link className='child2'>
                <div className="child2-one">
                <img id="images" src={"https://i.ebayimg.com/thumbs/images/g/jjoAAOSw2~dhS2Sd/s-l500.webp"} alt={"*"} />
                </div>
                    <article className="child2-one">
                        <div className="child2-innerchild">Apple iPhone 12 64GB Unlocked</div>
                        <div className="child2-innerchild"><b>$259.95</b> $799.00</div>
                    </article>
                </Link>
                <Link className='child2'>
                <div className="child2-one">
                    <img id="images" src={"https://i.ebayimg.com/thumbs/images/g/NrsAAOSwQkRlt-7I/s-l500.webp"} alt={"*"} />
                </div>
                    <article className="child2-one">
                        <div className="child2-innerchild">Microsoft Surface 13" Pro 9 Tablet</div>
                        <div className="child2-innerchild"><b>$596.00</b>$849.00</div>
                    </article>
                </Link>
                <Link className='child2'>
                <div className="child2-one">
                    <img id="images" src={"https://i.ebayimg.com/thumbs/images/g/S3UAAOSwLAxkCOeJ/s-l500.webp"} alt={"*"} />
                </div>
                    <article className="child2-one">
                        <div className="child2-innerchild">Microsoft Surface 13" Pro 9 Tablet</div>
                        <div className="child2-innerchild"><b>$596.00</b>$849.00</div>
                    </article>
                </Link>
                <Link className='child2'>
                <div className="child2-one">
                    <img id="images" src={"https://i.ebayimg.com/thumbs/images/g/kO4AAOSw8~xlPArk/s-l500.webp"} alt={"*"} />
                </div>
                    <article className="child2-one">
                        <div className="child2-innerchild">Microsoft Surface 13" Pro 9 Tablet</div>
                        <div className="child2-innerchild"><b>$596.00</b>$849.00</div>
                    </article>
                </Link>
                <Link className='child2'>
                <div className="child2-one">
                    <img id="images" src={"https://i.ebayimg.com/thumbs/images/g/SzIAAOSwA9tj6s6x/s-l500.webp"} alt={"*"} />
                </div>
                    <article className="child2-one">
                        <div className="child2-innerchild">Microsoft Surface 13" Pro 9 Tablet</div>
                        <div className="child2-innerchild"><b>$596.00</b>$849.00</div>
                    </article>
                </Link>
                <Link className='child2'>
                <div className="child2-one">
                    <img id="images" src={"https://i.ebayimg.com/thumbs/images/g/i3cAAOSwlLNlMiDv/s-l500.webp"} alt={"*"} />
                </div>
                    <article className="child2-one">
                        <div className="child2-innerchild">Microsoft Surface 13" Pro 9 Tablet</div>
                        <div className="child2-innerchild"><b>$596.00</b>$849.00</div>
                    </article>
                </Link>
                <Link className='child2'>
                <div className="child2-one">
                    <img id="images" src={"https://i.ebayimg.com/thumbs/images/g/Jx4AAOSwjIdlTEMt/s-l500.webp"} alt={"*"} />
                </div>
                    <article className="child2-one">
                        <div className="child2-innerchild">Microsoft Surface 13" Pro 9 Tablet</div>
                        <div className="child2-innerchild"><b>$596.00</b>$849.00</div>
                    </article>
                </Link>
            </Carousel>
        </>
    )
}

export default NavbarSix;