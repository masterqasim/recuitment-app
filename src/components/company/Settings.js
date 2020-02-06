import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import * as firebase from "firebase";
import swal from 'sweetalert';

class Settings extends Component {
    state={
        name:'',
        email: '',
        contact:'' 
    }
static getDerivedStateFromProps(props, state) {
    console.log(state)
return null
    }

componentDidMount(){
    let userUid = localStorage.getItem("userUid");
    if(userUid){
        firebase.database().ref('users/' + userUid).once("value",(data)=>{
            let userData = data.val()
if(userData){
    this.setState({email:userData.email})

}
        })
        firebase.database().ref('profile/' + 'company/'+userUid).on("value",(data)=>{
            let userData = data.val()
if(userData){
    this.setState({ contact: userData.contact,name:userData.name }) 
}
            console.log(userData)
        }) 
    }
}

handleInput = ( e ) =>{
    this.setState({
        [e.target.name]:e.target.value
    })
    }

submitForm = ( e ) =>{
    e.preventDefault();
    let userUid = localStorage.getItem("userUid");
    // var updates = {};
    // updates['/profile/' + 'company/' + userUid] = this.state;
    // firebase.database().ref().update(updates).then(()=>{
    // //  dispatch({ type: 'COMPLETE_TODO', todo });
    // })
    firebase.database().ref('profile/' + 'company/').child(userUid).set(this.state).then(()=>{
        // this.setState({name: '',contact:''})
        swal({
            title: "Saved",
            // text: "Are you sure that you want to leave this page?",
            icon: "success",
            // dangerMode: true,
          })
    })
    console.log('submitted')

}

    render() {
        return (
            <div>
                <Paper style={{margin:'25px',padding:'10px'}}>
                    <p>Settings/edit profile</p>
                    <form  
                
                    onSubmit={this.submitForm}
                    >
                        
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="name"
                            label="company name"
                            name="name"
                            onChange={this.handleInput}
                            autoComplete="company name"
                            value={this.state.name}
                             />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="email"
                            name="email"
                            autoComplete="email"
                            value={this.state.email}
                         />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="contact"
                            label="contact"
                            type="contact"
                            id="contact"
                            autoComplete="contact"
                            value={this.state.contact}
                            onChange={this.handleInput}


                        />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        
                        variant="contained"
                        color="primary"
                        style={{ 
                            margin: '16px auto ',
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        }}

                    >
                        Save changes
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        
                        </Grid>
                    </Grid>
                </form>

                </Paper>
            </div>
        )
    }
}
export default Settings;