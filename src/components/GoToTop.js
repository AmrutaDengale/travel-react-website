import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';

const GoToTop = ()=>{
    const [isVisible, setIsVisible] = useState(false);
const goTobtn =()=>{
    window.scrollTo({top:0, left:0, behavior:'smooth'})
};

    const listenToScroll =() =>{


        let heightToHidden = 250;
        const winScroll = 
        document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden){
            setIsVisible(true)
        }else{
            setIsVisible(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',listenToScroll);
        return ()=>  window.removeEventListener("scroll", listenToScroll);
    }, []);

    return( 
    <>
    <section className='goto-top'>
        {isVisible && (
    <div className="top-btn" onClick={goTobtn}>
            <div className="top-btn--icon">
                <i class="fa-solid fa-arrow-up"></i>
            </div>
    </div>
        )}
    </section>
    </>
    )
 


    
};
export default GoToTop;