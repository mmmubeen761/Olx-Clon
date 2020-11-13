import React from 'react';
import Img from '../Images/img7.JPG';
import Header from './Header';
import AllCatogary from './AllCatogary';
import Footer from './Footer';
import SecondFooter from './SecondFooter'
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';



const System = () => {

    //............... locarion
    const location = useLocation();
    const history = useHistory();


    return (
        <>
            <Header />
            <AllCatogary />

            <div className="container-fluid">
                <div className="row">
                    <div className="text-center mt-auto">
                        <img src={Img} className='img-fluid my-5' alt="" /><br/>
                        <h1 className='text-center'>Something Went Wrong!</h1>
                    </div>
                    <Button variant="outlined" color="primary" onClick={() => history.push('/home')} className='my-5 fixed-bottom mb-2' id='LoadMoreBtn'>
                        Go Back </Button>
                </div>
            </div>
            <div style={{ position:'relative', bottom:'0', width: '100%' }}>
                <SecondFooter />
                <Footer />
            </div>
        </>
    )
}


export default System;