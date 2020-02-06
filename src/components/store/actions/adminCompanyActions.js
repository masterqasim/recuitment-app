import * as firebase from "firebase";

export const fetchCompanyProfiles = (data) => {
    return (dispatch, getState) => {
      // make async call to database
      let userUid = localStorage.getItem("userUid");
      let arr=[];
      console.log(arr,'$$$$$$$$$$')
        firebase.database().ref('profile/'+ 'company/').on("value",(data)=>{
            let userData = data.val()
            if(userData){
                for(var key in userData){
                    let obj={
                        Name:userData[key].name ,
                        Email:userData[key].email,
                        Contact: userData[key].contact,
                        id:key
                    }
                    arr.push(obj) 
                }
            }
            dispatch({
                type: "FETCH_COMPANY_PROFILES",
                asp: arr
            }) 
            arr=[]
 
        })
        //   console.log(arr) 
          arr=[]              
    }
};
export const delCompanyProfile = (id) => {
    return (dispatch, getState) => {
    firebase.database().ref('profile/'+ 'company/').child(id).remove().then(()=>{
        dispatch({ type: 'DEL_COMPANY_PROFILE', id })
       
    })    
    }
  };