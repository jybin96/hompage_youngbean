import React, { Component } from 'react';
import Top_AppBar from './appbar/appbar';
import Postbody from './post/post';
import './home2.css';
import Search from './SearchBar/min';
import NestedList from './menulist/Board_list';
class Night extends React.Component{
    render(){
        return(
            <div>
                <Top_AppBar/>
                <div className="toptop">
                    <div>
                        <p>창밤 공지사항</p>
                    </div>
                </div>
                <div className="midmid">
                    <Search/>
                </div>
                <div className="bmbm">
                <Postbody/>
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

export default Night;