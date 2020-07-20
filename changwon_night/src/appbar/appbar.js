import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CommuityMenu from './CommuityMenu';
import CampusMenu from './CampusMenu';
import NoticeMenu from './NoticeMenu';
import ImformationMenu from './ImformationMenu';
import EmploymentMenu from './EmploymentMenu';
import './appbar.css';
import Switchbar from '../icon/switchbar';
import jQuery from "jquery";
import Realtitle from './realtitle.png';
import { Link } from 'react-router-dom';


class Top_AppBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      checklogin:false,
          open:false,
          auth:false
    }
  }
  
  componentWillMount(){
    
    window.$ = window.jQuery = jQuery;
    window.$(window).scroll(function() {
      window.$('.header').css({left: 0 - window.$(this).scrollLeft()});
  });
  const user = localStorage.getItem('admin')
  console.log(user);
  if(user==='true'){
      this.setState({
          checklogin:true,
          auth:true
      })
      console.log(this.state.open);
  }else{
    this.setState({
      checklogin:false,
      auth:false
  })
  }
 
  }
  render(){
    const {classes} = this.props;
  return (
    <div className="app_main">
    <AppBar position="fixed" className="header"> 
      <Toolbar variant="regular" >
            <Link to="/"><img src={Realtitle}  width="200px" height="40px"/></Link>
            
          
          <CommuityMenu />
          <CampusMenu/>
          <ImformationMenu/>
          <EmploymentMenu/>
          <NoticeMenu/>

          <span className="switchbar">
          <MenuItem>
          <Switchbar checklogin={this.state.checklogin} open= {this.state.open} auth={this.state.auth}/>
          </MenuItem>
          </span>
        
      </Toolbar>
    </AppBar>
  </div>
  )
}
}

export default (Top_AppBar);