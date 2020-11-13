import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCaraData from '../Components/CardCaraData'
import RecipeReviewCard from '../Components/Card';
import { Link, } from 'react-router-dom';


const FirstContainer = (val) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }
  return (
    <>
      <div className='container mt-5 mb-5 p-3' style={{ backgroundColor: ' #ebeeef', borderRadius: '4px' }}>
        <span>
          <span id='FCHead'>Based on your last search</span>
          <a href='#' className='float-right' id='FCbtn'>View More</a>
        </span><br />
        <Slider {...settings} >



          {
            CardCaraData.map((val, indexval) => {
              return (
                <>
                  <Link to={`/CardMidData/${val.id}`} style={{textDecoration:'none'}}>

                    <div className='p-2'>
                      <RecipeReviewCard key={indexval}
                        id={val.id}
                        CImages={val.CImages}
                        Cprice={val.Cprice}
                        CTitle={val.CTitle}
                        CState={val.CState}
                        CDate={val.CDate}
                      />
                    </div>
                  </Link>
                </>
              )
            })
          }

        </Slider>
      </div>
    </>
  )
};

export default FirstContainer;