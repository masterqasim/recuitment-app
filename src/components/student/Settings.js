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
        degree: '',
        skills:'',
        experience:'' 
    }
static getDerivedStateFromProps(props, state) {
    // console.log(state)
return null
    }

componentDidMount(){
    let userUid = localStorage.getItem("userUid");
    // let userUid = firebase.auth().currentUser.uid;
    if(userUid){
        firebase.database().ref('users/' + userUid).once("value",(data)=>{
            let userData = data.val()
        if(userData){
        this.setState({ name:userData.fName + " " +userData.lName, email:userData.email})        
        }
        }).then(()=>{
            firebase.database().ref('profile/'+ 'student/' + userUid).on("value",(data)=>{
                let userData = data.val()
                    if(userData){
                        this.setState({ degree: userData.degree,skills:userData.skills,experience:userData.experience  }) 
                    }
                // console.log(userData)
            })
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
    firebase.database().ref('profile/' + 'student/').child(userUid).set(this.state).then(()=>{
        // this.setState({degree: '',skills:'',experience:''})
        // swal("Hello world!");
        swal({
            title: "Saved",
            // text: "Are you sure that you want to leave this page?",
            icon: "success",
            // dangerMode: true,
          })
    })
    // console.log('submitted')

}

    render() {
        return (
            <div>
                <Paper style={{margin:'25px',padding:'10px'}}>
                    <p>Settings</p>
                    <form  
                
                    onSubmit={this.submitForm}
                    >
                        
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="name"
                            label="name"
                            name="name"
                            autoComplete="name"
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
                            id="degree"
                            label="degree"
                            name="degree"
                            autoComplete="Degree"
                            value={this.state.degree}
                            onChange={this.handleInput}


                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="skills"
                            label="skills"
                            name="skills"
                            autoComplete="skills"
                            value={this.state.skills}
                            onChange={this.handleInput}


                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="experience"
                            label="Experience"
                            type="Experience"
                            id="experience"
                            autoComplete="Experience"
                            value={this.state.experience}
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