import React from 'react'
import Image from 'next/image'

const Content = () => {


    return (
        <div className='content'>
            <h2 className='margincenter textcenter playfairFont spacerBotLight'>What We Do</h2>
            <hr className='redhr' />
            <div className={`iconsgrid grid margincenter textcenter`}>
                <div >
                    <div className="icon-img margincenter">
                        <Image src="/images/Ui-ux-icon.png" alt="icon" width={150} height={150} />
                    </div>
                    <h3>UX/UI</h3>
                    <p>Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
                </div>
                <div >
                    <div className="icon-img margincenter">
                        <Image src="/images/GHOSTY.png" alt="icon" width={150} height={153} />
                    </div>
                    <h3>Icon/ Illustration</h3>
                    <p>Character Design, Icon Set, Illustration Guide, Illustration Set</p>
                </div>
                <div >
                    <div className="icon-img margincenter">
                        <Image src="/images/third-icon.png" alt="icon" width={150} height={150} />
                    </div>
                    <h3>Branding</h3>
                    <p>Visual Identity, Stationary Kit, Marketing Materials</p>
                </div>
                <div >
                    <div className="icon-img margincenter">
                        <Image src="/images/4to-item.png" alt="icon" width={150} height={153} />
                    </div>
                    <h3>Development</h3>
                    <p>HTML/CSS, JavaScript Animation, WordPress, Responsive Website</p>
                </div>
                <div >
                    <div className="icon-img margincenter">
                        <Image src="/images/5to-icon.png" alt="icon" width={150} height={153} />
                    </div>
                    <h3>Motion</h3>
                    <p>2D Animation, UI Motion</p>
                </div>
                <div >
                    <div className="icon-img margincenter">
                        <Image src="/images/6to-icon.png" alt="icon" width={150} height={153} />
                    </div>
                    <h3>Photography</h3>
                    <p>Travel Photography, Product Photography</p>
                </div>
            </div>

            <h2 className='margincenter textcenter playfairFont spacerBotLight'>Clients</h2>
            <p className='margincenter textcenter loraFont spacerBotLight clientsP'>We’ve been working with teams around the world.</p>
            <hr className='redhr' />

            <div className='clientsGrid flex margincenter'>

                <div className='dissmall'>
                    <div>
                        <Image src="/images/teachable.png" alt="icon" width={200} height={36} />
                    </div>
                </div>

                <div className='dissmall'>
                    <div><Image src="/images/roger.png" alt="icon" width={202} height={62} /></div>
                    <div><Image src="/images/grab.png" alt="icon" width={180} height={70} /></div>
                </div>

                <div>
                    <div className="displaysmall"><Image src="/images/roger.png" alt="icon" width={202} height={62} /></div>

                    <div className='client2'>
                        <Image src="/images/hoopsai.png" alt="icon" width={220} height={54} />
                    </div>

                    <div className='client1'><Image src="/images/agoda.png" alt="icon" width={180} height={76} /></div>
                    <div className='client2'> <Image src="/images/getsafe.png" alt="icon" width={190} height={54} /></div>

                    <div className="displaysmall"><Image src="/images/grab.png" alt="icon" width={180} height={70} /></div>
                </div>

                <div className='dissmall'>
                    <div><Image src="/images/flyr.png" alt="icon" width={164} height={52} /></div>
                    <div><Image src="/images/anyleads.png" alt="" width={200} height={48} /></div>
                </div>
                <div className='dissmall'>
                    <div><Image src="/images/crisp.png" alt="" width={190} height={54} /></div>
                </div>
            </div>

        </div>
    )
}

export default Content