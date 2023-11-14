import {useState} from 'react'
import '../../style/Carrousel.css'

function Carrousel({image}) {
    const [selection, setSelection] = useState(0)
    const [selectionNumber, setSelectionNumber] = useState(1)
    
    const previous = () => {
        if (selection>0) {
        setSelection(selection-1);
        setSelectionNumber(selectionNumber-1)
        }
        else {
            setSelection(image.length-1)
            setSelectionNumber(image.length)
        }
    }

    const next = () => {
        if (selection<image.length-1) {
        setSelection(selection+1);
        setSelectionNumber(selectionNumber+1)
        }
        else {
            setSelection(0)
            setSelectionNumber(1)
        }
    }
    
    return (
        <div className='carrousel'>
            { image.length>2 ? (
                <div className='chevron'> 
                    <i onClick={previous}  className= "fa-solid fa-chevron-left" ></i>
                    <i onClick={next} className="fa-solid fa-chevron-right" ></i>   
                </div>
            ):("")}       
            <p> {selectionNumber}/{image.length} </p>
            <img src={image[selection]} alt ="appartement"></img>           
        </div>    
    )
}

export default Carrousel;