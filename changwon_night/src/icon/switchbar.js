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
class Switchbar extends React.Component{
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
    render(){
        return(
            <div>
                <FormGroup>
                    <FormControlLabel witdh="100px"
                    control={<Switch checked={this.state.checklogin}  color="primary"onChange={this.handleChange} name="checklogin"aria-label="login switch"   />}
                    label={this.state.checklogin ? 'Logout' : 'Login'}
                    />
                </FormGroup>
              
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                    <Login/>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} variant="contained" color="secondary">
                        <p>cancle</p>
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default Switchbar;