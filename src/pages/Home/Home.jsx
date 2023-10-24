import Banner from "../../components/Banner/Banner"
import homeBannerPicture  from '../../assets/img/homeBannerPicture.png'
import Cards from "../../components/Cards/Cards"
import "../../style/Home.css"

function Home() {
    return (
        <div className="homeBody">
            <Banner image= {homeBannerPicture} comment= "Chez vous, partout et ailleurs"/>
            <Cards />
        </div>
    )
}

export default Home;