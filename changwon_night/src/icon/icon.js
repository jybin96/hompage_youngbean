import React from 'react';
import './icon.css';
import Login from '../main/main'; 
import Emailmodal from './modal';
import Notimodal from './modal2';
import Favormodal from './modal3';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Favorite from '@material-ui/icons/Favorite';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
class Icon extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            checklogin:false,
            email:false,
            anchorEl:null,
            mobileMoreAnchorEl:null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);
        this.handleclick2 = this.handleclick2.bind(this);
    }
    handleChange (e) {
        if(this.state.auth===true){
            this.setState({
                checklogin:false,
                open:false
            })
            
        }else{
            this.setState({                //여기에 로그인
                checklogin:true,
                open:true
            })
        }
      };
      handleClose (e){
       
        this.setState({
            open:false,
            checklogin:false
        })
      }
      handleClose2 (e){
          this.setState({
            anchorEl:null
          })
      }
      handleclick2 (e){
          this.setState({
            anchorEl:e.currentTarget
          })
      }
    render(){
        const {handleChange,handleClose,handleclick2,handleClose2} = this;
        return(
            <div className="aaa">
                <div className="cccc">
                    <IconButton  color="inherit" onClick={handleclick2} >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={handleClose2}
                    >
                        <MenuItem onClick={handleClose2}>Profile</MenuItem>
                        <MenuItem onClick={handleClose2}>My account</MenuItem>
                    </Menu>
                </div>
                <Emailmodal/>
                <Notimodal/>
                <Favormodal/>
               <FormGroup>
                    <FormControlLabel witdh="100px"
                    control={<Switch checked={this.state.checklogin}  color="primary"onChange={handleChange} name="checklogin"aria-label="login switch"   />}
                    label={this.state.checklogin ? 'Logout' : 'Login'}
                    />
                </FormGroup>
              
                <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                    <Login/>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="secondary">
                        <p>cancle</p>
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Icon;