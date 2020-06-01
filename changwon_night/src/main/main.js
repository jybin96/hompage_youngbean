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
import Error from '@material-ui/icons/Error';
import Check from '@material-ui/icons/Check';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',//아이디
            pw:'',//비밀번호
            nickname:'',
            admin:false,
            open:false,
            signin:false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleopen = this.handleopen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handlesub = this.handlesub.bind(this);
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
            signin:false
        })
      }
      handlesub(){
          
        this.setState({
            open:false,
            signin:true
        })
      }
    render(){
        const {id,pw} = this.state;
        const {onChange,onSubmit,handleopen,handleClose,handlesub} = this;
        return(
            
            <div className="logbox">
                <p>창원대의밤</p>
                <div className="idpwbox">  
                    <form onSubmit={onSubmit}>
                        <div className="id">
                            <p>아이디 입력하세요</p>
                            <TextField id="outlined-basic"variant="outlined"size="small" label="ID" type="text"  name="id"  value={id} onChange={onChange}/>
                        </div>                     
                        <div className="pw">
                            <p>패스워드 입력하세요</p>
                            <TextField id="outlined-basic"variant="outlined"size="small" label="password" type="password"  name="pw"  value={pw} onChange={onChange}/> 
                        </div>
                        <Button variant="contained" color="primary" type="submit">로그인</Button>
                    </form>
                       
                    <ul id="sign">
                        <li>
                        <Button variant="contained" color="primary" onClick={handleopen}>회원가입</Button>
                        <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogContent>
                                <Longin handlesub={handlesub}/>
                            </DialogContent>
                        </Dialog>
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
                                    <p id="dialog">창원의 밤 회원가입을 진심으로 축하드립니다 이제 창원의 밤 커뮤니티를 마음껏 즐기세요.</p>
                                </div>      
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} variant="contained" color="primary">
                                <p>확인</p>
                                </Button>
                            </DialogActions>
                        </Dialog>
                        </li>
                        <li>
                        <Button variant="contained" color="primary">ID/PW찾기</Button>
                        </li>
                        <li>
                        
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}


export default Login;