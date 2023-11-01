import '../../style/Banner.css'

function Banner({image, comment}) {
    return (
        <div >
            <figure className='bannerContainer'>
                <img src={image} alt="paysage" />
                <figcaption>{comment}</figcaption>
            </figure>
        </div>
    )
}

export default Banner