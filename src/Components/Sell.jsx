import React, { useState } from 'react';
import Logo from '../Images/unnamed.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import MoneyIcon from '@material-ui/icons/Money';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import BusinessIcon from '@material-ui/icons/Business';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import FaceIcon from '@material-ui/icons/Face';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import PetsIcon from '@material-ui/icons/Pets';
import WorkIcon from '@material-ui/icons/Work';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom'



const Sell = () => {
  const location = useLocation();
  const history = useHistory();

  const [Displayy, setDisplayy] = useState('none');

  // const displayy = 'none';
  // let displayyy = 'block';
  // const [displa, setDispplay] = useState(displayy);
  // const displaying = () => {
  //   if(displayy === 'none'){
  //     setDispplay('block');
  //   }else{
  //     setDispplay('none')
  //   }
  // }

  // const displaying = () => {
  //   if (displayy === 'none'){

  //   }
  // }

  return (
    <>
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
      <div className="text-center h3 mt-2">POST OUR AD</div>
      <div className="container ">
        <div className="row no-gutters m-md-5 border">

          <div className='py-3'><h5 className='pl-3'>CHOOSE A CATEGORY</h5></div>
            <div className="col-md-6  ">
          <Link to='/sell/post' style={{ textDecoration: 'none' }}>
              <table className="table table-bordered table-hover">
                <tbody>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <PhoneIphoneIcon className='float-left' /> <span className='pl-3'>Mobiles</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>
                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">

                      <DirectionsCarIcon className='float-left' /> <span className='pl-3'>Vehicles</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>

                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <LocalAtmIcon className='float-left' /> <span className='pl-3'>Property for Sale</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>

                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <MoneyIcon className='float-left' /> <span className='pl-3'>Property for Rent</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>

                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <DesktopWindowsIcon className='float-left' /> <span className='pl-3'>Electronics & Home Appliances</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>

                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <MotorcycleIcon className='float-left' /> <span className='pl-3'>Bikes</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>

                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <BusinessIcon className='float-left' /> <span className='pl-3'>Business,Industrial & Agriculture</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>

                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <RoomServiceIcon className='float-left' /> <span className='pl-3'>Services</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>

                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <WorkIcon className='float-left' /> <span className='pl-3'>Jobs</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>

                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <PetsIcon className='float-left' /> <span className='pl-3'>Animals</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>

                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <SingleBedIcon className='float-left' /> <span className='pl-3'>Furniture & Home Decor</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>

                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <FaceIcon className='float-left' /> <span className='pl-3'>Fashion & Beauty</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>

                  </tr>
                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <SportsEsportsIcon className='float-left' /> <span className='pl-3'>Book, Sports & Hobbies</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>
                  </tr>

                  <tr style={{ cursor: "pointer" }} onClick={() => setDisplayy}>
                    <th className='p-3' scope="row">
                      <ChildFriendlyIcon className='float-left' /> <span className='pl-3'>Kids</span> <span><ArrowForwardIosIcon className='float-right' /></span>
                    </th>
                  </tr>
                </tbody>
              </table>

          </Link>
            </div>






          <div className="col-md-6 col-lg-6 d-none d-md-block" style={{ display: 'block' }} >
            <Link to='/sell/post' style={{ textDecoration: 'none' }}>
              <table className="table  table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Tablets
                          </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Accessories
                          </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Mobile Phones
                          </th>
                  </tr>
                </tbody>
              </table>
            </Link>
          </div>

          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className='table  table-hover'>
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>Cars</th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>Cars on Installments</th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>Cars Accessories</th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>Spare Parts</th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>Buses, vans & Trucks</th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>Rikshaw & Chingchi</th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>Other Vehicles</th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>Boats</th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>Trucks & Trailers</th>
                  </tr>

                </tbody>
              </table>
            </div>
          </Link>

          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Lands and Plots
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Houses
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Appartments and Flats
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Shops-Offices-Commercial Space
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Portions and Floors
                         </th>
                  </tr>

                </tbody>
              </table>
            </div>
          </Link>

          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Houses
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Appartments and Flats
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Portions and Floors
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Shops-Offices-Commercial Space
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Rooms
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Roommates & Playing Guests
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Vacation Rentals-Guest housess
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Land & Plots
                         </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>

          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Computer & Accessories
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      TV-Video-Audio
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Cameras & Accessories
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Games & Entertainment
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Other Home Appliances
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Generators, UPS & Power Solution
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Kitchen Appliances
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      AC & Coolers
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Fridges & Freezers
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Washing Machines & Dryers
                         </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>

          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Motorcycles
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Spare Parts
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Bicycles
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      ATV & Quads
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Scooters
                         </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>

          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Business for Sale
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Food & Restaurants
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Trade & Industrial
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Construction & Heavy Machinery
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Agriculture
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Other Business & Industry
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Medical Pharma
                         </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>


          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Education & Classes
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Travel & Visa
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Car Rental
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Drivers & Taxi
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Web Development
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Other Services
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Electronics & Computer Repair
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Event Services
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Health & Beauty
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Maids & Domestic Help
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Movers & Packers
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Home & Office Repair
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Catering & Restaurant
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Farm & Fresh Food
                         </th>
                  </tr>

                </tbody>
              </table>
            </div>
          </Link>

          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Online
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Marketing
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Advertising & PR
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Education
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Customer Service
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Sales
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      IT & Networking
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Hotels & Tousrism
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Clerical & Administration
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Human Resources
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Accounting & Finance
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Manufacturing
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Medical
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Domestic Staff
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Part-Time
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Other Jobs
                         </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>

          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Fish and Aquariums
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Birds
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Hens & Aseel
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Cats
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Dogs
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Livestock
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Horses
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Pet Food & Accessories
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Other Animals
                         </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>


          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Sofas & Chairs
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Bed & Wardrobes
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Home Decoration
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Tables & Dining
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Garden & Outdoor
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Painting & Mirrors
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Rugs & Carpets
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Curtains & Blinds
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Office Furniture
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Other Household Items
                         </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>

          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Accessories
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Clothes
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Footwear
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Jewellery
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Make Up
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Skin & Hair
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Watches
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Wedding
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Lawn & Pret
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Couter
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Other Fashion
                         </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>



          <Link to='/post' style={{ textDecoration: 'none' }}>
            <div className="col-md-6" style={{ display: 'none' }}>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th className='p-3' scope='row'>
                      Books & Magazines
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Musical Instruments
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Sports Equipment
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Gym & Fitness
                         </th>
                  </tr>
                  <tr>
                    <th className='p-3' scope='row'>
                      Other Hobbies
                         </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>

        </div>
      </div>

      <Link to='/post' style={{ textDecoration: 'none' }}>
        <div className="col-md-6" style={{ display: 'none' }}>
          <table className="table table-hover">
            <tbody>
              <tr>
                <th className='p-3' scope='row'>
                  Kids Furniture
                         </th>
              </tr>
              <tr>
                <th className='p-3' scope='row'>
                  Toys
                         </th>
              </tr>
              <tr>
                <th className='p-3' scope='row'>
                  Prams & Walkers
                         </th>
              </tr>
              <tr>
                <th className='p-3' scope='row'>
                  Swings & Slides
                         </th>
              </tr>
              <tr>
                <th className='p-3' scope='row'>
                  Kids Bikes
                         </th>
              </tr>
              <tr>
                <th className='p-3' scope='row'>
                  Kids Accessories
                         </th>
              </tr>
            </tbody>
          </table>
        </div>
      </Link>

    </>
  )

}

export default Sell;