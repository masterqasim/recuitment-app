import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import * as firebase from "firebase";


 class Profile extends Component {
    state={
        Name:'',
        Email: '',
        Contact: ''
    }
    componentDidMount(){
        let userUid = localStorage.getItem("userUid");
        firebase.database().ref('profile/'+'company/' + userUid).on("value",(data)=>{
            let userData = data.val()
         if(userData){
            this.setState({ 
                Name:userData.name ,
                Email:userData.email,
                Contact: userData.contact
            })
         }
            console.log(userData)
        })
        // let userUid = localStorage.getItem("userUid");
        if(userUid){
            firebase.database().ref('users/' + userUid).once("value",(data)=>{
                let userData = data.val()
                if(userData){
                    this.setState({Email:userData.email})
                }
            })
        }
    }
    render() {
        console.log(this.state)
        let { Name,Email,Contact}=this.state;
        return (
            <div  > 
                <Paper style={{margin:'25px',padding:'10px'}}>
                    <h3>Company Name: {Name}</h3>
                    <h3>Email: {Email} </h3>
                    <h3>Contact: {Contact}</h3>
                </Paper> 
            </div>
        )
    }
}
export default Profile;