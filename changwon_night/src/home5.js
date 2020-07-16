import React, { Component } from 'react';
import Top_AppBar from './appbar/appbar';
import MarcketCard from './marketcard/marcketcard';
import './home2.css';
import Search from './SearchBar/min';
import NestedList from './menulist/Board_list';
import Gridmarket from './gridmarket/gridm';
class Home5 extends React.Component{
    render(){
        return(
            <div>
                <Top_AppBar/>
                <div className="toptop">

                </div>
                <div className="midmid">
                    <Search/>
                </div>
                <div className="bmbm">
                    <Gridmarket/>
                </div>
                <div className="cdcd">
                   
                </div>
                <div className="menubarbar">
                <NestedList/>
                </div>
            </div>
        )
    }
}

export default Home5;