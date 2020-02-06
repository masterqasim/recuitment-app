import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {fetchApplicants} from '../store/actions/company/companyActions'
import {connect} from 'react-redux'

class SpecificCompany extends Component {
    render() {
        let {data}=this.props;
        return (
            <div>
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
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchApplicants:(id)=>{dispatch(fetchApplicants(id))}

    }
}    
export default  connect(null,mapDispatchToProps)(SpecificCompany)