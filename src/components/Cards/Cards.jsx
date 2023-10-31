import { Link } from 'react-router-dom'
import '../../style/Cards.css'
import apartments from '../../datas/ApartmentsDatas.json'

function Cards() { 
    return (
        <section className='cardsContainer'>
            { apartments.map((apartment) => { 
                return (
                    <Link to={`/Apartment/${apartment.identifiant}/`}>  
                        <figure key= {apartment.identifiant} className='card'>   
                            <img src={apartment.cover} alt= 'première photo' />
                            <figcaption> {apartment.title}</figcaption>
                        </figure>
                    </Link> 
                )     
            })}
        </section>
    )
}
export default Cards