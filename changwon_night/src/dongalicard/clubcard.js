import React from 'react';
import './clubcard.css';
import Ramian from './ramian.jpg';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';



class ClubCard extends React.Component {

    render() {
        return (
            <div>
                {/*동아리카드*/}
                <Card className="clubcard">
                      <img src={Ramian} className="clubimageArea" />
                        <CardHeader
                           
                            title="코뮤즈"
                            subheader="음악동아리"
                        />
                      
                        <CardContent className ="marcketingMent">
                            <Typography variant="body2" color="textSecondary" component="p">
                            보컬, 드럼, 기타, 키보드 등
                            <br/>악기 배우고 싶은 사람은 오세요~
                            <br/>모집 기간: 상시모집
                            </Typography>
                        </CardContent>
                
                </Card>
            </div>

        )
    };

}

export default ClubCard;