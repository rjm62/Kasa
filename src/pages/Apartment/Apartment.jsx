import {useParams} from 'react-router-dom'
import Error404 from '../Error404/Error404'
import Collapse from '../../components/Collapse/Collapse'
import Carrousel from '../../components/Carrousel/Carrousel'
import Rating from '../../components/Rating/Rating'
import Tag from '../../components/Tag/Tag'
import apartments from '../../datas/ApartmentsDatas.json'
import tagsDatas from '../../datas/tagsDatas'
import '../../style/Apartment.css'

function Apartment() {
    const {id} = useParams();
    

   const apartmentDetails = apartments.filter((apartment) => apartment.identifiant === id)
   
  
    return (

         apartmentDetails ? (
        <main>
            <div className='carrouselContainer'>
                <Carrousel image={apartmentDetails[0]['des photos']} />         
            </div>


            <div className='informationsContainer'>
                <div className='locationInformations'>
                    <h5>{apartmentDetails[0].title}</h5>
                    <p>{apartmentDetails[0].location}</p>
                </div>
                <div className='ownerInformations'>
                    <div className='ownerName'>
                        <p>{apartmentDetails[0].hôte.nom}</p>
                    </div>
                    <figure>
                        <img src={apartmentDetails[0].hôte.photo} alt= "portrait"></img>
                    </figure>
        
                </div>
            </div>
            
            <div className='tagsAndRatingContainer'>
                <div className='tagsContainer'>
                    { tagsDatas.map((tagData) => {
                        return(
                            <Tag tagText= {tagData.text} />
                        )
                    })}
                    
                </div>
                <div className='ratingPosition'>
                    <Rating  ratingObtained={apartmentDetails[0].note}  maximumPossibleRating={5} />
                </div>
            </div>
            <div className='collapseApartmentContainer'>
                <div className='collapseApartmentPosition'>
                    <Collapse title= "description" text= {apartmentDetails[0].description} />
                </div>
                <div className='collapseApartmentPosition'>
                    <Collapse title= "équipements" text= {apartmentDetails[0].équipements.join("', '")} />
                </div>
            </div> 
        </main>
        ) :  
        <Error404 />       
    )
 }

 export default Apartment