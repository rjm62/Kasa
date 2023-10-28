import { useState } from 'react'
import '../../style/Collapse.css'

function Collapse({oups}) {
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);
         
    return isOpenCollapse ? (
        <div className='collapse'>
            <div className="collapseOrder" onClick={() => setIsOpenCollapse(false)}>
                <p className='collapseTitle'>ouvert</p>   
                <button  className="collapseIcon rotateOpeningIcon"><i class="fa-solid fa-chevron-down"></i></button>
            </div>
            <div className='collapseContent appearanceContent'>
                <p>{oups}</p>
            </div>
        </div>
        ): (
        <div className='collapse'>
            <div className="collapseOrder"onClick={() => setIsOpenCollapse(true)}> 
                <p className='collapseTitle'>fermé</p>
                <button  className="collapseIcon rotateClosingIcon" ><i class="fa-solid fa-chevron-up"></i></button> 
            </div>  
                <div className='collapseContent disappearanceContent'></div>
           
        </div>
        
            )
}

export default Collapse