import React from "react";
import { useState } from 'react';
import transitions from "@material-ui/core/styles/transitions";


const AllCatogary = () => {

    let rotte = 'block';
    let rootte = 'none';
    let displayProp = 'none';
    const [rtate , setrotate] = useState(rotte);
    const [rotat,setrotat] = useState(rootte)
    const [disp , setDispl] = useState(displayProp)
    const RotateIcon = () => {
      setrotate('none');
      setDispl('block');
      setrotat('block')

    }
    const RotateIconAgain = () =>{
        setrotat('none');
      setDispl('none');
      setrotate('block');


    }
    return(

        <>
    <div className="container-fluid shadow-sm py-2">
        <div className="row">
            <div className="col-md-12 AC_head pl-5">
                ALL CATEGORIES 
                <i className="fa fa-chevron-down" onClick={RotateIcon} style={{display:rtate }} id='arrowww'></i>
                <i className="fa fa-chevron-up" onClick={RotateIconAgain} style={{display:rotat}} id='arrowww'></i>
            <a className=" AC_link ">Mobile Phones</a>
            <a className=" AC_link ">Cars</a>
            <a className=" AC_link ">Motorcycles</a>
            <a className=" AC_link">Houses</a>
            <a className=" AC_link">TV-Video-Audio</a>
            <a className=" AC_link">Tablets</a>
            <a className=" AC_link">Land & Plots</a>
        </div>
        </div>
    </div>

    <div className="container-fluid pt-4 mt-3 pb-4 catorgaryContainer" style={{display:disp}}>
        <div className="row">
            <div className="col-md-3">
                <div className='AC_heading'>Mobiles</div>
                <div><a className=" ">Tablets</a></div>
                <div><a className=" ">Accessories</a></div>
                <div><a className=" ">Mobile Phones</a></div>

                <div className='AC_heading'>Vehicles</div>
                <div><a className=" ">Cars</a></div>
                <div><a className=" ">Cars on Installments</a></div>
                <div><a className=" ">Cars Accessories</a></div>
                <div><a className=" ">Spare Parts</a></div>
                <div><a className=" ">Buses, Vans & Trucks</a></div>
                <div><a className=" ">Rickshaw & Chingchi</a></div>
                <div><a className=" ">Other Vehicles</a></div>
                <div><a className=" ">Other Vehicles</a></div>
                <div><a className=" ">Tractors & Trailers</a></div> 

                <div className='AC_heading'>Property for Sale</div>
                <div><a className=" ">Land & Plots</a></div>
                <div><a className=" ">Houses</a></div>
                <div><a className=" ">Apartments & Flats</a></div>
                <div><a className=" ">Shops - Offices - Commercial Space</a></div>
                <div><a className=" ">Portions & Floors</a></div>


                <div className='AC_heading'>Property for Rent</div>
                <div><a className=" ">Houses</a></div>
                <div><a className=" ">Apartments & Flats</a></div>
                <div><a className=" ">Portions & Floors</a></div>
                <div><a className=" ">Shops - Offices - Commercial Space</a></div>
                <div><a className=" ">Roommates & Paying Guests</a></div>
                <div><a className=" ">Vacation Rentals - Guest Houses</a></div>
                <div><a className=" ">Land & Plots</a></div>
                
            </div>
            <div className="col-md-3">

                <div className='AC_heading'>Electronics & Home Appliances</div>
                <div><a className=" ">Computers & Accessories</a></div>
                <div><a className=" ">TV - Video - Audio</a></div>
                <div><a className=" ">Cameras & Accessories</a></div>
                <div><a className=" ">Games & Entertainment</a></div>
                <div><a className=" ">Other Home Appliances</a></div>
                <div><a className=" ">Generators, UPS & Power Solutions</a></div>
                <div><a className=" ">Kitchen Appliances</a></div>
                <div><a className=" ">AC & Coolers</a></div>
                <div><a className=" ">Fridges & Freezers</a></div>
                <div><a className=" ">Washing Machines & Dryers</a></div>

                <div className='AC_heading'>Bikes</div>
                <div><a className=" ">Motorcycles</a></div>
                <div><a className=" ">Spare Parts</a></div>
                <div><a className=" ">Spare Parts</a></div>
                <div><a className=" ">ATV & Quads</a></div>
                <div><a className=" ">Scooters</a></div>

                <div className='AC_heading'>Business, Industrial & Agriculture</div>
                <div><a className=" ">Business for Sale</a></div>
                <div><a className=" ">Food & Restaurants</a></div>
                <div><a className=" ">Trade & Industrial</a></div>
                <div><a className=" ">Construction & Heavy Machinery</a></div>
                <div><a className=" ">Agriculture</a></div>
                <div><a className=" ">Other Business & Industry</a></div>
                <div><a className=" ">Medical & Pharma</a></div>

                <div className='AC_heading'>Services</div>
                <div><a className=" ">Education & Classes</a></div>
                <div><a className=" ">Travel & Visa</a></div>
                <div><a className=" ">Car Rental</a></div>
                <div><a className=" ">Drivers & Taxi</a></div>
                <div><a className=" ">Web Development</a></div>
                <div><a className=" ">Other Services</a></div>
                <div><a className=" ">Electronics & Computer Repair</a></div>
                <div><a className=" ">Event Services</a></div>
                <div><a className=" ">Health & Beauty</a></div>
                <div><a className=" ">Maids & Domestic Help</a></div>
                <div><a className=" ">Movers & Packers</a></div>
                <div><a className=" ">Home & Office Repair</a></div>
                <div><a className=" ">Catering & Restaurant</a></div>
                <div><a className=" ">Farm & Fresh Food</a></div>

            </div>
            <div className="col-md-3">
                <div className='AC_heading'>Jobs</div>
                <div><a className=" ">
                Online
                    
                    </a></div>
                <div><a className=" ">
Marketing
                    
                    </a></div>
                <div><a className=" ">
Advertising & PR
                    
                    </a></div>
                <div><a className=" ">
Education
                    
                    </a></div>
                <div><a className=" ">
Customer Service
                    
                    </a></div>
                <div><a className=" ">
Sales
                    
                    </a></div>
                <div><a className=" ">
IT & Networking
                    
                    </a></div>
                <div><a className=" ">
Hotels & Tourism
                    
                    </a></div>
                <div><a className=" ">
Clerical & Administration
                    
                    </a></div>
                <div><a className=" ">
                    Human Resources
                    
                    </a></div>
                <div><a className=" ">
Accounting & Finance
                    
                    </a></div>
                <div><a className=" ">
Manufacturing
                    
                    </a></div>
                <div><a className=" ">
Medical
                    
                    </a></div>
                <div><a className=" ">
Domestic Staff
                    
                    </a></div>
                <div><a className=" ">
                    Part - Time
                    
                </a></div>
                <div><a className=" ">
Other Jobs
                    
                </a></div>
                

                <div className='AC_heading'>Animals
</div>
                <div><a className=" ">
Fish & Aquariums
                    
                    </a></div><div><a className=" ">
                        Birds
                    
                </a></div><div><a className=" ">
                        Hens & Aseel
                    
                    </a></div><div><a className=" ">
                        Cats
                        
                </a></div><div><a className=" ">
                    Dogs
                    
                    </a></div><div><a className=" ">
                    
Livestock
                </a></div><div><a className=" ">
Horses
                    
                    </a></div><div><a className=" ">
Pet Food & Accessories
                    
                </a></div><div><a className=" ">
Other Animals
                    
                    </a></div>
                    
                    <div className='AC_heading'>Furniture & Home Decor
</div>
                    
                    <div><a className=" ">
Sofa & Chairs
                    
                </a></div><div><a className=" ">
Beds & Wardrobes
                    
                    </a></div><div><a className=" ">
Home Decoration
                    
                </a></div><div><a className=" ">
Tables & Dining
                    
                    </a></div><div><a className=" ">
Garden & Outdoor
                    
                </a></div><div><a className=" ">
Painting & Mirrors
                    
                    </a></div><div><a className=" ">
                        Rugs & Carpets
                    
                </a></div><div><a className=" ">
Curtains & Blinds
                    
                </a></div><div><a className=" ">
Office Furniture
                    
                    </a></div><div><a className=" ">
 Other Household Items
                    
                </a></div>


            </div>
            <div className="col-md-3">

                <div className='AC_heading'>Fashion & Beauty</div>
                <div><a href="" className="className">
                    
                    </a></div>
                    <div><a href="" className="className">
                    Fashion & Beauty
                    </a></div><div><a href="" className="className">
Accessories
                    
                    </a></div><div><a href="" className="className">
Clothes
                    
                    </a></div><div><a href="" className="className">
Footwear
                    
                    </a></div><div><a href="" className="className">
Jewellery
                    
                    </a></div><div><a href="" className="className">
                        Make Up
                    
                    </a></div><div><a href="" className="className">
Skin & Hair
                    
                    </a></div><div><a href="" className="className">
Watches
                    
                    </a></div><div><a href="" className="className">
Wedding
                    
                    </a></div><div><a href="" className="className">
Lawn & Pret
                    
                    </a></div><div><a href="" className="className">
Couture
                    
                    </a></div><div><a href="" className="className">
Other Fashion
                    
                    </a></div>
                    
                    <div className='AC_heading'>
                    Books, Sports & Hobbies

                    </div>
                    <div><a href="" className="className">
Books & Magazines
                    
                    </a></div><div><a href="" className="className">
Musical Instruments
                    
                    </a></div><div><a href="" className="className">
Sports Equipment
                    
                    </a></div><div><a href="" className="className">
Gym & Fitness
                    
                    </a></div><div><a href="" className="className">
Other Hobbies
                    
                    </a></div>
                    
                    <div className='AC_heading'>
                    Kids
</div><div><a href="" className="className">
Kids Furniture
                      
                         </a></div><div><a href="" className="className">
Toys
                    
                    </a> </div><div><a href="" className="className">
Prams & Walkers
                    
                    </a></div><div><a href="" className="className">
Swings & Slides
                    
                    </a></div><div><a href="" className="className">
                    
                    </a></div><div><a href="" className="className">
                     
Kids Bikes
                    </a></div>
                    <div><a href="" className="className">
                    
Kids Accessories
                                        </a></div>

            </div>
        </div>
    </div>
    </>
        )
}

export default AllCatogary;