import React, { Component } from 'react';
import './pin.css';



class Pin extends Component{
    render(){
        return(
            <div id="pin_main">
                <div id="pin_title"><p>맘스터치</p></div>
                <div id="pin_image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvNs-Gc4xceXKL_1bbPxe7AQ5svfVXeXFtgw&usqp=CAU" height="140px" width="200px"/></div>
                <div id="pin_love"><p>좋아요</p></div>
                <div id="pin_body"><p>리뷰</p></div>
            </div>
        )
    }
}


export default Pin;