import React, { Component } from 'react';
import Top_AppBar from './appbar/appbar';
import './home2.css';
import Search from './SearchBar/min';
import NestedList from './menulist/Board_list';
import Marketbody from './marketmain/marketmain';
class Home3 extends React.Component{
    render(){
        return(
            <div>
                <Top_AppBar/>
                <div className="toptop">

                </div>
                <div className="midmid">
                    <Search/>
                </div>
                <div className="market_main">
                    <Marketbody/>
                </div>
                <div className="menubarbar">
                <NestedList/>
                </div>
            </div>
        )
    }
}

export default Home3;