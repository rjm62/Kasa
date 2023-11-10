import { Link } from 'react-router-dom'
import '../../style/Cards.css'
import apartments from '../../datas/ApartmentsDatas.json'

function Cards() { 
    return (
        <section className='cardsContainer'>
            { apartments.map((apartment) => { 
                return (
                    <Link key= {apartment.identifiant} to={`/Apartment/${apartment.identifiant}/`}>  
                        <figure className='card'>   
                            <img src={apartment.cover} alt= 'caroussel' />
                            <figcaption> {apartment.title}</figcaption>
                        </figure>
                    </Link> 
                )     
            })}
        </section>
    )
}
export default Cards