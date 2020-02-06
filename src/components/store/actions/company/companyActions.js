import * as firebase from "firebase";
import swal from 'sweetalert';

export const fetchAllStudents = (id) => {
    return (dispatch, getState) => {
      // make async call to database
      let arr=[];
      firebase.database().ref('profile/'+ 'student/').on("value",(data)=>{
        let userData = data.val()
        if(userData){
            for(var key in userData){
                let obj={
                    Name:userData[key].name ,
                    Email:userData[key].email,
                    Degree: userData[key].degree,
                    Skills:userData[key].skills,
                    Experience:userData[key].experience 
                }
                arr.push(obj) 
            }
            // console.log(arr,'**********')
            dispatch({
                type: "FETCH_ALL_STUDENTS",
                asp: arr
            })
            arr=[]
        }
    })
      
     }
};
export const fetchAllMyPosts = (id) => {
    return (dispatch, getState) => {
      // make async call to database
      let arr=[];
      let userUid = localStorage.getItem("userUid");
        firebase.database().ref('mypost/'+ userUid).on("value",(data)=>{
            let userData = data.val()
            for(var key in userData){
                arr.push(userData[key])
            }
            dispatch({
                type: "FETCH_ALL_POST",
                asp: arr
            })
            arr=[]
            // console.log(arr,'^^^^^^^^^^^^^')
        })

     }
};
export const fetchApplicants = (id) => {
    return (dispatch, getState) => {
      // make async call to database
      let arr=[];
      firebase.database().ref('applyed/' + id).on("value",(data)=>{
        let userData = data.val();
        if(!userData){
            swal({
                title: "hmmm...",
                text: "No student for this job  ",
                icon: "error",
                // dangerMode: true,
              })

        }
        for(var key in userData){
            firebase.database().ref('profile/' +'student/'+ key).on("value",(data)=>{
                let userData = data.val();
                // console.log(userData)
                if(userData){
                    arr.push(userData)  
                 }
            })      
        }
        setTimeout(()=>{
            dispatch({
                type: "FETCH_APPLICANTS",
                asp: arr
            })
            arr=[]
    },1000)
        
    })

     }
};
  




