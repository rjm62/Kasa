import { useState} from 'react'
import '../../style/Collapse.css'

function Collapse({text, title, isArray}) {
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);
    const [iconCloseClassName, setIconCloseClassName] = useState("collapseIcon")
    const [contentClassName, setContentClassName] =useState("collapseContent")

    console.log(isArray)

    const closeIconValidate = ()=> { 
        setIsOpenCollapse(false)
        setIconCloseClassName ("collapseIcon rotateClosingIcon")
        setContentClassName("collapseContent disappearanceContent")
         }

    return isOpenCollapse ? (   
        <div className='collapse' onClick = {closeIconValidate}>
            <div className="collapseOrder" >
                <p className='collapseTitle'>{title}</p>   
                <button  className="collapseIcon rotateOpeningIcon"><i class="fa-solid fa-chevron-down"></i></button>
            </div>
            <div className='collapseContent appearanceContent'>

                { isArray=== true ? (
                     <div> {text.map(( detail) => {    
                        return <p>{detail}</p>
                      })}
                      </div>
                     ) : (
                    <p>{text}</p>                   
                )}              

            </div>
        </div>
        ):  (    
        <div className='collapse'  onClick={() => setIsOpenCollapse(true)}>
            <div className="collapseOrder"> 
                <p className='collapseTitle'>{title}</p>
                <button  className={iconCloseClassName} ><i class="fa-solid fa-chevron-up "></i></button> 
            </div>  
            <div className= {contentClassName}></div>    
         </div>
            
    )
}

export default Collapse