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


class Top_AppBar extends Component {
  
  componentDidMount(){
    window.$ = window.jQuery = jQuery;
    window.$(window).scroll(function() {
      window.$('.header').css({left: 0 - window.$(this).scrollLeft()});
  });
  }
  render(){
    const {classes} = this.props;
  return (
    <div>
    <AppBar position="fixed" className="header"> 
      <Toolbar variant="regular" >
          <Typography variant="h6" color="inherit">
            창원대의 밤
          </Typography>
          <CommuityMenu />
          <CampusMenu/>
          <ImformationMenu/>
          <EmploymentMenu/>
          <NoticeMenu/>
          
          <div className="switchbar">
          <MenuItem>
          <Switchbar/>
        </MenuItem>
          </div>
        
      </Toolbar>
    </AppBar>
  </div>
  )
}
}

export default (Top_AppBar);