import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import * as firebase from "firebase";
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux'
import {delStudentProfile} from '../store/actions/adminActions'

class Students extends Component {
    
    btnStyle = {
        border:'none',
        borderRadius : '50%',
        cursor:'pointer',
        float:'right',
        color: '#4f4f4f', 
    }
    del = (id) =>{
        console.log(id);
        
        firebase.database().ref('profile/'+ 'student/').child(id).remove().then(()=>{
            this.setState({
                studentProfiles: [...this.state.studentProfiles.filter(a=>
                    id !== a.id
                    )]
            })
           window.location.reload()
        })
        
    }
    render() {
        console.log(this.props.studentProfiles)
        return (
            <div>
                <Paper style={{margin:'25px',padding:'10px'}}>
                    <h3>Students</h3>
                    {this.props.studentProfiles.map((data,index)=>{
                       return<div key={index} style={{margin:'5px',padding:'5px',border:'1px solid pink'}}>
                           <DeleteIcon                      
                                style={this.btnStyle}
                                onClick={()=>{this.props.delStudentProfile(data.id)}}
                            />
                           <p>Student Name :{data.Name}</p>
                           <p>Title :{data.Email}</p>
                           <p>Degree : {data.Degree}</p>
                           <p> Skills: {data.Skills}</p>
                           <p> Experience: {data.Experience}</p>
                            
                       </div>
                   })}
                </Paper>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        studentProfiles: state.adminStudentReducer.studentProfiles
    }
    }
const mapDispatchToProps = dispatch => {
    return {
        delStudentProfile: (id) => dispatch(delStudentProfile(id))

    }
}    
    export default  connect(mapStateToProps,mapDispatchToProps) (Students);