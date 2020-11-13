import React, { useState, useEffect } from 'react';
import Header from './Header';
import AllCatogary from './AllCatogary';
import Palace from '../Images/5000.jpg';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/Phone';
import SecondFooter from './SecondFooter';
import Footer from './Footer';
import map from '../Images/map.jpg';
import img from '../Images/img6.png';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Cam from '../Images/img5.png';
import firebase from '../Config.jsx/firebase'
import { Filter } from '@material-ui/icons';





const CardDetail = () => {


    let dis = 'none';
    let disa = 'block';
    const [color, setcolor] = useState(dis)
    const [colora, setcolora] = useState(disa)
    const animate = () => {
        setcolor('block')
        setcolora('none')
    }
    const animateFull = () => {
        setcolor('none')
        setcolora('block')
    }

    //............... locarion
    const location = useLocation();
    const history = useHistory();



    //......................................

    const { price, state, date, name, description, type } = useParams();

    return (
        <>

            <Header />
            <AllCatogary />

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="border p-2 text-center">
                            <img src={Cam} alt="" width='30%' height='50%' />
                        </div>
                        <div className="border p-2">
                            <div>
                                <h4><b>Details</b></h4>
                                <span className='ml-5 text-muted'>Condition</span>
                                <span className=' ml-5'>Used</span>
                            </div><hr />
                            <h4><b>Description</b></h4><br /><br />
                            <div className="w-25">
                                <h6>
                                    {description}
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card w-100 p-2">
                            <div className='row'>
                                <div className='col-md-8'>
                                    <h4 className="card-title mb-0 font-weight-bold"><h1>Rs {price}</h1></h4>
                                </div>
                                <div className="col-md-2">
                                    <ShareIcon />
                                </div>
                                <div className='col-md-2'>
                                    <FavoriteBorder style={{ cursor: 'pointer', display: colora }} className='Favourite' onClick={animate} />
                                    <FavoriteIcon className='FavouriteFull ' style={{ cursor: 'pointer', display: color }} onClick={animateFull} />
                                </div>
                            </div>
                            <div className="card-body">
                                <p className=" text-muted"> {type}</p>
                            </div>
                            <span>
                                <small className='float-left mb-2 ml-3 text-muted '>{state}</small>
                                <small className='float-right mb-2 mr-3 text-muted'>{date}</small>
                            </span>
                        </div>
                        <div className="border py-3 my-3">
                            <h5 className='pl-2'>Seller Description</h5>
                            <div className="row">
                                <div className="col-md-3"><img className='img-fluid' src={img} alt="" width='100%' height='100%' /></div>
                                <div className="col-md-7"><h5> {name} </h5>member since 2nd Nov 2020</div>
                                <div className="col-md-2 pt-4"><ArrowForwardIosIcon /></div>
                            </div>
                            <div className="w-100 text-center">
                                <Button variant="outlined" color="primary " className='my-5' id='LoadMoreBtn2' onClick={() => history.push('/NotFound')}>
                                    Chat with seller
                                </Button>
                            </div>
                            <div className='text-center '>
                                <PhoneIcon /> ** *** ******* <span><a href=''>show number</a></span>
                            </div>
                        </div>
                        <div className="border-d py-3">
                            <h4 className="pl-3">Posted in</h4>
                            <small className='pl-3'>Karachi, Pakistan</small>
                            <div className=' text-center'>
                                <img src={map} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <SecondFooter />
            <Footer />
        </>
    )
}

export default CardDetail;