import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/AddAPhoto';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import './writing.css';
import Mac from './mac.jpg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Button from '@material-ui/core/Button';

class Writing extends React.Component{
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
                            <img src={Mac} />
                    <IconButton id="Icon">
                        <KeyboardArrowRightIcon/>
                    </IconButton>
                </div>
                <div className="title">
                    <TextField id="title" label="글 제목" ></TextField>
                </div>
                <div className="price">
                    <FormControl id="price" >
                        <InputLabel>가격 입력</InputLabel>
                        <Input endAdornment={<FormControlLabel id="price_label" control={<Checkbox  name="gilad" />} label="가격제안 받기"/>} />
                    </FormControl>
                </div>
                <div className="content">
                    <TextField id="content" rowsMax={7} multiline label="게시글에 작성될 내용을 입력해주세요."></TextField>
                </div>
                <Button id="writing_button" variant="contained" color="primary">글쓰기</Button>
            </div>
        </Paper>
        );
    }
}
export default Writing;