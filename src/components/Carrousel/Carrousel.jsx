import {useState} from 'react'
import '../../style/Carrousel.css'

function Carrousel({image}) {
    const [selection, setSelection] = useState(0)
    // const [chevronLeft, setChevronLeft] = useState("fa-solid fa-chevron-left")

    // if(image.length<2) {
    //     setChevronLeft(chevronLeft(""))
    // }
    
    const previous = () => {
        if (selection>0) {
        setSelection(selection-1);
        }
        else {
            setSelection(image.length-1)
        }
    }

    const next = () => {
        if (selection<image.length-1) {
        setSelection(selection+1);
        }
        else {
            setSelection(0)
        }
    }
    
    console.log({image})
    
    return (
        <div className='carrousel'>
            { image.length>2 ? (
            <div className='chevron'> 
                <i onClick={previous}  className= "fa-solid fa-chevron-left" ></i>
                <i onClick={next} className="fa-solid fa-chevron-right" ></i>   
            </div>
            ):("")}
            <p> {selection+1}/{image.length} </p>
            <figure >
                <img src={image[selection]} alt ="appartement"></img>
            </figure> 
        </div>    
    )
}

export default Carrousel;