import React from 'react';
import ButtImg1 from '../Images/playstore.png'
import ButtImg2 from '../Images/appstore.png'

const SecondFooter = () => {
    return(
        <>
        <div className='container-fluid pt-4 secondFooter border-top'>
            <div className='row'>
                {/* <div className='col-md-1'></div> */}
                <div className='col-md-3 pl-5'>
                    <p className='secondfootheading'><b>POPULAR CATEGORIES</b></p>
                    <ol className='SecondFootol'>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Cars</li></a>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Flats for rent</li></a>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Jobs</li></a>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Mobile Phones</li></a>
                    </ol>
                </div>
                <div className='col-md-2 pl-0'>
                <p className='secondfootheading'><b>TRENDING SEARCHES</b></p>
                    <ol className='SecondFootol'>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Bikes</li></a>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Watches</li></a>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Books</li></a>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Dogs</li></a>
                    </ol>
                </div>
                <div className='col-md-2'>
                <p className='secondfootheading'><b>ABOUT US</b></p>
                    <ol className='SecondFootol'>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>About OLX Group</li></a>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>OLX Blog</li></a>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Contact Us</li></a>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>OLX for Businesses</li></a>
                    </ol>
                </div>
                <div className='col-md-2'>
                <p className='secondfootheading'><b>OLX</b></p>
                    <ol className='SecondFootol'>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Help</li></a>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Sitemap</li></a>
                        <a href='#' className='  SecondFooteranchor text-muted'><li>Legal & Privacy information</li></a>
                    </ol>
                </div>
                <div className='col-md-3'>
                <p className='secondfootheading'><b>FOLLOW US</b></p>
                    <a className='text-muted SecondFooteranchor ' href='#'><i className='fa fa-facebook-f'></i></a>
                    <a className='text-muted SecondFooteranchor ' href='#'><i className='fa fa-twitter'></i></a>
                    <a className='text-muted SecondFooteranchor ' href='#'><i className='fa fa-play'></i></a>
                    <a className='text-muted SecondFooteranchor ' href='#'><i className='fa fa-instagram'></i></a>
                    <br />
                    <span>
                        <span><a href='#' className='secondFooterimga'><img className='secondFooterimg' src={ButtImg1}/></a></span>
                        <span><a href='#' className='secondFooterimga'><img className='secondFooterimg' src={ButtImg2}/></a></span>
                        </span>
                </div>
            </div>
        </div>
        </>
    )
};

export default SecondFooter;