import Banner from "../../components/Banner/Banner"
import homeBannerPicture  from '../../assets/img/homeBannerPicture.png'
import Cards from "../../components/Cards/Cards"
import "../../style/Home.css"

function Home() {
    return (
        <main className="homeBody">
            <Banner image= {homeBannerPicture} comment= "Chez vous, partout et ailleurs"/>
            <Cards />
        </main>
    )
}

export default Home;