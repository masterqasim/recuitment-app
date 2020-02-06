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


 class SignUp extends Component {
    state={
        fName:"",
        lName:"",
        email:"",
        password:"",
        userType:"student",

    }

submitForm = ( e ) =>{
e.preventDefault();
// firebase call
firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((success)=>{
        let users={
            fName:this.state.fName,
            lName:this.state.lName,
            email:this.state.email,
            userType:this.state.userType
        }
        let userUid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/' + userUid).set(users)
        .then(()=>{
            this.props.history.push("/SignIn")
            this.setState({
                fName:"",
                lName:"",
                email:"",
                password:"",
                userType:"student",
            })
        })
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
    });
}
    
handleInput = ( e ) =>{
this.setState({
    [e.target.name]:e.target.value
})
}
handlefname = ( e ) =>{
this.setState({
    fName:e.target.value
})
}
    render() {
        
        // co   
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
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="ftName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            value={this.state.fName}
                            onChange={this.handlefname}

                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lName"
                            autoComplete="lname"
                            value={this.state.lName}
                            onChange={this.handleInput}


                        />
                        </Grid>
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
                        <Grid item xs={12}>
                            <FormControl 
                            variant="outlined" 
                            fullWidth
                            
                            required
                            >
                                <InputLabel  id="demo-simple-select-outlined-label">
                                Type
                                </InputLabel>
                            
                                <Select
                                   label="Type"
                                id="demo-simple-select-outlined"
                                value={this.state.userType}
                                onChange={this.handleInput}
                                name="userType"
                                required
                                >
                                {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
                                <MenuItem value={'student'} >Student</MenuItem>
                                <MenuItem value={'company'}>Company</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid>
                            
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
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        {/* <Link href="#" variant="body2">
                            Already have an account? Sign in
                        </Link> */}
                        </Grid>
                    </Grid>
                </form>
            </Container>
        )
    }
}
export default SignUp;