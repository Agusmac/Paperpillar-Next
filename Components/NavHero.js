import Image from 'next/image'
import React, { useState, } from 'react'
import { useInView } from 'react-intersection-observer';
import Swal from 'sweetalert2';

const Hamburguer = "/images/icon-hamburger.svg"
const Cross = "/images/icon-close.svg"


const NavHero = ({ footView, alert }) => {

    const { ref, inView } = useInView({
        rootMargin: '-150px',
    });

    function double(a) {
        setExpanded(!expanded)
        if (a) {
            alert2()
        } else {
            alert()
        }
    }
    function alert2() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Work in progress...',
        })
    }

    const [expanded, setExpanded] = useState(false)


    return (
        <>
            <div className='NavHero'>
                <div className='Nav flex apart'>
                    <div>
                        <Image src="/images/logo-light.png" alt="paperpillar Icon" width={50} height={25} />
                    </div>

                    <div className={`burguer ${expanded ? "" : "wobble-ver-right"}`} onClick={() => setExpanded(!expanded)}>
                        {expanded ? <Image src={Cross} alt="paperpillar Icon" width={23.6} height={25} />
                            : <Image src={Hamburguer} alt="paperpillar Icon" width={28.6} height={25} />}
                    </div>


                    <div className={`navbar flex  ${expanded ? "display" : "displaynone"}`}>
                        <div onClick={() => setExpanded(!expanded)} className='selected'>HOME</div>
                        <div onClick={() => double(true)}>BLOG(W.I.P)</div>
                        <div onClick={() => double(false)}>CONTACT(W.I.P)</div>
                    </div>
                </div>
                <div className='Hero'>
                    <div className='flex apart heroDuo'>
                        <div className='heroguy2 floatHover'>
                            <Image src="/images/hero-guy-2.png" alt="icon" width={171} height={140} />
                        </div>
                        <div className='floatHover'>
                            <Image src="/images/hero-girl.png" alt="icon" width={600} height={300} quality={100} />
                        </div>
                    </div>
                    <h1>We Are Paperpillar</h1>
                    <p>A team of passionate designers and developers from Yogyakarta</p>
                    <div className='fix spacerBot2' ref={ref}>
                        <div className='unfix'>

                            <div onClick={alert} className={`btn btnWhite  ${inView ? "" : "btntransformed"}  ${footView ? "infootview" : ""}`}>
                                {inView ? `LET'S TALK!` : <i aria-hidden className="far fa-envelope"></i>}
                            </div>

                        </div>
                    </div>
                    <div className='flex JflexEnd hero3 displaynonemobile'>
                        <Image src="/images/hero-guy-3.png" alt="hero3" width={350} height={424} />
                    </div>
                </div>
                <div className='actual-hero'>
                    <div className="hero-with-foot" style={{ position: 'relative', top: '15px' }}>
                        <Image src="/images/Hero-with-foot2.png" alt="hero3" width={1920} height={864} quality={100} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavHero