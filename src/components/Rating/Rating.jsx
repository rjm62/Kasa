import '../../style/Rating.css'

function Rating({ratingObtained, maximumPossibleRating}) {
    const stars= [];
    var starNumber=0;
    
    for(starNumber=0; starNumber<ratingObtained; starNumber++) {
        stars.push({id:starNumber, text:'fa-solid fa-star starObtained'})
    }
    for(starNumber = ratingObtained; starNumber<maximumPossibleRating; starNumber++) {
        stars.push({id:starNumber, text:'fa-solid fa-star starNoObtained'})
    }

    return ( 
        <div className='starContainer'>   
            {stars.map((star) => (  
            <i key={star.id} className= {star.text} ></i>
            ))}
        </div> 
    )
}

export default Rating