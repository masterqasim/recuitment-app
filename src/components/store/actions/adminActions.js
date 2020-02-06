import * as firebase from "firebase";

export const fetchStudentProfiles = (data) => {
    return (dispatch, getState) => {
      // make async call to database
      let userUid = localStorage.getItem("userUid");
        firebase.database().ref('profile/'+ 'student/').on("value",(data)=>{
            let userData = data.val()
            let arr=[]
            if(userData){
                for(var key in userData){
                    let obj={
                        Name:userData[key].name ,
                        Email:userData[key].email,
                        Degree: userData[key].degree,
                        Skills:userData[key].skills,
                        Experience:userData[key].experience,
                        id:key 
                    }
                    arr.push(obj)
                    // dispatch({
                    //     type: "FETCH_STUDENT_PROFILES",
                    //     asp: obj
                    // })             
                }
                dispatch({
                    type: "FETCH_STUDENT_PROFILES",
                    asp: arr
                })
                arr=[]
            }
        })      
    }
};
export const delStudentProfile = (id) => {
    return (dispatch, getState) => {
     
    firebase.database().ref('profile/'+ 'student/').child(id).remove().then(()=>{
        dispatch({ type: 'DEL_STUDENT_PROFILE', id })
    })    
    }
  };
  





