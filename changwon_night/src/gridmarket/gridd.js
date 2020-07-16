import React, { Component } from 'react';
import './gridmarket.css';
import ClubCard from '../dongalicard/clubcard';

class Griddongali extends React.Component{
    render(){
        return(
            <div className="gridmarket_main">
                <div className="gridmarket_1">
                    <ClubCard/>
                </div>
                <div className="gridmarket_2">
                <ClubCard/>
                </div>
                <div className="gridmarket_3">
                <ClubCard/>
                </div>
                <div className="gridmarket_4">
                <ClubCard/>
                </div>
                <div className="gridmarket_5">
                <ClubCard/>
                </div>
                <div className="gridmarket_6">
                <ClubCard/>
                </div>
            </div>
        )
    }
}

export default Griddongali;