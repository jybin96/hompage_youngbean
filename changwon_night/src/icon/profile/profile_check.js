import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import backgroundimage from './scene-Iron-Man.jpg';
import ionman from './ionman.jpg';
import Quotes from './Quotes.png';
import './profile.css';
import Button from '@material-ui/core/Button';
import Profile_change from './profile_change';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

class Profile_check extends Component{
  constructor(props){
    super(props);
    this.state = {
        anchorEl : null,
        open:false
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleopen = this.handleopen.bind(this);
   
}
handleClose (e){
       
  this.setState({
      anchorEl:null,
      open:false
      
  })
}
handleopen(e){
  this.setState({
      anchorEl: e.currentTarget,
      open:Boolean(e.currentTarget)
  })
}  
    render(){
      const {handleClose,handleopen} = this;
        return(
            <div className = 'profile_card_state'>
        <Card className='profile_card' >
        <CardMedia
          className='backgroundimage'
          image={backgroundimage}
        />
        <CardMedia 
          className='profile_image'
          image={ionman}
        />
            <CardContent className='nickname_and_statemessage'>
            <Typography gutterBottom variant="h5"  align="center" >
            Iron Man
          </Typography>
          <hr/>
          <Typography variant="body2" color="textSecondary"  align="center">
            <img src = {Quotes}/> &nbsp; I'm Iron Man!
            Somtimes you gotta Run before you can Walk
          </Typography>
          </CardContent>

          <div className = "profile_button">
          <Dialog open={this.state.open} aria-labelledby="form-dialog-title" className="profile_change_button">
                    <DialogContent>
                    <Profile_change/>
                    </DialogContent>
                    <DialogActions>                
                <Button className = "cancel"variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                </DialogActions>                   
          </Dialog>
          <Button className = "modify" variant="contained" color="primary" onClick={handleopen}>수정</Button>               
          </div>
          
        </Card>
        </div>
        )
    }
}

export default Profile_check;