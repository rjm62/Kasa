import footerLogo  from '../../assets/img/footerLogo.png'
import '../../style/Footer.css'


function Footer() {
    return (
        <div className='footerContainer'>
            <figure className='logoFooterContainer'>
                <img src={footerLogo} alt="logo footer" />
            </figure>
            <figure className='copyrightContainer'>
                <p><i className="fa-regular fa-copyright"></i> 2020 Kasa. All rights reserved</p>
            </figure>         
        </div>
    )
}
export default Footer;