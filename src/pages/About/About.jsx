import aboutBannerPicture from '../../assets/img/aboutBannerPicture.png'
import Banner from '../../components/Banner/Banner'
import Collapse from "../../components/Collapse/Collapse"

function About() {
    return (
        <div>
            <Banner image= {aboutBannerPicture} comment= {""} />
            <Collapse />
        </div>
    )
}

export default About;