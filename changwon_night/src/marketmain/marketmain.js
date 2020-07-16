import React, { Component } from 'react';
import Left from './return.png';
import Right from './next.png';
import IconButton from '@material-ui/core/IconButton';
import Jgo from './jgo.jpg';
import Userimg from './username.png';
import Sold from './sold-out.png';
import Love from './lovelike.png';
import Comments from './comment';
import './marketmain.css';
class Marketbody extends Component{
    render(){
        return(
            <div className="marketbody">
                <div className="img_button1">
                    <IconButton>
                        <img src={Right} width="30px" height="30px"/>
                    </IconButton>
                </div>
                <div className="img_button2">
                    <IconButton>
                        <img src={Left} width="30px" height="30px"/>
                    </IconButton>
               
                </div>
                <div className="market_img">
                    <img src={Jgo} width="500px" height="400px"/>
                </div>
                <div className="user_nickname">
                    <div className="user_img">
                        <img src={Userimg} />
                    </div>
                    <div className="user_name_part">
                        <p>어리고착한콩</p>
                    </div>
                    <div className="soldout">
                        <p>sold out</p>
                    </div>
                </div>
                <div className="market_title">
                    <p>노트북 정말 싸게 팝니다 네고 안됩니다~ 너무싸게 팔아서요</p>
                    <p>140,000원</p>
                    <div className="market_body_text">
                        <span>
                            이모자전거 팔아요
                            밖에서 사용한거라 사용감 있습니다
                            특별히 찢어지거나 깨진곳은 없습니다
                        </span>
                    </div>
                    
                </div>
                <div className="love_this">
                    <span>찜하기</span>
                    <IconButton>
                    <img src={Love} />
                    </IconButton>
                </div>
                <div className="comment_div">
                    <div className="comment_title">
                        <p>
                        댓글 창
                        </p>
                       
                    </div>
                    <Comments/>
                    <Comments/>
                    <Comments/>
                    <div className="recomment_input"><label>댓글 쓰기</label><input type="text" placeholder="댓글을 입력하세요"/></div>
                </div>
            </div>
        )
    }
}

export default Marketbody;