import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import * as firebase from "firebase";
// import Sign from './SignUp'

 class SignUp extends Component {
    state={
        email:"",
        password:"",
    }

submitForm = ( e ) =>{

    e.preventDefault();
    console.log(this.state)
// firebase call
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((success) => {
            let userUid = firebase.auth().currentUser.uid;
            localStorage.setItem("userUid", userUid);
            if(userUid){
                firebase.database().ref('users/' + userUid).on("value",(data)=>{
                    let userData = data.val()
                    console.log(userData.userType)
                    if(userData.userType === "student"){
                        this.props.history.push("/Student")
                    }
                    else if(userData.userType === "company"){
                        this.props.history.push("/Company")

                    }
                    else{
                        this.props.history.push("/Admin")

                    }
                })   
            }
            // this.props.history.push("/Student")
            // this.props.history.push("/Company")

            console.log(success)
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
        });
}
    
handleInput = ( e ) =>{
this.setState({
    [e.target.name]:e.target.value
})
}

    render() {

        return (
            <Container style={{
                    marginTop: '5%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                    maxWidth="xs"
                >

                <form  
                    style={{
                        width:'100%',
                        marginTop:'25%',
                        backgroundColor:'white',
                        padding:'5%'

                    }}
                    onSubmit={this.submitForm}
                    >
                        <Avatar  style={{margin:'10px auto'}}>
                         <LockOutlinedIcon />
                        </Avatar>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={this.state.email}
                                onChange={this.handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={this.state.password}
                                onChange={this.handleInput}
                            />
                        </Grid>                       
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ 
                            margin: '16px auto ',
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        }}

                    >
                        Sign In
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        {/* <Link href="#" variant="body2" >
                            Don't have an account? Sign up
                        </Link> */}
                        </Grid>
                    </Grid>
                </form>
            </Container>
        )
    }
}
export default SignUp;