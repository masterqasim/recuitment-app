import React, { Component , Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header'
import Footer from './layout/Footer'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Student from './components/student/Student'
import Company from './components/company/Company'
import * as firebase from "firebase";
import './config.js'
import Admin from './components/admin/Admin';
import { Redirect } from 'react-router-dom'


 class App extends Component {
   state={
     type:''
   }
  componentWillMount(){
    let userUid = localStorage.getItem("userUid");
      if(userUid){
        firebase.database().ref('users/' + userUid).on("value",(data)=>{
            let userData = data.val()
          if(userData){
            this.setState({type:userData.userType})
          }
        })   
      }
   }
  render() {
    console.log(this.state)
    return (
      <Router>
        <Fragment>
          <Header/>
          {this.state.type==="student"?
           <Redirect to='/Student' />
            :  this.state.type==="company"?
            <Redirect to='/Company' />
            : this.state.type==="admin"?
           
            <Redirect to='/Admin' />
            :
            <Redirect to='/SignIn' />
          }
          
          <Route path="/SignUp" component={SignUp}></Route> 
          <Route path="/SignIn" component={SignIn}/>
          <Route path="/Student" component={Student}/>
          <Route path="/Company" component={Company}/>
          <Route path="/Admin" component={Admin}/>
         
        </Fragment>
      </Router>
      
    )
  }
}
export default App;