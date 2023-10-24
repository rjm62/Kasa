import footerLogo  from '../../assets/img/footerLogo.png'
import '../../style/Footer.css'


function Footer() {
    return (
        <div className='footerContainer'>
            <picture className='logoFooterContainer'>
                <img src={footerLogo} alt="logo footer" />
            </picture>
            <picture className='copyrightContainer'>
                <p><i class="fa-regular fa-copyright"></i> 2020 Kasa. All rights reserved</p>
            </picture>         
        </div>
    )
}
export default Footer;