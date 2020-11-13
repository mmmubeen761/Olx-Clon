import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from '../Images/img1.png';
import sliderimg2 from '../Images/img2.png';
import sliderimg3 from '../Images/img3.png';
import Button from '@material-ui/core/Button';
import firebase from '../Config.jsx/firebase';
import { useHistory, useLocation } from 'react-router-dom';




const LoginForm = () => {

    const location = useLocation();
    const history = useHistory();

    const onSubmit = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var user = result.user;  
            // var token = result.credential.accessToken;
            console.log('user sign in')
            console.log(user)
            history.push('/home')
        }).catch(function (error) {
            console.log(error)
        });
    }

    const [currentUser, setCurrentUser] = useState();
    var provider = new firebase.auth.GoogleAuthProvider();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear'
    }


    return (
        <>
            <div className="container w-50">
                <div className="row">
                    <div className="col-md-12">
                        <div className='text-center loginslick mt-5 mb-5 pb-3'>
                            <Slider {...settings}  >
                                <div>
                                    <img src={sliderimg1} alt="" /><br /><br />
                                    <h5>Help make OLX safer place to buy and sell</h5>
                                </div>
                                <div>
                                    <img src={sliderimg2} alt="" /><br /><br />
                                    <h5>Contact and close deals faster</h5>
                                </div>
                                <div>
                                    <img src={sliderimg3} alt="" /><br /><br />
                                    <h5>Save all your favourite items in one place</h5>
                                </div>
                            </Slider>
                        </div>
                        <Button onClick={() => alert("Not Available! Please use Google Auth")} variant="outlined" color="primary" id='LoadMoreBtnlogin'>
                           ❌ Continue with phone ❌
                            </Button>
                        <Button onClick={() => alert("Not Available! Please use Google Auth")} variant="outlined" color="primary" id='LoadMoreBtnlogin'>
                        ❌  Continue with facebook  ❌
                            </Button>
                        <Button variant="outlined" color="primary" id='LoadMoreBtnlogin' onClick={onSubmit}>
                         👉   Continue with google   👈
                            </Button>
                        <Button onClick={() => alert("Not Available! Please use Google Auth")} variant="outlined" color="primary" id='LoadMoreBtnlogin'>
                        ❌  Continue with email  ❌
                            </Button>
                        <div className="text-center mb-3">
                            <small className=''>We won't share your personal details with anyone</small>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default LoginForm;