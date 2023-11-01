import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import apartments from '../../datas/ApartmentsDatas.json'
import '../../style/Apartment.css'

function Apartment() {
    const {id} = useParams();
    apartments.filter((apartment) => apartment.identifiant === id)

    for(let i=0; i<apartments.length; i++) {
       if(apartments[i].identifiant===id) {
        console.log(i)
       }
    }

    return (
        <main>
            <figure className='sliderContainer'>
                <img src="" alt="apartement"></img>
            </figure>
            
            <div className='collapseApartmentContainer'>
                <Collapse title= "Description" text= "ça va venir un peu de patience" />
                <Collapse title= "Equipement" text= "ça va venir un peu de patience" />
            </div> 
        </main>

    )
}

export default Apartment