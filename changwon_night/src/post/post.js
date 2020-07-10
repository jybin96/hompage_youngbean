import React, { Component } from 'react';
import './post.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Postbody extends React.Component{

    createData(num, body, name, like, date,see) {
        return { num, body,name ,like, date,see};
      }

    render(){
      const rows = [
        this.createData('1', '오늘 너무 힘들었다 김시우 하... 오늘 너희집에서 재워줘',"어린콩",6,"4분전",24),
        this.createData('2', '오늘 나는 시시해져서 죽고싶어졌다..',"나다임마", 9, "10분전",37),
        this.createData('3', '괴물쥐 행님 화이팅!',"물쥐팬",16,"10분전", 24),
        this.createData('5', '어어어어아아아아아아앙어어앙아아아아앙',"그의이름",3,"10분전", 67),
        this.createData('6', '히이이이이이이이이이이이이이이이이이이이잉',"잉잉잉빌런", 16,"10분전", 49),
        this.createData('7', '오늘 너무 힘들었다 김시우 하... 오늘 너희집에서 재워줘',"김시우", 6,"10분전", 24),
        this.createData('8', '오늘 나는 시시해져서 죽고싶어졌다..',"중2병", 9,"10분전", 37),
        this.createData('9', '괴물쥐 행님 화이팅!',"물쥐팬", 16,"10분전", 24),
        this.createData('10', '어어어어아아아아아아앙어어앙아아아아앙',"잉잉",3,"10분전", 67),
        this.createData('11', '오늘 너무 힘들었다 김시우 하... 오늘 너희집에서 재워줘',"어린콩",6,"4분전",24),
        this.createData('12', '오늘 나는 시시해져서 죽고싶어졌다..',"나다임마", 9, "10분전",37),
        this.createData('13', '괴물쥐 행님 화이팅!',"물쥐팬",16,"10분전", 24),
        this.createData('15', '어어어어아아아아아아앙어어앙아아아아앙',"그의이름",3,"10분전", 67),
        this.createData('16', '히이이이이이이이이이이이이이이이이이이이잉',"잉잉잉빌런", 16,"10분전", 49),
        this.createData('17', '오늘 너무 힘들었다 김시우 하... 오늘 너희집에서 재워줘',"김시우", 6,"10분전", 24),
        this.createData('18', '오늘 나는 시시해져서 죽고싶어졌다..',"중2병", 9,"10분전", 37),
        this.createData('19', '괴물쥐 행님 화이팅!',"물쥐팬", 16,"10분전", 24),
        this.createData('101010', '어어어어아아아아아아앙어어앙아아아아앙',"잉잉",3,"10분전", 67),
      ]; 
      
        return(
            <div>
                <div className="postbody">
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className="head_row">
                        <TableRow>
                            <TableCell  align="center" className="first">번호</TableCell>
                            <TableCell align="center" className="second">제목</TableCell>
                            <TableCell align="center" className="third">이름</TableCell>
                            <TableCell align="center" className="third">좋아요</TableCell>
                            <TableCell align="center" className="fourth">날짜</TableCell>
                            <TableCell align="center" className="third">조회수</TableCell>
                        </TableRow>
                        </TableHead>
                        
                        <TableBody className="row_main">
                            {rows.map((row) => (
                                <TableRow key={row.num}  >
                                <TableCell component="th" scope="row" className="first">
                                    {row.num}
                                </TableCell>
                                <TableCell align="right" className="second"><a href="">{row.body}</a></TableCell>
                                <TableCell align="center" className="first" >{row.name}</TableCell>
                                <TableCell align="center"  className="first">{row.like}</TableCell>
                                <TableCell align="center"  className="first">{row.date}</TableCell>
                                <TableCell align="center" className="first" >{row.see}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>                   
                </div>
            </div>
        )
    }
}

export default Postbody;