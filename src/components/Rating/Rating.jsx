import '../../style/Rating.css'

function Rating({ratingObtained, maximumPossibleRating}) {
    const starOff = maximumPossibleRating-ratingObtained;
    console.log(starOff);

    const stars= [];
    for(let lulu=0; lulu<ratingObtained; lulu++) {
        stars.push("fa-solid fa-star starObtained")
     }

     for(let lolo=0; lolo<starOff; lolo++) {
        stars.push("fa-solid fa-star starNoObtained")
     }

    return ( 
        <div>   
            {stars.map((star) => (  
            <i className= {star} ></i>
            ))}
        </div> 
    )

}

export default Rating