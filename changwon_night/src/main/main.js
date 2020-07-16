import React from 'react';
import './login.css'; 
import Longin from '../signin/signin';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import congratulation from './party/congratulation.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabList from '@material-ui/lab/TabList';
import TabContext from '@material-ui/lab/TabContext';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',//아이디
            pw:'',//비밀번호
            nickname:'',
            admin:false,
            open:false,
            signin:false,
            value: '0',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleopen = this.handleopen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handlesub = this.handlesub.bind(this);
        this.handleChange = this.handleChange.bind(this);   
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,

          });
    }

    onSubmit(e){
        e.preventDefault();
        const post ={
            id:this.state.id,
            pw:this.state.pw
        }
        fetch('http://localhost:3001/admin',{
            method: "post",
            headers : {
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(res => res.json())
        .then(json =>{
            if(json.boolean===false)
            {
                this.setState({
                    admin:false
                })
                alert('아이디비번다시확인!');
            }else{
                this.setState({
                    admin:true,
                    nickname:json.nickname,
                    open:false,
                    
                })
                this.props.authsubmit(true)
                this.props.handleClose();
                alert("로그인 완료");
                
            }
           
        })
        
    }
      handleopen(e){
        this.setState({
            open:true
        })
      }
      handleClose (e){
       
        this.setState({
            open:false,
            signin:false,
            value:"0"
        })
      }
      handlesub(){
          
        this.setState({
            open:false,
            signin:true
        })
      }
      handleChange(event,newValue) {
          this.setState({
              value: newValue
          })
      }
     
    render(){
        const {id,pw} = this.state;
        const {onChange,onSubmit,handleopen,handleClose,handlesub,handleChange,a11yProps} = this;
        return(
            <div id="tabcontext" >
            <TabContext value={this.state.value} >
            <div className="logbox">
                    <TabList
                            value = {this.state.value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="action tabs example"
                    >
                            <Tab label="로그인"  value="0"/>
                            <Tab label="회원가입" value="1"/>
                            <Tab label="아이디 찾기"  value="2"/>
                            <Tab label="비밀번호 찾기"value="3"/>
                    </TabList>
                <DialogContent>
                <div >  
                <TabPanel value="0">
                    <form onSubmit={onSubmit}>
                        <div className="id">
                            <p>아이디 입력하세요</p>
                            <TextField id="outlined-basic"variant="outlined"size="small" label="ID" type="text"  name="id"  value={id} onChange={onChange}/>
                        </div>                     
                        <div className="pw">
                            <p>패스워드 입력하세요</p>
                            <TextField id="outlined-basic"variant="outlined"size="small" label="password" type="password"  name="pw"  value={pw} onChange={onChange}/> 
                        </div>
                        <DialogActions>
                            <Button variant="contained" color="primary" type="submit">로그인</Button>
                        </DialogActions>
                    </form>
                </TabPanel>   
                <TabPanel value="1">   
                        <Longin handlesub={handlesub}/>
                        
                        <Dialog open={this.state.signin} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <div className="pp">
                                    <div className="partynight">
                                        <img src={congratulation} width="30px" height="30px" id="party"/>
                                        <p>축하합니다</p>
                                        <img src={congratulation} width="30px" height="30px" id="party2"/>
                                    </div>
                                </div>
                                <div className="pp2">
                                    <p id="dialog">창원대의 밤 회원가입을 진심으로 축하드립니다 이제 창원대의 밤 커뮤니티를 마음껏 즐기세요.</p>
                                </div>      
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} variant="contained" color="primary">
                                    <p>확인</p>
                                </Button>
                            </DialogActions>
                        </Dialog>
                </TabPanel>
                <TabPanel value="2">
                    <form onSubmit={onSubmit}>
                        <div className="id">
                            <p>E-mail 입력하세요</p>
                            <TextField id="outlined-basic"variant="outlined"size="small" label="E-mail" type="text"  name="id"  value={id} onChange={onChange}/>
                        </div>                     
                        <DialogActions>
                            <Button variant="contained" color="primary" type="submit">아이디찾기</Button>
                        </DialogActions>
                    </form>
                </TabPanel>
                <TabPanel value="3">
                    <form onSubmit={onSubmit}>
                        <div className="id">
                            <p>E-mail 입력하세요</p>
                            <TextField id="outlined-basic"variant="outlined"size="small" label="E-mail" type="text"  name="id"  value={id} onChange={onChange}/>
                        </div>                     
                        <div className="pw">
                            <p>아이디 입력하세요</p>
                            <TextField id="outlined-basic"variant="outlined"size="small" label="password" type="password"  name="pw"  value={pw} onChange={onChange}/> 
                        </div>
                        <DialogActions>
                            <Button variant="contained" color="primary" type="submit">비밀번호 찾기</Button>
                        </DialogActions>
                    </form>
                </TabPanel>   
                </div>
                </DialogContent>   
            </div>
            </TabContext>
            </div>
        )
    }
}


export default Login;