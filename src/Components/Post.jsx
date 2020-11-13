import React, { useState, useEffect } from 'react';
import Logo from '../Images/unnamed.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ExpandMoreIcon from '@material-ui/icons/ArrowBack';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from '../Config.jsx/firebase'


const Post = () => {


    //................ firebase
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;
    }

    const [currentUser, setCurrentUser] = useState();
    var provider = new firebase.auth.GoogleAuthProvider();
    var user = firebase.auth().currentUser;


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user.uid)
            console.log(user.uid)

        })
    }, [])




    //..............................


    const [appState, changeState] = useState({
        activeObject: null,
        objects: [{ id: 1, name: 'new' }, { id: 2, name: 'used' }]
    });
    function toggleActive(index) {
        changeState({ ...appState, activeObject: appState.objects[index] });
    }

    function toggleActiveStyles(index) {
        if (appState.objects[index] === appState.activeObject) {
            return 'active'
        } else {
            return 'postBtn'
        }
    }





    //   .................img
    const [imageUrl, setImageUrl] = useState()


    const onchange = async (e) => {
        const file = e.target.files[0];
        const ImagesRef = firebase.storage().ref('images').child(file.name);
        await ImagesRef.put(file)
        ImagesRef.getDownloadURL().then((url) => {
            console.log(url)
            setImageUrl(url)
        })
    }

    // ...........Input feilds data

    const inputEvent = (event) => {

        const { name, value } = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    const [currentState, setCurrentState] = useState('')

    const changeStatee = (newState) => {
        setCurrentState(newState)
    }

    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var id = 0;
    const [Data, setData] = useState({
        condition: 'used',
        type: '',
        description: '',
        price: '',
        name: '',
        phoneNo: '',
        date: new Date().getDate() + " " + months[d.getMonth()],
    });




    const update = { ...Data, imageUrl, currentUser, currentState, }



    const onSubmit = () => {
        const user = firebase.auth().currentUser;
        firebase.database().ref().child('user/').push(update)
        alert("sent")
    }
    // id++
    //............... locarion
    const location = useLocation();
    const history = useHistory();


    return (
        <>
            {currentUser && <>
                <div className="container-fluid  bg-light py-2 shadow-sm no-gutters sticky-top">
                    <div className="row">
                        <div className="col-md-1 col-sm-2 col-2  col-lg-1 my-auto">
                            <ArrowBackIcon className='float-md-right mr-lg-5' style={{ cursor: 'pointer' }} onClick={() => history.goBack()} />
                        </div>
                        <div className="col-md-11 col-sm-10 col-10 col-lg-11">
                            <img src={Logo} alt="logo" className='float-left my-auto ' onClick={() => history.push('/home')} style={{ width: '55px', height: '55px', cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>

                <div className="text-center h3 my-3">POST OUR AD</div>

                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 border ">
                            <div className='py-3'>
                                <h5>INCLUDE SOME DETAILS</h5>
                                <br />
                                <p>Condition *</p>
                                <div className=''>
                                    {appState.objects.map((elements, index) => (
                                        <Button
                                            key={index}
                                            className={toggleActiveStyles(index)}
                                            onClick={() => {
                                                toggleActive(index)
                                            }}
                                        >{appState.objects[index].name}</Button>
                                    ))}
                                </div><br />
                                <p>Type *</p>
                                <div className=''>
                                    <input type="text" name="type" onChange={inputEvent} className='postInput' id="" />
                                </div><br />
                                <p>Description *</p>
                                <div className=''>
                                    <textarea className="postDes" name='description' onChange={inputEvent} value={Data.description} maxLength='4096' rows="4"></textarea>
                                </div><br /> <hr /><br />
                                <h5>SET A PRICE</h5>
                                <small>Price*</small>
                                <div className='postInputt'>
                                    <div>
                                        <div className='border-right float-left pr-3'>Rs</div>
                                    </div>
                                    <div>
                                        <input type="text" onChange={inputEvent} value={Data.price} className='postInputt2' name="price" id="" />
                                    </div>
                                </div><br /><hr /><br />
                                <div className='col-md-12 col-lg-12 col-sm-6 '>
                                    <h5>UPLOAD UPTO 12 PHOTOS</h5><br /><br />
                                    <div className=' d-flex align-items-center  justify-content-center' >
                                        <span className='border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                                </p>
                                            </label>
                                        </span>

                                        <span className='border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                        </p>
                                            </label>
                                        </span><span className='border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} value={Data.img} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                        </p>
                                            </label>
                                        </span><span className='d-none d-md-block border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} value={Data.img} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                        </p>
                                            </label>
                                        </span><span className='d-none d-md-block border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} value={Data.img} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                        </p>
                                            </label>
                                        </span><span className='d-none d-md-block border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} value={Data.img} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                        </p>
                                            </label>
                                        </span>
                                    </div><br />
                                    <div className='mb-5 d-flex align-items-center  justify-content-center'>
                                        <span className='border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} value={Data.img} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                        </p>
                                            </label>
                                        </span><span className='border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} value={Data.img} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                        </p>
                                            </label>
                                        </span><span className='border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} value={Data.img} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                        </p>
                                            </label>
                                        </span><span className='d-none d-md-block border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} value={Data.img} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                        </p>
                                            </label>
                                        </span><span className='d-none d-md-block border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} value={Data.img} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                        </p>
                                            </label>
                                        </span><span className='d-none d-md-block border border-dark m-2 px-4 py-4 text-center '>
                                            <input type="file" id='file' name='img' onChange={onchange} value={Data.img} className='imagesinput' accept='image/*' />
                                            <label for="file">
                                                <AddAPhotoIcon className='' style={{ fontSize: '40px' }} />
                                                <p className='d-flex m-0 p-1'>
                                                    Add photo
                                        </p>
                                            </label>
                                        </span>
                                    </div><hr />
                                </div>
                                <div className="my-5">

                                    <h5>CONFIRM YOUR LOCATION</h5><br /><br />
                                    <small>State*</small>
                                    <div className='location'>
                                        <select name="State" className='p-2 locationSelecor w-50' onChange={(event) => changeStatee(event.target.value)}
                                            value={currentState}>
                                            <option value=''></option>
                                            <option value="Azad Kashmir">Azad Kashmir</option>
                                            <option value="Balochistan">Balochistan</option>
                                            <option value="Islamabad Capital Territory">Islamabad Capital Territory</option>
                                            <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Sindh">Sindh</option>
                                            <ExpandMoreIcon />
                                        </select>
                                    </div>
                                </div><hr />
                                <h5>REVIEW YOUR DETAILS</h5><br /><br />
                                <p>Name *</p>
                                <div className=''>
                                    <input type="text" onChange={inputEvent} name="name" className='postInput' id="" />
                                </div><br />
                                <div className='w-50 my-5'>
                                    <span>Your Phone Number</span><span className='float-right'>
                                        <input type="text" onChange={inputEvent} name="phoneNo" placeholder='Enter Phone No.' className='postInput w-100' id="" />
                                    </span>
                                </div>
                                <div className='w-50 my-5'>
                                    <span>Show my phone number on ads</span><span className='float-right'><Switch color='gray' style={{ color: '#002f34' }} /></span>
                                </div><br /><hr />
                                <div className="">
                                    <Button variant="outlined" color="primary" className='my-5 ml-3' id='LoadMoreBtn' onClick={onSubmit}>
                                        Post now
                                </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
};


export default Post;