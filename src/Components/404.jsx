import React from 'react';
import Img from '../Images/img7.JPG';
import Button from '@material-ui/core/Button';
import ImgOops from '../Images/404.png'
import Header from './Header';
import AllCatogary from './AllCatogary';
import Footer from './Footer';
import SecondFooter from './SecondFooter'


const NotFoud = () => {
    return (
        <>
<Header />
<AllCatogary />
            <div className="container mx-auto">
                <div className="row ">
                    <div className="col-md-6 text-center">
                        <h1 style={{fontSize:'112px',fontFamily:"Roboto"}}>Oops!</h1>
                        <h5 style={{fontSize:'32px',fontFamily:"Roboto"}}>We can't seem to find that. <br /> Try searching for it.</h5>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={ImgOops} className='img-fluid ' alt="" />
                    </div>
                </div>
            </div>
            <div style={{position:'fixed',bottom:'0',width:'100%'}}>
            <SecondFooter />
            <Footer />  
            </div>
        </>
    )
}


export default NotFoud;