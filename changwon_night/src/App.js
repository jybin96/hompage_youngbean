import React from 'react';
import { Route } from 'react-router-dom';
import Admin from './admin';
import Signin from  './signin/signin';
import Search from './search/search';
import './app.css';
import Icon from './icon/icon';
import Emailmodal from './icon/modal';
import Emoji from './icon/chatting/emoji';
import Top_AppBar from './appbar/appbar';
import Home from './Home';
import Home2 from './home2';
import None from './none';
import New from './new';
import Love from './love';
import Politic from './politic';
import Employ from './employ';
import Employ2 from './employ2';
import Old from './old';
import Market from './market';
import Alba from './alba';
import Room from './room';
import Club from './club';
import Meeting_home2 from './meeting/meeting_home2';
import Home3 from './home3';
import Home4 from './home4';
import Home5 from './home5';
import Home6 from './home6';
import Home7 from './home7';
import Home8 from './home8';
import Meeting_home from './meeting/meeting_home';
import Changwon from './changwon';
import Night from './night';
import Postbody from './post/post';
import Table from './table/table';
import Pin from './kakaomap/pin';
import Map from './map';
function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/pin" component={Pin}/>
      <Route exact path="/free" component={Home2}/>
      <Route exact path="/none" component={None}/>
      <Route exact path="/new" component={New}/>
      <Route exact path="/love" component={Love}/>
      <Route exact path="/politic" component={Politic}/>
      <Route exact path="/employ" component={Employ}/>
      <Route exact path="/employ2" component={Employ2}/>
      <Route exact path="/old" component={Old}/>
      <Route exact path="/2" component={Home3}/>
      <Route exact path="/3" component={Home4}/>
      <Route exact path="/market" component={Market}/>
      <Route exact path="/room" component={Room}/>
      <Route exact path="/alba" component={Alba}/>
      <Route exact path="/club" component={Club}/>
      <Route exact path="/study" component={Meeting_home2}/>
      <Route exact path="/map" component={Map}/>
      <Route exact path="/6" component={Home7}/>
      <Route exact path="/7" component={Home8}/>
      <Route exact path="/meeting" component={Meeting_home}/>
      <Route exact path="/공지사항" component={Night}/>
      <Route exact path="/학교공지사항" component={Changwon}/>

    </div>
  );
}

export default App;
