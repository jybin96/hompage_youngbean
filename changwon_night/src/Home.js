import React, { Component } from 'react';
import Top_AppBar from './appbar/appbar'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import './home.css'
import Moon from './wallpaperbetter.jpg';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Centergrid2 from './mainpaper/grid2';
import Baner1 from './baner1.jpg';
import Baner2 from './baner2.jpg';
import Waagle from './waagle.png';
import Changwonmenu from './changwonmenu/changwon';
import Search from './SearchBar/min';

const style  = {
  root: {
      height: 180,
      width:1530
  },
  
};
class Home extends Component {
  editorRef = React.createRef();
 
  handleClickButton = () => {
    this.editorRef.current.getRootElement().classList.add('my-editor-root');
  };

  componentDidMount(){
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function(event) {
    window.history.go(1);
};
}
  
    render(){
      const {classes} = this.props;
        return (
          <div>
            <Top_AppBar/>
            <div className="searchbox">
              <Search/>
            </div>
            <div className="home_body">
              <div className="home_paper">
                <Centergrid2/>
              </div>
            </div>
            <div className="baner2">
              <img src={Baner2} height="300px" width="150px"/>
            </div>
            <div className="waagle">
              <Changwonmenu/>
            </div>
            <div className="home_bottom">
              <div className="home_bottom_paper">
                <Paper elevation={0} className={this.props.classes.root}>
                  
                  <div className="bottom1">
                    <p className="bottom_title">고객지원</p>
                    <p><a href="">만든이</a></p>
                    <p><a href="">제휴&광고</a></p>
                    <p><a href="">이용약관</a></p>
                    <p><a href="">개인정보이용방침</a></p>   
                  </div>
                  <div className="bottom2">
                    <p className="bottom_title">커뮤니티</p>
                    <p><a href="">만든이</a></p>
                    <p><a href="">제휴&광고</a></p>
                    <p><a href="">이용약관</a></p>
                    <p><a href="">개인정보이용방침</a></p>
                  </div>
                  <div className="bottom3">
                    <p className="bottom_title">캠퍼스</p>
                    <p><a href="">만든이</a></p>
                    <p><a href="">제휴&광고</a></p>
                    <p><a href="">이용약관</a></p>
                    <p><a href="">개인정보이용방침</a></p>
                  </div>
                  <div className="bottom4">
                    <p className="bottom_title">생활정보</p>
                    <p><a href="">만든이</a></p>
                    <p><a href="">제휴&광고</a></p>
                    <p><a href="">이용약관</a></p>
                    <p><a href="">개인정보이용방침</a></p>
                  </div>
                  <div className="bottom5">
                    <p className="bottom_title">취업</p>
                    <p><a href="">만든이</a></p>
                    <p><a href="">제휴&광고</a></p>
                    <p><a href="">이용약관</a></p>
                    <p><a href="">개인정보이용방침</a></p>
                  </div>
                  <div className="bottom6">
                    <p className="bottom_title">공지사항</p>
                    <p><a href="">만든이</a></p>
                    <p><a href="">제휴&광고</a></p>
                    <p><a href="">이용약관</a></p>
                    <p><a href="">개인정보이용방침</a></p>
                  </div>
                </Paper>
              </div>
            </div>
          </div>
          );
    }
  
}

export default withStyles(style)(Home);
