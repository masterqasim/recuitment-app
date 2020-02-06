import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Companies from './Companies'
import JobPosts from './JobPosts'
import Students from './Students'
// import AddPost from './AddPost'
// import MyPosts from './MyPosts'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dashboard from '@material-ui/icons/Dashboard'
import SupervisedUserCircleRounded from '@material-ui/icons/SupervisedUserCircleRounded'
import Button from '@material-ui/core/Button';
import Work from '@material-ui/icons/Work'
import Person from '@material-ui/icons/Person'
import Business from '@material-ui/icons/Business'
import {fetchStudentProfiles} from '../store/actions/adminActions'
import {fetchCompanyProfiles} from '../store/actions/adminCompanyActions'
import { connect } from 'react-redux'
import {fetchCompanyPost} from '../store/actions/adminPostAction'
import {islogin} from '../store/actions/globalAction'

class Admin extends Component {
    componentDidMount(){
        this.props.fetchStudentProfiles()
        this.props.fetchCompanyProfiles()
        this.props.fetchCompanyPost()
        this.props.islogin()
       }
    render() {
        console.log('allah')
        return (
            <Router>
                <Container style={{ margin:'1%', marginTop:'70px',backgroundColor:'#f5f5f5'}}>
               <Grid container >
                   <Grid item xs={12} sm={4} lg={2} xl={2}>
                       <List>
                           
                           <ListItem>
                            <Link to='/Admin/Students' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <Person/>
                                        <h3>Students</h3>
                                    </Button>
                                </Link>    
                           </ListItem>
                           <ListItem>
                            <Link to='/Admin/Companies' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <Business/>
                                        <h3> Companies</h3>
                                    </Button>
                                </Link>    
                           </ListItem>
                           <ListItem>
                            <Link to='/Admin/JobPosts' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <Work/>
                                        <h3>Jobs</h3>
                                    </Button>
                                </Link>    
                           </ListItem>
                       </List>
                   </Grid>
                   <Grid item xs={12} sm={8} lg={10} xl={10}>
                        <Route exact path="/Admin/Students" component={Students}/>
                        <Route path="/Admin/Companies" component={Companies}/>
                        <Route path="/Admin/JobPosts"  component={JobPosts}/>

                   </Grid>

               </Grid>
            </Container>
            </Router>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchStudentProfiles: () => dispatch(fetchStudentProfiles()),
        fetchCompanyProfiles: () => dispatch(fetchCompanyProfiles()),
        fetchCompanyPost: () => dispatch(fetchCompanyPost()),
        islogin:()=>dispatch(islogin())
    }
  }
  
  export default connect(null, mapDispatchToProps)( Admin); 






 


