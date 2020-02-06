import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import * as firebase from "firebase";

class AddPost extends Component {
    state={
        name:'',
        title:'',
        description: '',
        contact:'' ,
        id: firebase.database().ref().push().key
    }

componentDidMount(){
    let userUid = localStorage.getItem("userUid");
    if(userUid){
        firebase.database().ref('profile/' + 'company/'+ userUid).once("value",(data)=>{
            let userData = data.val()
            console.log('allah',userData)
            if(userData){
                this.setState({name:userData.name,contact:userData.contact})
             }
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
    firebase.database().ref('mypost/'+userUid).child(this.state.id).set(this.state).then(()=>{
    //    let id = firebase.database().ref().push().key;
    this.setState({description: '',title:''})
       let post ={
           title:this.state.title,
           description:this.state.description,
           contact:this.state.contact,
           name:this.state.name,
           id:this.state.id 
       }
        firebase.database().ref('post/'+this.state.id).set(post).then(()=>{
            this.setState({description: '',title:''})
        })
    })
    console.log('submitted')

}

    render() {
        return (
            <div>
                <Paper style={{margin:'25px',padding:'10px'}}>
                    <p>post a job</p>
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
                            autoComplete="company name"
                            value={this.state.name}
                             />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            required
                            id="title"
                            label="title"
                            name="title"
                            autoComplete="title"
                            value={this.state.title}
                            onChange={this.handleInput}

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


                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            multiline
                            maxlength="5"
                            name="description"
                            label="description"
                            type="description"
                            id="description"
                            autoComplete="description"
                            value={this.state.description}
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
export default AddPost;