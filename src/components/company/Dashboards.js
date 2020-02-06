import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import * as firebase from "firebase";
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {connect} from 'react-redux'
import {fetchAllStudents} from '../store/actions/company/companyActions'

class Dashboards extends Component {
    // state={
    //     studentProfiles:[]
    // }
    componentDidMount(){
        this.props.fetchAllStudents()
        // let userUid = localStorage.getItem("userUid");
        // firebase.database().ref('mypost/'+ userUid ).on("value",(data)=>{
        //     let userData = data.val()
        //     for(var key in userData){
        //         this.setState({
        //             posts:[...this.state.posts,userData[key]]
        //         })
        //         console.log(userData[key])
        //     }
        //     this.state.posts.map((data)=>{
        //         firebase.database().ref('applyed/'+data.id).on("value",(data)=>{
        //             let userData = data.val()
        //             for(var key in userData){
        //                 this.setState({
        //                     applyed:[...this.state.applyed,key]
        //                 })
        //                 console.log(userData[key])
        //             }
        //         })
        //     })
        // })

        // firebase.database().ref('profile/'+ 'student/').on("value",(data)=>{
        //     let userData = data.val()
        //     if(userData){
        //         for(var key in userData){
        //             let obj={
        //                 Name:userData[key].name ,
        //                 Email:userData[key].email,
        //                 Degree: userData[key].degree,
        //                 Skills:userData[key].skills,
        //                 Experience:userData[key].experience 
        //             }
        //                 this.setState({
        //                     studentProfiles:[...this.state.studentProfiles,obj]
        //                 })
        //         }
        //     }
 
        // })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Paper style={{margin:'25px',padding:'10px',height:'500px',overflow:'scroll'}}>                   
                            <h3>Students</h3>
                            {this.props.allStudent.map((data,index)=>{
                            return<div key={index} style={{margin:'5px',padding:'5px',border:'1px solid pink'}}>
                                <p>Name :{data.Name}</p>
                                <p>Email :{data.Email}</p>
                                <p>Degree : {data.Degree}</p>
                                <p>Skills: {data.Skills}</p>
                                <p>Experience: {data.Experience}</p>
                            </div>
                        })}                   
                </Paper>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        allStudent:state.studentProfilsReducer.allStudent
    }
    }
const mapDispatchToProps = dispatch => {
    return {
        fetchAllStudents:()=>dispatch(fetchAllStudents())
    }
}    
    export default  connect(mapStateToProps,mapDispatchToProps)(Dashboards);