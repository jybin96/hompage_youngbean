import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Login from '../main/main';
import './icon.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Emailmodal from './modal';
import Notimodal from './modal2';
import Favormodal from './modal3';




import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Like from '@material-ui/icons/Favorite';


class Switchbar extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            open:false,
            checklogin:false,
            email:false,
            anchorEl:null,
            mobileMoreAnchorEl:null,
            auth:false,

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.authsubmit = this.authsubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleChange (e) {
        if(this.state.auth===true){
            this.setState({
                checklogin:false,
                open:false,
                auth:false
            })
            
        }else{
            this.setState({                //여기에 로그인
                checklogin:true,
                open:true,
                
            })
        }
      };
      handleChange2(e) {   
        this.setState({
            auth:true,
        })
    }

      handleClose (e){
       
        this.setState({
            open:false,
            checklogin:false
        })
      }
      authsubmit(auth2){
          this.setState({
              auth:auth2
          })
      }
    render(){
        const {classes} = this.props;
        return(
            <div>
                <FormGroup aria-label ="position" row>
                        <FormControlLabel 
                            control={<Switch checked={this.state.auth}  onChange={this.handleChange} aria-label="login switch" />}
                            label={this.state.auth ? 'Logout' : 'Login'}
                        />
                        {this.state.auth && 
                    <div >
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.state.handlMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Favormodal/>
                        <Emailmodal/>
                        <Notimodal/>
                        
                    </div>
                    }
                    </FormGroup>

              
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                    <Login auth={this.state.auth} authsubmit={this.authsubmit} handleClose={this.handleClose}/>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}
export default (Switchbar);