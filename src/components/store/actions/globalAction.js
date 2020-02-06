import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as firebase from "firebase";

export const islogin = () => {
    return (dispatch, getState) => {
        let userUid     
        // let userUid = localStorage.getItem("userUid");
        if(firebase.auth().currentUser){
         userUid = firebase.auth().currentUser.uid;
        }

        if(userUid !== "null" && userUid ){
            dispatch({ type: 'ISLOGIN_YES' })
        }
        else{
            dispatch({type:'ISLOGIN_NO'})
        }
    }
  };