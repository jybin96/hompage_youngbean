import React from 'react';
import './Board_list.css';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
    setOpen2(false);
    setOpen3(false);
  };

  const handleClick2 = () => {
    setOpen1(false);
    setOpen2(!open2);
    setOpen3(false);
  };

  const handleClick3 = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(!open3);
  };


  return (
    <div className="aaas">
     <List component="nav" aria-label="main mailbox folders">
      <ListItem button onClick={handleClick1}>
        <ListItemText primary="바로가기" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <ListItem button onClick={handleClick2}>
        <ListItemText primary="즐겨찾기" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open2} timeout="auto" unmountOnExit>

        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="내용2" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick3}>
        <ListItemText primary="history" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className="_body">
          <ListItem button>
            <ListItemText primary="커뮤니티"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="내용2"/>
          </ListItem>
          
          <ListItem button className={classes.nested}>
            <ListItemText primary="내용2"/>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemText primary="캠퍼스"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="내용2"/>
          </ListItem>
          <Divider/>
          
          <ListItem button>
            <ListItemText primary="생활정보"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="내용2"/>
          </ListItem>
          <Divider/>

          <ListItem button>
            <ListItemText primary="취업"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="내용2"/>
          </ListItem>
          <Divider/>

          <ListItem button>
            <ListItemText primary="공지사항"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="내용2"/>
          </ListItem>
        </List>
      </Collapse>

      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="내용3" />
          </ListItem>
        </List>
      </Collapse>

    </List>

    </div>
  );
}