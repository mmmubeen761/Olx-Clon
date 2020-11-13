import React, { useState, useEffect } from 'react';
import firebase from '../Config.jsx/firebase'
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import img5 from '../Images/img5.png';
import Header from '../Components/Header';
import AllCatogary from '../Components/AllCatogary';
import SecondFooter from '../Components/SecondFooter';
import Footer from '../Components/Footer';
import { useHistory, useLocation } from 'react-router-dom';





const Profile = () => {

    const location = useLocation();
    const history = useHistory();

    const [currentUser, setCurrentUser] = useState();
    var provider = new firebase.auth.GoogleAuthProvider();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            console.log(user)
        })
    }, [])

    return (
        <>

            <Header />
            <AllCatogary />

            {currentUser && <>
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="text-center">
                                <img src={currentUser.photoURL} width='150px' height='150px' style={{ borderRadius: '50%' }} alt="" /> <br /><br />
                            </div>
                            <div className="card w-100">
                                <div class="card-header">LINKED ACCOUNTS</div>
                                <div class="card-body">
                                    <span><small>GOOGLE</small></span><span className='float-right'><CheckCircleOutlineIcon /></span><br /><br />
                                    <span><small>EMAIL</small></span><span className='float-right'><CheckCircleOutlineIcon /></span>
                                </div>
                            </div><br />
                            <div className="card w-100">
                                <div class="card-header">FRIENDS</div>
                                <div class="card-body">
                                    <span><small>FOLLOWERS</small></span><span className='float-right'><b>0</b></span><br /><br />
                                    <span><small>FOLLOWING</small></span><span className='float-right'><b>0</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className='d-flex align-items-center'>
                                <h1 className='float-left h1'>{currentUser.displayName}</h1>
                                <Button variant="outlined" color="primary" className='my-5 ml-3' id='LoadMoreBtn' onClick={() => history.push('/EditProfile')}>
                                    Edit Profile
                        </Button>
                            </div>
                            <hr />
                            <div className="text-center ">
                                <img src={img5} alt="" width='200px' height='200px' /><br /><br />
                                <h5><b>There are no Ads</b></h5><br />
                                <small>When users post ads, will appear here. If you want to post something you can do it now</small>
                            </div>
                            <div className="text-center">
                                <Button variant="outlined" color="primary" className='my-5 ml-3' id='LoadMoreBtn' onClick={() => history.push('/sell')}>
                                    Start Selling
                        </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>}

            <SecondFooter />
            <Footer />
        </>
    )

}

export default Profile;