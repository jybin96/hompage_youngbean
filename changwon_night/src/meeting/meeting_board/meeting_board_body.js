import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './meeting_board_body.css';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Meeting_Apply from './meeting_apply';

class Meeting_board_body extends React.Component{
    
    createData(state, gender, count, deadline,date, txt) {
        return {state, gender, count,deadline,date, txt};
      }
    
    render(){
        const rows = [
            this.createData('모집중', '남자','3명','07/03','12:30','안녕하세요 박민철입니다 양해찬이 이런거 시켜서 백글자 적어요 언제까지 채워야 백글자가 채워질까요 궁금합니다 이제 육십글자이네요 조그만 더적으면 다 채워요 오 팔십글자 넘었어요 끝임'),
            this.createData('모집중', '남자','3명','07/03','06/30','오늘 너무 힘들었다내일 저녁에 3대3 과팅하실 여성분들 계신가요? 당연히 군필이고 분위기 오지게 띄우겠습니다!! 댓글이나 좋아요 남겨주시면 페메드릴게용ㅎㅎ '),
            this.createData('모집중', '여자','3명','02/03','14:30','해위'),
            this.createData('모집중', '남자','3명','07/03','06/30','19학번 여자2명이랑 과팅하힐분 익명이요!'),
            this.createData('모집중', '남자','3명','07/03','06/30','신구대 학생이 과팅하재요 이쁜여자들이래요 일학년입니다 과팅하고 싶은 남자분들 손'),
            this.createData('모집중', '남자','3명','07/03','06/30','아동보육과 A반입니다. 과팅하실 남자분 모집합니다 '),
            this.createData('모집중', '남자','3명','07/03','06/30','과팅할 여자분들 구해용 잘생기고 착한애들 있어영~~'),
            this.createData('모집중', '남자','3명','07/03','06/30','오늘 너무 힘들었다내일 저녁에 3대3 과팅하실 여성분들 계신가요? 당연히 군필이고 분위기 오지게 띄우겠습니다!! 댓글이나 좋아요 남겨주시면 페메드릴게용ㅎㅎ '),
          ]; 
        return(
            <div className="grids">
            <Grid container spacing={1}>
                {rows.map((row) => (
                    <Grid item xs={12}> 
                    <div className="bmbm2">
                    <div className="meeting_date">
                            {row.date}
                        </div>
                        <Chip variant="outlined" size="small" label={row.state}color="primary" />
                        <Chip variant="outlined" size="small" label={row.gender}color="primary" />
                        <Chip variant="outlined" size="small" label={row.count}color="primary" />
                        <Chip variant="default" size="small" label={row.deadline}color="primary" />
                        
                        <div className="title1">
                        <Typography>
                            {row.txt}
                        </Typography>
                        </div>
                        <div className="apply1">
                            <Meeting_Apply/>
                        </div>
                        
                    </div>
                   </Grid>
                ))}
                
            </Grid>
            </div>
        )
    }
}

export default Meeting_board_body;