import '../../style/Banner.css'

function Banner({image, comment}) {
    return (
        <div >
            <div className='bannerContainer'>
                <img src={image} alt=" image de la bannière" />
                <figcaption>{comment}</figcaption>
            </div>
        </div>
    )
}

export default Banner