import React from 'react';
import { Route } from 'react-router-dom';
import Admin from './admin';
import Signin from  './signin/signin';
import Notice from './Board/notice';
import Community from './Board/community';
import Employment from './Board/employment';
import Campus from './Board/campus';
import Life from './Board/life';
import './app.css';
import Icon from './icon/icon';
import Emailmodal from './icon/modal';
import Emoji from './icon/chatting/emoji';
import Top_AppBar from './appbar/appbar';
import Home from './Home';
function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signinpage" component={Signin}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path ="/notice" component={Notice}/>
      <Route exact path ="/community" component={Community}/>
      <Route exact path ="/employment" component={Employment}/>
      <Route exact path ="/campus" component={Campus}/>
      <Route exact path ="/life" component={Life}/>
    </div>
  );
}

export default App;
