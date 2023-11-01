import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import apartments from '../../datas/ApartmentsDatas.json'
import '../../style/Apartment.css'

function Apartment() {
    const {id} = useParams();
    apartments.filter((apartment) => apartment.identifiant === id)

    return (
        <main>
            
            <div className='collapseApartmentContainer'>
                <Collapse title= "Description" text= "ça va venir un peu de patience" />
                <Collapse title= "Equipement" text= "ça va venir un peu de patience" />
            </div> 
        </main>

    )
}

export default Apartment