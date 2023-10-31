import '../../style/Banner.css'

function Banner({image, comment}) {
    return (
        <div >
            <figure className='bannerContainer'>
                <img src={image} alt=" image de la bannière" />
                <figcaption>{comment}</figcaption>
            </figure>
        </div>
    )
}

export default Banner