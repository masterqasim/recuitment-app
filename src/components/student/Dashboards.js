import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import * as firebase from "firebase";
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {fetchposts,apply,fetchcompanies} from '../store/actions/student/studentActions'


class Dashboards extends Component {
    componentDidMount(){
        this.props.fetchcompanies()
    }
    jobs = (id) =>{
        this.props.fetchposts(id)
    }
    apply = (id) =>{
        this.props.fetchposts(id)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Paper style={{margin:'25px',padding:'10px',height:'500px',overflow:'scroll'}}>
                    Dashboards
                    <Container>
                        <Grid container spacing={1}>
                            <Grid item xs={12} lg={3} style={{}}>
                                <h3>Companies</h3>
                                <List>
                                {this.props.companies.map((data,index)=>{
                                     return<ListItem key={data.id} style={{margin:'2px',padding:'5px',border:'1px solid pink'}}>
                                            <div>
                                            <p>Company Name :{data.name}</p>
                                            <p>Email :{data.email}</p>
                                            <p>Contact : {data.contact}</p>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                onClick={()=>{this.apply(data.id)}}
                                                style={{ 
                                                    margin: '16px auto ',
                                                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                                }}
                                            >
                                                Show jobs
                                            </Button>
                                            </div>
                                            
                                          </ListItem>
                                })}
                                </List>
                            </Grid>
                            <Grid item xs={12} lg={9}>
                                <h3>posts</h3>
                                <List>
                                    {this.props.post.map((data,index)=>{
                                        console.log(data)
                                     return<ListItem key={data.id} style={{margin:'2px',padding:'5px',border:'1px solid pink'}}>
                                            <div style={{width:"100%"}}>
                                            <p>Company Name :{data.name}</p>
                                            <p>Title :{data.title}</p>
                                            <p>Contact : {data.contact}</p>
                                            <p>Description: {data.description}</p>
                                            {data.isApplyed?<Button
                                                type="submit"
                                                fullWidth
                                                disabled
                                                variant="contained"
                                                color="primary"
                                                // onClick={()=>{this.props.apply(data.id)}}
                                                style={{ 
                                                    margin: '16px auto ',
                                                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                                }}
                                            >
                                                Applyed
                                            </Button>
                                            :
                                            <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            onClick={()=>{this.props.apply(data.id)}}
                                            style={{ 
                                                margin: '16px auto ',
                                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                                
                                            }}
                                        >
                                            Apply
                                        </Button>
                                        }
                                            </div>
                                            
                                          </ListItem>
                                })}
                                </List>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        companies: state.studentReducer.company,
        post: state.studentJobReducer.specificCompany
    }
    }
const mapDispatchToProps = dispatch => {
    return {
        apply: (id) => dispatch(apply(id)),
        fetchcompanies:()=>dispatch(fetchcompanies()),
        fetchposts:(id)=>dispatch(fetchposts(id))

    }
}    
    export default  connect(mapStateToProps,mapDispatchToProps)  (Dashboards);