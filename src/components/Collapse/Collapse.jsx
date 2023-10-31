import { useState } from 'react'
import '../../style/Collapse.css'

function Collapse({text, title}) {
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);
    const [toto, setToto] = useState(0);
         
    return isOpenCollapse ? (
        <div className='collapse'onClick={() => setIsOpenCollapse(false)}>
            <div className="collapseOrder" >
                <p className='collapseTitle'>{title}</p>   
                <button  className="collapseIcon rotateOpeningIcon"><i class="fa-solid fa-chevron-down"></i></button>
            </div>
            <div className='collapseContent appearanceContent'>
                <p>{text}</p>
            </div>
        </div>
        ): (
        <div className='collapse'  onClick={() => setIsOpenCollapse(true)}>
            <div className="collapseOrder"> 
                <p className='collapseTitle'>{title}</p>
                <button  className="collapseIcon rotateClosingIcon " ><i class="fa-solid fa-chevron-up "></i></button> 
            </div>  
            <div className='collapseContent disappearanceContent'></div>    
        </div>
    )
}

export default Collapse