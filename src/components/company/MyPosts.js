import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import * as firebase from "firebase";
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {fetchAllMyPosts} from '../store/actions/company/companyActions'
import {fetchApplicants} from '../store/actions/company/companyActions'

 class Profile extends Component {
    state={
       posts:[],
       applyed:[]
    }
    componentDidMount(){
        this.props.fetchAllMyPosts()
    }
aplicant = (id) =>{
  
}    
    render() {
        console.log(this.props)
        
        return (
            <div  > 
                <Paper style={{margin:'25px',padding:'10px',maxHeight:'500px',overflow:'scroll' }}>
                <Grid container>
                        <Grid item xs={12} sm={12} lg={6} xl={6}>
                        <h3>my posts</h3>
                            {this.props.allMyPosts.map((data)=>{
                                return<div key={data.id} style={{margin:'5px',padding:'5px',border:'1px solid pink'}}>
                                    <p>Company Name :{data.name}</p>
                                    <p>Title :{data.title}</p>
                                    <p>Discription : {data.description}</p>
                                    <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            onClick={()=>{this.props.fetchApplicants(data.id)}}
                                            style={{ 
                                                margin: '16px auto ',
                                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                            }}
                                        >
                                            Show Applicants
                                        </Button>
                                </div>
                            })}
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} xl={6}>
                            <h3>Applied on posts</h3>
                            {this.props.applicants.map((data,index)=>{
                            return<div key={index} style={{margin:'5px',padding:'5px',border:'1px solid pink'}}>
                                <p> Name :{data.name}</p>
                                <p>Email :{data.email}</p>
                                <p>Degree : {data.degree}</p>
                                <p> Skills: {data.skills}</p>
                                <p> Experience: {data.experience}</p>
                            </div>
                        })} 

                        </Grid>
                    </Grid>

                </Paper> 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        allMyPosts: state.companyMyPostReducer.allMyPosts,
        applicants: state.applicantsReducer.applicants
        // post: state.studentJobReducer.specificCompany
    }
    }
const mapDispatchToProps = dispatch => {
    return {
        // apply: (id) => dispatch(apply(id)),
        fetchAllMyPosts:()=>dispatch(fetchAllMyPosts()),
        fetchApplicants:(id)=>{dispatch(fetchApplicants(id))}

    }
}    
    export default  connect(mapStateToProps,mapDispatchToProps)  (Profile);

