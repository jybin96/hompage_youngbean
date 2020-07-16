import React, { Component } from 'react';
import Top_AppBar from './appbar/appbar';
import './home2.css';
import Search from './SearchBar/min';
import NestedList from './menulist/Board_list';
import Griddongali from './gridmarket/gridd';
class Club extends React.Component{
    render(){
        return(
            <div>
                <Top_AppBar/>
                <div className="toptop">
                    <div>
                        <p>동아리 홍보</p>
                    </div>
                </div>
                <div className="midmid">
                    <Search/>
                </div>
                <div className="bmbm">
                    <Griddongali/>
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

export default Club;