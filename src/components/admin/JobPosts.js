import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import * as firebase from "firebase";
import DeleteIcon from '@material-ui/icons/Delete';
import { delCompanyPost } from '../store/actions/adminPostAction'
import {connect} from 'react-redux'

class JobPosts extends Component {
    // state={
    //     JobPosts:[]
    // }
    componentDidMount(){
        // let userUid = localStorage.getItem("userUid");
        // firebase.database().ref('post/').on("value",(data)=>{
        //     let userData = data.val()
        //     if(userData){
        //         for(var key in userData){
        //             let obj={
        //                 Name:userData[key].name ,
        //                 title:userData[key].title,
        //                 description: userData[key].description,
        //                 contact:userData[key].contact,
        //                 id:userData[key].id
        //             }
        //                 this.setState({
        //                     JobPosts:[...this.state.JobPosts,obj]
        //                 })
        //         }
        //     }
 
        // })
    }
    // del = (id) =>{
    //     firebase.database().ref('post/').child(id).remove().then(()=>{
    //     this.setState({
    //         JobPosts: [...this.state.JobPosts.filter(a=>
    //             a.id !== id
    //             )]
    //     })
    // })
    // }
    btnStyle = {
        border:'none',
        borderRadius : '50%',
        cursor:'pointer',
        float:'right',
        color: '#4f4f4f', 
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Paper style={{margin:'25px',padding:'10px',maxHeight:'500px',overflow:'scroll'}}>
                    <h3>Job Posts</h3>
                    {this.props.JobPosts.map((data,index)=>{
                       return<div key={index} style={{margin:'5px',padding:'5px',border:'1px solid pink'}}>
                          <DeleteIcon                      
                                style={this.btnStyle}
                                onClick={()=>{this.props.delCompanyPost(data.id,data.pid)}}
                            />
                           <p>Company Name :{data.Name}</p>
                           <p>Title :{data.title}</p>
                           <p>Discription : {data.description}</p>
                           <p> Contact: {data.contact}</p>
                       </div>
                   })}
                </Paper>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        JobPosts: state.adminPostReducer.JobPosts
    }
    }
const mapDispatchToProps = dispatch => {
    return {
        delCompanyPost: (id,pid) => dispatch(delCompanyPost(id,pid))

    }
}    
    export default  connect(mapStateToProps,mapDispatchToProps) (JobPosts);