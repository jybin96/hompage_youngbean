import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/AddAPhoto';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import './dongari_writing.css';
import Mac from './mac1.jpg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Button from '@material-ui/core/Button';

class dongari_Writing extends React.Component{
    render() {
        return(
        <Paper id="paper">
            <div className="background">
                <div className="picture">
                    <input accept="image/*" id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <IconButton id="Icon" color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <IconButton id="Icon">
                        <KeyboardArrowLeftIcon/>
                    </IconButton>
                            <img src={Mac} />
                    <IconButton id="Icon">
                        <KeyboardArrowRightIcon/>
                    </IconButton>
                </div>
                <div className="title2">
                    <TextField id="title2" label="동아리 이름" ></TextField>
                </div>
                <div className="price2">
                    <TextField id="price2" label="OO동아리" ></TextField>
                </div>
                <div className="content">
                    <TextField id="content" rowsMax={7} multiline label="동아리에 대해서 설명해주세요."></TextField>
                </div>
                <Button id="writing_button" variant="contained" color="primary">글쓰기</Button>
            </div>
        </Paper>
        );
    }
}
export default dongari_Writing;