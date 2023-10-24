import '../../style/Cards.css'
import {apartments} from '../../datas/ApartmentsDatas'

function Cards() { 
    return (
        <div className='cardsContainer'>
                { apartments.map((apartment) => { 
                    return (
                        <figure key= {apartment.identifiant} className='card'>
                            <img src={apartment.cover} alt= 'première photo' />
                            <figcaption> {apartment.title}</figcaption>
                        </figure>
                )     
                })}
        </div>
    )
}
export default Cards