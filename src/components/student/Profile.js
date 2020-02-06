import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import * as firebase from "firebase";


 class Profile extends Component {
    state={
        Name:'',
        Email: '',
        Degree: '',
        Skills:'',
        Experience:'' 
    }
    componentDidMount(){
        let userUid = localStorage.getItem("userUid");
        // let user = firebase.auth().currentUser.uid; 
        // console.log(user)
        //start
        if(userUid){
            firebase.database().ref('users/' + userUid).once("value",(data)=>{
                let userData = data.val()
            if(userData){
            this.setState({ Name:userData.fName + " " +userData.lName, Email:userData.email})        
            }
            })
             
        }
        //end
        firebase.database().ref('profile/' +'student/'+ userUid).on("value",(data)=>{
            let userData = data.val()
         if(userData){
            this.setState({ 
                Name:userData.name ,
                Email:userData.email,
                Degree: userData.degree,
                Skills:userData.skills,
                Experience:userData.experience  
            })
         }
            console.log(userData)
        })
    }
    render() {
        console.log(this.state)
        let { Name,Email,Degree,Skills, Experience }=this.state;
        return (
            <div  > 
                <Paper style={{margin:'25px',padding:'10px'}}>
                    <h3>Name: {Name}</h3>
                    <h3>Email: {Email} </h3>
                    <h3>Degree: {Degree}</h3>
                    <h3>Skils: {Skills}</h3>
                    <h3>Experience: {Experience}</h3>
                </Paper> 
            </div>
        )
    }
}
export default Profile;