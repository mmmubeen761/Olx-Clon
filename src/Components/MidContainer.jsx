import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Post from '../Components/Post'
import RecipeReviewCard from '../Components/Card'
import firebase from '../Config.jsx/firebase'
import { VerifiedUserSharp } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import CardDetail from './CardDetail';
import { Link } from 'react-router-dom';



const MidContainer = (props) => {

    const [Post, setpost] = useState({})

    useEffect(() => {
        firebase.database().ref().child('user').on('value', snapshot => {
            if (snapshot.val() !== null)
                setpost({
                    ...snapshot.val()
                })

        })
    }, [])

    // console.log(Post)

    //............... locarion
    const location = useLocation();
    const history = useHistory();

   Object.keys(Post);

    return (
        <>
            <div>
                <div className="container-fluid mt-5 mb-5 " >
                    {
                        Object.keys(Post).map((val, i) => {
                            return (
                                <>
                                    <Link to={`/CardDetail/${Post[val].price}/${Post[val].currentState}/${Post[val].date}/${Post[val].name}/${Post[val].description}/${Post[val].type}`}>
                                        <div className='mx-2' style={{ width: '300px', height: "300px", display: 'inline-block', cursor: 'pointer' }}>
                                            <RecipeReviewCard
                                                key={i}
                                                CImages={Post[val].imageUrl}
                                                Cprice={Post[val].price}
                                                CTitle={Post[val].type.slice(0, 20) + '...'}
                                                CState={Post[val].currentState}
                                                CDate={Post[val].date}
                                            />
                                        </div>

                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};


export default MidContainer;