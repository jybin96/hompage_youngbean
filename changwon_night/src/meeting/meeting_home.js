import React, { Component } from 'react';
import Top_AppBar from '../appbar/appbar';
import './home2.css';
import Search from '../SearchBar/min';
import NestedList from '../menulist/Board_list';
import Meeting_board_body from './meeting_board/meeting_board_body';
import Meeting_Write from './meeting_board/meeting_write';

class Meeting_home extends React.Component{
    render(){
        return(
            <div >
                <Top_AppBar/>
                <div className="toptop">
                    <div>
                        <p>과팅</p>
                    </div>
                </div>
                <div className="midmid">
                    <Search/>
                </div>
                <div className="bmbm">
                    <Meeting_board_body/>
                </div>
                <div className="write_meeting">
                    <Meeting_Write/>
                </div >
                <div className="cdcd">
                </div>
                <div className="menubarbar">
                <NestedList/>
                </div>
            </div>
        )
    }
}

export default Meeting_home;