import React from 'react';
import FooterImage from '../Images/phone-app.png';
import ButtImg1 from '../Images/playstore.png'
import ButtImg2 from '../Images/appstore.png'


const ThirdFooter = () => {
    return(
        <>
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col-md-5">
                    <img src={FooterImage} className='pl-5 pr-0' alt=""/>
                </div>
                <div className="col-md-4 my-auto thirdfooterborder pl-0 ">
                    <h1 className='thirdfooterhead'><b> TRY THE OLX APP</b></h1>
                    <h5 className='thirdfooterp  mr-4'>Buy, sell and find just about anything using the app on your mobile.</h5>
                </div>
                <div className="col-md-3 pl-4 mb-0 pb-0">
                    <p className='thirdfooterp2 mt-2 mb-0'><b>GET YOUR APP TODAY</b></p><br/>
                    <span>
                        <span><a href='#' className='thirdFooterimga'><img className='thirdFooterimg img-fluid'  src={ButtImg1}/></a></span>
                        <span><a href='#' className='thirdFooterimga'><img className='thirdFooterimg img-fluid'  src={ButtImg2}/></a></span>
                        </span>
                </div>
            </div>
        </div>
        </>
    )
};

export default ThirdFooter;