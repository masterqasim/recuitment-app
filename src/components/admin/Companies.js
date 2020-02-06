import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import * as firebase from "firebase";
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux'
import {delCompanyProfile} from '../store/actions/adminCompanyActions'
class Companies extends Component {
   
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
                    <h3>Companies</h3>
                    {this.props.companyProfiles.map((data,index)=>{
                       return<div key={index} style={{margin:'5px',padding:'5px',border:'1px solid pink'}}>
                           <DeleteIcon                      
                                style={this.btnStyle}
                                onClick={()=>{this.props.delCompanyProfile(data.id)}}
                            />
                           <p>Company Name :{data.Name}</p>
                           <p>Title :{data.Email}</p>
                           <p>Contact: {data.Contact}</p>
                       </div>
                   })}
                </Paper>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        companyProfiles: state.adminCompanyReducer.companyProfiles
    }
    }
const mapDispatchToProps = dispatch => {
    return {
        delCompanyProfile: (id) => dispatch(delCompanyProfile(id))

    }
}    
export default  connect(mapStateToProps,mapDispatchToProps) (Companies);