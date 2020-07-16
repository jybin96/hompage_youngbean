import React, { Component } from 'react';
import Profile_check from './profile_check';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import './profile.css';
class Profile_check_button extends Component{
    constructor(props){
        super(props);
        this.state = {
            anchorEl : null,
            open:false
        }
        this.handleopen = this.handleopen.bind(this);      
        this.handleClose = this.handleClose.bind(this);      

    }
    handleopen(e){
        this.setState({
            anchorEl: e.currentTarget,
            open2:Boolean(e.currentTarget)
        })
      }  
      handleClose (e){
       
        this.setState({
            anchorEl:null,
            open:false
            
        })
      }
    render(){
        const {handleopen,handleClose} = this;
        return(
            <div >
                <Button className ="profile" variant="contained" color="primary" onClick={handleopen}></Button>
                 <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" className="profile_check_button">
                    <DialogContent>
                    <Profile_check/>
                    </DialogContent>                                 
                <DialogActions>                
                <Button className = "cancel"variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                </DialogActions>
                </Dialog>




            </div>
      
        )
    }
}

export default Profile_check_button;