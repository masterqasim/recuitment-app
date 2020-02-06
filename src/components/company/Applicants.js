import React, { Component } from 'react'

export default class Applicants extends Component {
    render() {
        return (
            <div>
                {this.props.applicants.map((data,index)=>{
                    return<div key={index} style={{margin:'5px',padding:'5px',border:'1px solid pink'}}>
                        <p> Name :{data.name}</p>
                        <p>Email :{data.email}</p>
                        <p>Degree : {data.degree}</p>
                        <p> Skills: {data.skills}</p>
                        <p> Experience: {data.experience}</p>
                    </div>
                })}
            </div>
        )
    }
}
