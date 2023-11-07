import { useState} from 'react'
import '../../style/Collapse.css'

function Collapse({text, title}) {
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);
    const [iconCloseClassName, setIconCloseClassName] = useState("collapseIcon")
    const [contentClassName, setContentClassName] =useState("collapseContent")
    const donnees = {text}
    const roro = donnees.toString();
    console.log(roro)
    const toto = [donnees.text]
    console.log(toto)
    const mickey = toto.length;
    console.log(mickey)


    console.log(donnees)

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
                { toto.map((to) => { 
                    return (
                    <p>{to}</p> 
                    )
                })}
               
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