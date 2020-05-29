import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import './grid.css';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { Icon } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { yellow } from '@material-ui/core/colors';
import styled,{ css }  from 'styled-components';
import SchoolIcon from '@material-ui/icons/School';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HotelIcon from '@material-ui/icons/Hotel';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingLeft: 400,
      paddingRight: 400,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: "auto",
      width: "auto",
    }
  }));

class Centergrid2 extends React.Component{
    render(){
    const posts = [
    {
      id:1,
     title: "오늘의인기글",
     
    },
    {
      id:2,
      title: "공지사항",
      
     },
     {
      id:3,
      title: "캠퍼스",
     
     },
     {
      id:4,
      title: "취업",
     
     },
     {
      id:5,
      title: "생활정보",
     
     },
     {
      id:6,
      title: "커뮤니티",
     
     },  
  ]   
    return (
        <div className={useStyles.root}>
        <Grid container spacing={3} justify="center">
        {posts.map(post => (
            <Grid   key ={post.id}>
                <div className="card_main">
                <Card className="card">
                <CardHeader
                    title={
                      <Typography align="left" variant="h4" >
                       {post.title}
                      </Typography>
                    }
                    action={
                    <IconButton aria-label="star">
                      <StarIcon style={{ color: yellow[500] }} fontSize='small'/>
                    </IconButton>
                    }
                >
                  </CardHeader>
                <hr/>
                <div className="box2">
                <Typography align="left" variant="h5" >
                <a href="/"><li>[내용][댓글수]</li></a>
                
                <a href="/"><li>[내용][댓글수]</li></a>
                
                <a href="/"><li>[내용][댓글수]</li></a>
                
                <a href="/"><li>[내용][댓글수]</li></a>
                
                <a href="/"><li>[내용][댓글수]</li></a>
                
                <a href="/"><li>[내용][댓글수]</li></a>
                
                <a href="/"><li>[내용][댓글수]</li></a>
                
                </Typography>
                </div>
               
              </Card>
                </div>
            </Grid>
          ))}
        </Grid>
      </div>
      )
    }

}

export default Centergrid2;