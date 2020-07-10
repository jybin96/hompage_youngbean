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
import Home3 from './home3';
import Postbody from './post/post';
import Table from './table/table';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signinpage" component={Home2}/>
      <Route exact path="/2" component={Home3}/>
    </div>
  );
}

export default App;
