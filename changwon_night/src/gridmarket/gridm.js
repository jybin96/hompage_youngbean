import React, { Component } from 'react';
import './gridmarket.css';
import MarcketCard from '../marketcard/marcketcard';

class Gridmarket extends React.Component{
    render(){
        return(
            <div className="gridmarket_main">
                <div className="gridmarket_1">
                    <MarcketCard/>
                </div>
                <div className="gridmarket_2">
                <MarcketCard/>
                </div>
                <div className="gridmarket_3">
                <MarcketCard/>
                </div>
                <div className="gridmarket_4">
                <MarcketCard/>
                </div>
                <div className="gridmarket_5">
                <MarcketCard/>
                </div>
                <div className="gridmarket_6">
                <MarcketCard/>
                </div>
            </div>
        )
    }
}

export default Gridmarket;