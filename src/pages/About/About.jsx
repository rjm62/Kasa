import aboutBannerPicture from '../../assets/img/aboutBannerPicture.png'
import colls from '../../datas/aboutDatas.js'
import Banner from '../../components/Banner/Banner'
import Collapse from "../../components/Collapse/Collapse"
import '../../style/About.css'

function About() {
   

   return  (
        <main className='aboutMain'>
            <Banner image= {aboutBannerPicture} comment= {""} /> 
            <div className='collapseAboutContainer'>
                { colls.map((coll) => { 
                    return (
                        <Collapse title={coll.title} text={coll.text}/>  
                    
                    )     
                })} 
            </div>
        </main>
    )
}

export default About;