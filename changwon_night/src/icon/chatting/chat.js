import React from 'react';
import Mail from '../facebook.png';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import './chat.css'
import { withStyles } from '@material-ui/core/styles';
import person from '../person/doctor.png';
import TextField from '@material-ui/core/TextField';
import Emoticon from './emoji.png';
import thumb from './like.png';

const style  = {
    paper: {
        height: 400,
        width: 350,
    },
    
  };

class Chattingpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            anchorEl : null,
            open:false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleopen = this.handleopen.bind(this);
        this.mesRef = React.createRef();
    }

    handleClose (e){
       
        this.setState({
            anchorEl:null
        })
    }

    handleopen(e){
        this.setState({
            anchorEl: e.currentTarget,
            open:Boolean(e.currentTarget)
        })
        this.scrollToBottom();
    } 
    scrollToBottom = () => {
		this.mesRef.current.scrollTop = this.mesRef.current.scrollHeight;
	};
    render(){
        const {handleClose,handleopen} =this;
        const {classes} = this.props;
        return(
            <div>
                <div id="chat">
                    <IconButton  color="inherit"onClick={handleopen} >
                        <img src={Mail} height="30px" width="30px"/>
                    </IconButton>
                </div>
                <div className="chatting_paper">
                <Popover
                    id={this.state.open ? 'simple-popover' : undefined}
                    open={Boolean(this.state.anchorEl)}
                    anchorEl={this.state.anchorEl}
                    onClose={handleClose}
                    classes={{ paper:this.props.classes.paper }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                    transformOrigin={{
                        vertical:  50,
                        horizontal: 630,
                      }}  
                >
                    <div className="main">
                        <div className="_chat">
                            <img src={person} height="40px" width="40px"/>
                            <div className="_chat_title">
                            <p>어린콩</p>
                            </div>
                        </div>
                        <div className="chat_scroll" ref={this.mesRef}>
                            <div classes="_chat_on">
                                <div className="chat_img">
                                    <img src={person} height="30px" width="30px"/>
                                </div>
                                <div className="cloud">
                                    안녕하세요 물건보고 연락드렸습니다 ㅎㅎ
                                </div>
                            </div>
                            <div classes="_chat_me">
                                <div className="cloud_me">
                                아 넵 ㅎㅎ 무슨 물건보고 오셨나요 ? ㅋㅋㅋ 
                                </div>
                            </div>
                            <div classes="_chat_on">
                                <div className="chat_img">
                                    <img src={person} height="30px" width="30px"/>
                                </div>
                                <div className="cloud">
                                    동물의 숲 싸게판다고 하셔서 연략했어용 
                                </div>
                            </div>
                            <div classes="_chat_me">
                                <div className="cloud_me">
                                아 넵 ㅎㅎ 무슨 물건보고 오셨나요 ? ㅋㅋㅋ 
                                </div>
                            </div>
                            <div classes="_chat_on">
                                <div className="chat_img">
                                    <img src={person} height="30px" width="30px"/>
                                </div>
                                <div className="cloud">
                                    동물의 숲 싸게판다고 하셔서 연략했어용 
                                </div>
                            </div>
                        </div>
                    <div className="bottommenu">
                    <label>입력</label>
                    <TextField id="outlined-basic" variant="outlined" placeholder="입력하세요."/>
                    <IconButton  color="inherit" size="small">
                        <img src={Emoticon} width="28px" height="28px"/>
                    </IconButton>
                    <IconButton  color="inherit" size="small" >
                        <img src={thumb} width="28px" height="28px"/> 
                    </IconButton>       
                    </div>
                    </div>
                </Popover>
                </div>
                
            </div>
            
        )
    }
}

export default withStyles(style)(Chattingpage);