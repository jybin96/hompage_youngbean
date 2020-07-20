import React, { Component } from 'react';
import Top_AppBar from './appbar/appbar';
import MarcketCard from './marketcard/marcketcard';
import './home2.css';
import Search from './SearchBar/min';
import NestedList from './menulist/Board_list';
import Gridmarket from './gridmarket/gridm';
import Button from '@material-ui/core/Button';

class Room extends React.Component{
    render(){
        return(
            <div>
                <Top_AppBar/>
                <div className="toptop">
                    <div>
                        <p>자취방 마켓</p>
                    </div>
                </div>
                <div className="midmid">
                    <Search/>
                </div>
                <div className="bmbm">
                    <Button ariant="outlined" color="primary" id="market_button" href="/6">만들기</Button>
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

export default Room;