import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SecondFooter from './Components/SecondFooter';
import ThirdFooter from './Components/ThirdFooter';
import FirstContainer from './Components/FirstContainer';
import AllCatogary from './Components/AllCatogary';
import LoadMore from './Components/LoadBtn';
import Sell from './Components/Sell';
import Post from './Components/Post';
import LoginForm from './Components/LoginForm';
import EditProfile from './Components/EditProfile';
import Profile from './Components/Profile'
import MidContainer from './Components/MidContainer'
import NotFound from './Components/404';
import System from './Components/System';
import CardDetail from './Components/CardDetail';
import CardMidData from './Components/CardMidData';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from './Config.jsx/firebase'



function App() {



  return (
    <>



      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={LoginForm}/>
            <Route exact path='/Home' component={Home} />
            <Route exact path='/sell' component={Sell} />
            <Route exact path='/sell/post' component={Post} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/editProfile' component={EditProfile} />
            <Route exact path='/CardMidData/:id' component={CardMidData} />
            <Route path='/CardDetail/:price/:state/:date/:name/:description/:type' component={CardDetail} />
            <Route path='/system' component={System} />
            <Route path='' component={NotFound} />
          </Switch>
        </div>
      </Router>

    </>
  )
};

const Home = () => (

  <>


    <Header />
    <AllCatogary />

    <div className='TopImg'>

    </div>


    <FirstContainer />

    <MidContainer />

    <div className='text-center'>
      <LoadMore />
    </div>


    <ThirdFooter />

    <SecondFooter />

    <Footer />
  </>
)


export default App;
