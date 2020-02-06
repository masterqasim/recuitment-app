import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Settings from './Settings'
import Profile from './Profile'
import Dashboards from './Dashboards'
import AddPost from './AddPost'
import MyPosts from './MyPosts'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dashboard from '@material-ui/icons/Dashboard'
import SupervisedUserCircleRounded from '@material-ui/icons/SupervisedUserCircleRounded'
import Button from '@material-ui/core/Button';
import SettingsApplications from '@material-ui/icons/SettingsApplications'
import PostAdd from '@material-ui/icons/PostAdd'
import LocalPostOffice from '@material-ui/icons/LocalPostOffice'
import {islogin} from '../store/actions/globalAction'
import {connect} from 'react-redux'


class Company extends Component {
    componentDidMount(){
        this.props.islogin()
    }
    render() {
        console.log('allah')
        return (
            <Router>
                <Container style={{ margin:'1%',height:'600px', marginTop:'70px',backgroundColor:'#f5f5f5'}}>
               <Grid container >
                   <Grid item xs={12} sm={4} lg={2} xl={2}>
                       <List>
                           <ListItem>
                               <Link to='/company/dashboard' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <Dashboard />
                                        <h3>Dashboard </h3>
                                    </Button>
                                </Link>
                           </ListItem>
                           <ListItem>
                            <Link to='/company/AddPost' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <PostAdd/>
                                        <h3>Add Post</h3>
                                    </Button>
                                </Link>    
                           </ListItem>
                           <ListItem>
                            <Link to='/company/MyPosts' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <LocalPostOffice/>
                                        <h3> My Posts</h3>
                                    </Button>
                                </Link>    
                           </ListItem>
                           <ListItem>
                            <Link to='/company/Profile' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <SupervisedUserCircleRounded/>
                                        <h3> profile</h3>
                                    </Button>
                                </Link>    
                           </ListItem>
                           <ListItem>
                            <Link to='/company/Settings' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <SettingsApplications/>
                                        <h3>Settings</h3>
                                    </Button>
                                </Link>    
                           </ListItem>
                       </List>
                   </Grid>
                   <Grid item xs={12} sm={8} lg={10} xl={10}>
                        <Route exact path="/company/dashboard" component={Dashboards}/>
                        <Route path="/company/Profile" component={Profile}/>
                        <Route path="/company/Settings"  component={Settings}/>
                        <Route path="/company/AddPost"  component={AddPost}/>
                        <Route path="/company/MyPosts"  component={MyPosts}/>

                   </Grid>

               </Grid>
            </Container>
            </Router>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        islogin:()=>dispatch(islogin())
    }
}    
export default  connect(null,mapDispatchToProps)(Company); 






 


