import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './profile.css';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Error from '@material-ui/icons/Error';
import Check from '@material-ui/icons/Check';
import Checkbox from '@material-ui/core/Checkbox';
import backgroundimage from './scene-Iron-Man.jpg';
import ionman from './ionman.jpg';
class Profile_change extends Component{
  constructor(props){
    super(props);
    this.state = {
        file : '',
        previewURL : {ionman},
        nickname:'',
        statemessage:'',
        check:false,   
        checking2:false, 
        anchorEl : null,
        open:false
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleopen = this.handleopen.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checknickname = this.checknickname.bind(this);
    this.handleFileOnChange = this.handleFileOnChange.bind(this);
}
handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file : file,
        previewURL : reader.result
      })
    }
    reader.readAsDataURL(file);
  }
handleClose (e){
       
  this.setState({
      anchorEl:null
  })
}
onSubmit(e){
    e.preventDefault();
    const post = {
        nickname:this.state.nicknamecheck,
    }
    if(this.state.idcheck==='')
    {
        toast.error(<div><Error/><div className="toast"><p>아이디 중복체크를 하세요</p></div></div>);
    }
    else{//post전송
        fetch('http://localhost:3001/log',{
            method : "post",
            headers : {
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(toast.success(<div><Check/><div className="toast"><p>수정되었습니다.</p></div></div>))
        .then(window.setTimeout(this.props.handlesub(), 2000))
    }
    
}
handleopen(e){
  this.setState({
      anchorEl: e.currentTarget,
      open:Boolean(e.currentTarget)
  })
}  
onChange(e){
    this.setState({
        [e.target.name]: e.target.value,

      });
}
checknickname(e){  //닉네임 중복검사
    e.preventDefault();
    
        const post = {
            nickname:this.state.nickname
        }
       
            fetch('http://localhost:3001/user',{
            method:"post",
            headers : {
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(res => res.json())
        .then(json => {
          if (json[0] === undefined) {
            toast.success(<div><Check/><div className="toast"><p>사용할수있는 별명입니다.</p></div></div>);
            this.setState({
              nicknamecheck: this.state.nickname,
              checking2:true
            })}
           else {
            toast.error(<div><Error/><div className="toast"><p>이미있는 별명입니다.</p></div></div>);
            this.setState({
                checking2:false
            })
          }
        });
    }
    render(){
        let profile_preview = ionman;
        if(this.state.file !== ''){
      profile_preview = <img className='profile_preview' src={this.state.previewURL}></img>
    }
        const {nickname,statemessage} = this.state;
        const {handleClose,handleopen,onChange,onSubmit,handleFileOnChange} = this;
        return(
            <div className = 'profile_card_change'>       
        <form onSubmit={onSubmit} noValidate autoComplete="off">
        <Card className='profile_card' >
        <CardMedia
          className='backgroundimage'
          image={backgroundimage}
        />
        <input type='file' 
          accept='image/jpg,impge/png,image/jpeg,image/gif' 
          name='profile_img' 
          onChange={this.handleFileOnChange}>
        </input>
            
          <img src={profile_preview} className="profile_image"/>
           
                    <div className="profile_nickname_and_statemessage">
                    <div className="nickinput">
                        <Checkbox checked={this.state.checking2} inputProps={{ 'aria-label': 'primary checkbox' }} color="primary"/>
                        <TextField id="outlined-basic"variant="outlined"size="small" label="nickname" type="text" name="nickname" defaultValue="기존 닉네임" onChange={onChange}/>
                        <Button variant="outlined" color="primary" onClick={this.checknickname}>중복체크</Button>
                    </div>
                    <hr/>
                    <div className="statemessage">   
                        <TextField
                        id="outlined-multiline-static"
                        label="State Message"
                        multiline
                        rows={4}
                        defaultValue="기존 메세지"
                        variant="outlined"

                        />                    
                        
                    </div>
                    </div>
                    <div className="profile_change_button">
                    <Button className = "modify" variant="contained" color="primary" onClick={handleopen}>저장</Button>
                     </div>
                    </Card>
                </form>
        </div>
        )
    }
}

export default Profile_change;