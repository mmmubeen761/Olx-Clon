import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Logo from '../Images/unnamed.png'
import { useState, useEffect } from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import Dropdown from 'react-bootstrap/Dropdown';
import Popover from 'react-bootstrap/Popover';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import SubjectIcon from '@material-ui/icons/Subject';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import TuneIcon from '@material-ui/icons/Tune';
import GetAppIcon from '@material-ui/icons/GetApp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from '../Config.jsx/firebase';
import noti from '../Images/notifications.png'

const Header = () => {

  const location = useLocation();
  const history = useHistory();


  let rotte = 'rotateZ(0deg)'
  const [rtate, setrotate] = useState(rotte)
  const RotateIcon = () => {
    setrotate('rotateZ(180deg)');
  }

  let rootte = 'rotateZ(0deg)'
  const [rotate, setrootate] = useState(rootte)
  const RootateIcon = () => {
    setrootate('rotateZ(180deg)');
  }


  const [currentUser, setCurrentUser] = useState();
  var provider = new firebase.auth.GoogleAuthProvider();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])  

  const logOut = () => {
    firebase.auth().signOut().then(function () {
      console.log('Loged Out');
      history.push('/')

    }).catch(function (error) {
      console.log(error)
    });    
  }

  return (
    <>



      {currentUser && <>
        <div className="container-fluid py-2 shadow-sm  bg-light sticky-top" >
          <div className="row  p-0">
            <div className="col-md-1">
              <img src={Logo} alt="logo" className='float-right p-0 m-0' onClick={() => history.push('/home')} style={{ cursor:'pointer',width: '55px', height: '50px' }} />
            </div>
            <div className="col-md-2 locationBar p-1 mr-3 d-flex justify-content-around w-auto">
              <i className='fas fa-search  ' id='searcharrow'></i>
              <input type="text" className='' placeholder='Azad Kashmir' />
              <i className="fa fa-chevron-down my-auto" onClick={RotateIcon} style={{ transform: rtate }} id='arrowww'></i>

            </div>

            <div className="col-md-5 search-container m-0 p-0 " >
              <input type="text" className='p-2 w-75' placeholder='Find Cars, Mobile Phones and more...' />
              <button id='btnsearch'>
                <i className='fa fa-search text-white m-0 p-0 ' style={{ fontSize: '25px', border: 'none', padding: '0' }}></i>
              </button>
            </div>
            {/* <i className="fa fa-chevron-down " id='isActive'  onClick={RotateArrow} style={{transform:rotate}} id='arrowww'></i> */}
            <div className="col-md-3 text-center ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-2 my-auto float-right">
                    <ChatBubbleOutlineIcon onClick={() => history.push('/system')} style={{ color: '#002f34', fontSize: '24px',cursor:'pointer' }} />
                  </div>
                  <div className="col-md-2 my-auto float-right ">
                    {['bottom'].map((placement) => (
                      <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                          <Popover id={`popover-positioned-${placement}`} style={{height:"auto"}}>
                            <Popover.Content>
                              <div className='text-center'>

                             <p>No notifications</p>
                             <small>Check back here for updates!</small>
                              </div>
                              <div className='text-center' style={{width:'100%',overflow:'hidden',margin:'',height:'120px'}}>
                             <img src={noti} alt="" style={{height:'auto'}}/>
                              </div>
                            </Popover.Content>
                          </Popover>

                        }
                      >
                        <NotificationsNoneIcon style={{ color: '#002f34', fontSize: '30px', cursor: 'pointer' }} />
                      </OverlayTrigger>
                    ))}
                  </div>
                  <div className="col-md-4 text-center float-right my-auto justify-content-center p-1">
                    {['bottom'].map((placement) => (
                      <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                          <Popover id={`popover-positioned-${placement}`}>
                            <Popover.Title as="h3"><br />
                              <span className='mr-2' ><img src={currentUser.photoURL} style={{ width: '70px', height: '70px', borderRadius: '50px' }} alt="" /></span>
                              <small>Hello</small>
                              <h5 className='ml-5'><b>{currentUser.displayName}</b> </h5>
                              <a style={{cursor:'pointer'}} className='ml-5' onClick={() => history.push('/EditProfile')}><small>View and edit profile</small></a>
                              <br />
                            </Popover.Title>
                            <Popover.Content className='my-2 '>
                              <NoteAddIcon  className='my-2' /><span onClick={() => history.push('/system')} style={{cursor:'pointer',padding: '18px', fontSize: '15px', fontFamily: 'sans-serif,arial' }} >My Ads</span><br />
                              <SubjectIcon className='my-2' /><span onClick={() => history.push('/system')} style={{cursor:'pointer', padding: '18px', fontSize: '15px', fontFamily: 'sans-serif,arial' }} className=''>Buy Business Packages</span><br />
                              <CallToActionIcon className='my-2' /><span onClick={() => history.push('/system')} style={{cursor:'pointer', padding: '18px', fontSize: '15px', fontFamily: 'sans-serif,arial' }}>Bought Packages & Billing</span><br />
                              <TuneIcon className='my-2' /><span onClick={() => history.push('/Profile')} style={{cursor:'pointer', padding: '18px', fontSize: '15px', fontFamily: 'sans-serif,arial' }}>Settings</span><br /><hr />
                              <GetAppIcon className='my-1' /><span onClick={() => history.push('/system')} style={{cursor:'pointer', padding: '18px', fontSize: '15px', fontFamily: 'sans-serif,arial' }}>Install OLX Lite App</span><br />
                              <hr /><span onClick={logOut} style={{ cursor: 'pointer' }}>
                                <ExitToAppIcon className='my-1' /><span style={{ padding: '18px', fontSize: '15px', fontFamily: 'sans-serif,arial' }}onClick={() => history.push('/')} >Logout</span><br />
                              </span>
                            </Popover.Content>
                          </Popover>
                        }
                      >
                        <span>
                          <span><img src={currentUser.photoURL} style={{ width: '40px', height: '40px', borderRadius: '50px' }} alt="" /></span>
                          <i className="fa fa-chevron-down" id='arrowww'></i>
                        </span>
                      </OverlayTrigger>
                    ))}
                  </div>
                  <div className="col-md-4 my-auto float-right  ">
                    <Link to='/sell'>
                      <button className="bbtn shadow "><div className="bgg pt-1"><b><AddIcon /> SELL</b></div></button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </nav>   */}


      </>}

    </>
  )
}


export default Header;

