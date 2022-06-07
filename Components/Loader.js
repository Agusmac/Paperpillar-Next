import React, { useEffect } from 'react'

// -YOU CANT MAKE A LOADER JUST TO HIDE THE NAVBAR EXIT ANIMATION
// ME(a CSS Genius):u sure about that?

const Loader = () => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".loaderDanbee").classList.add("dissapearer")
        }, 1000);
        setTimeout(() => {
            document.querySelector(".loaderDanbee").classList.add("DAunexister")
        }, 2000);
      
    }, [])

    return (
        <div className='loaderDanbee'>
            <div><h1>MacroStore</h1></div>
        </div>
    )
}

export default Loader