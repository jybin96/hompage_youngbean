import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import Popover from '@material-ui/core/Popover';
import './appbar.css';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const styles  = {
  paper: {
    height : "auto",
    width :"auto"
  },
};

class CommuityMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            open : false,
            anchorRef : null
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleListKeyDown = this.handleListKeyDown.bind(this);
    }
    handleToggle(e){
        this.setState({
            open:(prevOpen) => !prevOpen
        })
    }
    handleListKeyDown(e){
        if (e.key === 'Tab') {
            e.preventDefault();
            this.setState({
                open:false
            })
          }
    }
    handleClose (e){
        if (this.state.anchorRef && this.state.anchorRef.contains(e.target)) {
            return;
          }
      
          this.setState({
            open:false
        })
      
    }
    handleClick(e){
        this.setState({
            anchorEl:e.currentTarget,
            open:true
        })
    }
  render(){
      const {handleClose,handleListKeyDown,handleClick} = this;
  return (

      <div className="community">
        <Button
          ref={this.state.anchorRef}
          aria-describedby={this.state.open ? 'simple-popover' : undefined} onClick={handleClick}
        >
          커뮤니티
        </Button>
        <Popover open={this.state.open} anchorEl={this.state.anchorRef}
        id={this.state.open ? 'simple-popover' : undefined}
        open={this.state.open}
        anchorEl={this.state.anchorEl}
        onClose={handleClose}
        classes={{paper :this.props.classes.paper}}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={this.state.open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem><Link to="free">자유게시판</Link></MenuItem>
                    <MenuItem ><Link to="none">익명게시판</Link></MenuItem>
                    <MenuItem><Link to="new">새내기게시판</Link></MenuItem>
                    <MenuItem ><Link to="love">연애상담소</Link></MenuItem>
                    <MenuItem ><Link to="politic">정치게시판</Link></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
        </Popover>
      </div>
  );
}
}

export default withStyles(styles)(CommuityMenu);
