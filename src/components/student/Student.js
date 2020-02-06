import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Settings from './Settings'
import Profile from './Profile'
import Dashboards from './Dashboards'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dashboard from '@material-ui/icons/Dashboard'
import SupervisedUserCircleRounded from '@material-ui/icons/SupervisedUserCircleRounded'
import Button from '@material-ui/core/Button';
import SettingsApplications from '@material-ui/icons/SettingsApplications'
import {islogin} from '../store/actions/globalAction'
import {connect} from 'react-redux'
class Student extends Component {
    componentDidMount(){
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
                               <Link to='/student/dashboard' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <Dashboard />
                                        <h3>Dashboard</h3>
                                    </Button>
                                </Link>
                           </ListItem>
                           <ListItem>
                            <Link to='/student/Profile' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <SupervisedUserCircleRounded/>
                                        <h3>My profile</h3>
                                    </Button>
                                </Link>    
                           </ListItem>
                           <ListItem>
                            <Link to='/student/Settings' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <SettingsApplications/>
                                        <h3>Settings</h3>
                                    </Button>
                                </Link>    
                           </ListItem>
                       </List>
                   </Grid>
                   <Grid item xs={12} sm={8} lg={10} xl={10}>
                        <Route exact path="/student/dashboard" component={Dashboards}/>
                        <Route path="/student/Profile" component={Profile}/>
                        <Route path="/student/Settings"  component={Settings}/>
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
export default  connect(null,mapDispatchToProps)(Student); 






 


