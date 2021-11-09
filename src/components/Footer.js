import Email from '../static/images/icons/email.svg'
import Support from '../static/images/icons/support.svg'
import Share from '../static/images/icons/share.svg'
const Footer = () => {
    return(
        <div id='footer'>
            <div id='footer-content'>
                <div id='icon-group'>
                    <img src={Email}/>
                    <img src={Support}/>
                    <img src={Share}/>
                </div>
                <p id='copyright'><span>&copy;</span> 2021 harrisonBarnett</p>
            </div>
            
        </div>
    )
}
export default Footer