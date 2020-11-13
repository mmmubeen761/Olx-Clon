import React, { useState } from 'react';
import Logo from '../Images/unnamed.jpg';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';



const Card = (props) => {

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

  return (
    <>
      <div className="card">
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <img src={props.CImages} className="card-img-top" width='192px' height='144px' alt="..." />
          </div>
          <div className='col-md-2'>
            <FavoriteBorder style={{ cursor: 'pointer', display: colora }} className='Favourite' onClick={animate} />
            <FavoriteIcon className='FavouriteFull ' style={{ cursor: 'pointer', display: color }} onClick={animateFull} />
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title mb-0 font-weight-bold">Rs {props.Cprice}</h4>
          <p className=" text-muted"> {props.CTitle}</p>
        </div>
        <span>
          <small className='float-left mb-2 ml-3 text-muted '>{props.CState}</small>
          <small className='float-right mb-2 mr-3 text-muted'>{props.CDate}</small>
        </span>
      </div>
    </>
  )
}

export default Card;