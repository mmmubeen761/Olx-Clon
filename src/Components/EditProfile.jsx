import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import firebase from '../Config.jsx/firebase';
import Header from '../Components/Header';
import AllCatogary from '../Components/AllCatogary';
import SecondFooter from '../Components/SecondFooter';
import Footer from '../Components/Footer';
import { useHistory, useLocation } from 'react-router-dom';




const EditProfile = () => {

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
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h5 className='pl-4'><u>Edit Profile</u></h5>
                            <Button variant="outlined" color="primary" className='my-5 ml-3 w-100' id='LoadMoreBtn' onClick={()=>history.push('/Profile')}>
                                View Profile
                        </Button>
                        </div>
                        <div className="col-md-8 border mx-5 mb-5">
                            <h3 className='p-3'>Edit profile</h3> <hr />
                            <h5 className='p-3'>Basic information</h5>
                            <input type="text" name="type" className='postInput' id="" value={currentUser.displayName} maxLength='30' /> <br />
                            <textarea className="postDes" name='description' maxLength='200' rows="4" placeholder='About me(optional)'></textarea>
                            <br /> <hr /><br />
                            <h5 className='p-3'>Contact information</h5>

                            <div className='postInputt'>
                                <div>
                                    <div className='border-right float-left pr-3'>+92</div>
                                </div>
                                <div>
                                    <input type="text" className='postInputt2 px-3' name="price" value='*** - *******'id="" />
                                </div>
                            </div><br />
                            <input type="text" name="type" className='postInput' value={currentUser.email} id="" maxLength='30' /> <br />
                            <br /><hr />
                            <Button variant="outlined" color="primary" className='my-2 float-right p-3 text-white' onClick={()=>alert('successfully upated profile')} style={{ backgroundColor: '#002f34' }} id='LoadMoreBtnedit'>
                                Save Changes
                        </Button>
                        </div>
                    </div>
                </div>
            </>}

            <SecondFooter />
            <Footer />
        </>
    )

}

export default EditProfile;