import {useParams} from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import Carrousel from '../../components/Carrousel/Carrousel'
import Error404 from '../../pages/Error404/Error404'
import Rating from '../../components/Rating/Rating'
import Tag from '../../components/Tag/Tag'
import apartments from '../../datas/ApartmentsDatas.json'
import tagsDatas from '../../datas/tagsDatas'
import '../../style/Apartment.css'

function Apartment() {
    const {id} = useParams();
   const apartmentDetails = apartments.filter((apartment) => apartment.identifiant === id)

         if (apartmentDetails[0] ===undefined)  { 
            return (
                <Error404 />
            )}
            else { 
                const regSep = /[ ]+/gi;
                var nomPrenom=[]
                if (apartmentDetails[0].hôte.nom ===undefined) {
                    nomPrenom= apartmentDetails[0].hôte.name.split(regSep) 
                }
                else {
                    nomPrenom= apartmentDetails[0].hôte.nom.split(regSep) 
                }

            return (
        <main className='apartmentMain'>
            <div className='carrouselContainer'>
                <Carrousel image={apartmentDetails[0]['des photos']} />         
            </div>
            <div className='informationsContainer'>
                <div className='locationAndNavInformations'>
                    <h5>{apartmentDetails[0].title}</h5>
                    <p>{apartmentDetails[0].location}</p>
                    <div className='tagsContainer'>
                        { tagsDatas.map((tagData) => {
                            return(
                                 <Tag key={tagData.id} tagText= {tagData.text} />
                            )
                        })}                  
                    </div>  
                </div>

                <div className='ownerAndRatingInformations'>
                    <div className='owner'>
                        <div className='name'>
                            <p>{nomPrenom[0]}</p>
                            <p>{nomPrenom[1]}</p>
                        </div>
                        <figure className='picture'>
                            <img src={apartmentDetails[0].hôte.photo} alt= "portrait"></img>
                        </figure>
                    </div> 
                        <Rating  ratingObtained={apartmentDetails[0].note}  maximumPossibleRating={5} />
                    </div>
                </div>           
            
            <div className='collapseApartmentContainer'>
                <div className='collapseApartmentPosition'>
                    <Collapse key={1} title= "description" text= {apartmentDetails[0].description} isArray= {false} />
                </div>
                <div className='collapseApartmentPosition'>
                    <Collapse key={2} title= "équipements" text= {apartmentDetails[0].équipements} isArray= {true} />
                </div>
            </div> 
        </main>
    )}
 }

 export default Apartment