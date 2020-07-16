import React from 'react';
import './marcketcard.css';
import Ramian from './ramian.jpg';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import HeartIcon from './heart.png'


class MarcketCard extends React.Component {

    render() {
        return (
            <div>
              
                {/*중고마켓카드*/}
                <Card className="cardMain">
                    

                    <img src={Ramian} className="marcketimageArea" />

                    <p className ="product"> 라면 </p>

                    <p className ="location"> 창원시 사림동 </p>
                

                    <p className ="time">   
                        <font color="gray">
                            10분전
                            <br></br>
                        </font>
                    </p>
                    
                    <p className ="price">   
                            <font color="orange" >
                                3,000원
                                <br></br>
                            </font>
                    </p>

                    <Paper className="barbottom">
                   

                        <p className ="sale">   
                            <font color="black" >
                                판 매 중
                            </font>
                        </p>
        
                        <img src={HeartIcon} className="heart" />
                        
                        <p className ="heartNum">   
                                <font color="black" >
                                    3
                                </font>
                        </p>

                    </Paper>

                </Card>

            </div>

        )
    };

}

export default MarcketCard;