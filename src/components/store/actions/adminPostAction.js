import * as firebase from "firebase";

export const fetchCompanyPost = (data) => {
    return (dispatch, getState) => {
      // make async call to database
      let userUid = localStorage.getItem("userUid");
      firebase.database().ref('mypost/').on("value",(data)=>{
        let userData = data.val();
        let arr=[]
        // console.log(userData,'######')
        if(userData){
            for(var key in userData){
                for(var key2 in userData[key]){
                    // console.log(userData[key][key2])
                    let obj={
                        Name:userData[key][key2].name ,
                        title:userData[key][key2].title,
                        description: userData[key][key2].description,
                        contact:userData[key][key2].contact,
                        id:userData[key][key2].id,
                        pid:key
                    }
                    arr.push(obj)
                }
            }
            dispatch({
                type: "FETCH_COMPANY_POST",
                asp: arr
            })
            arr=[]
        }
      })
     
    }
};
export const delCompanyPost = (id,pid) => {
    // console.log(id,"$",pid)
    return (dispatch, getState) => {
        firebase.database().ref('mypost/' + pid).child(id).remove().then(()=>{
            // firebase.database().ref('post/').child(id).remove()
            dispatch({ type: 'DEL_COMPANY_POST', id })
        }) 
        // dispatch({ type: 'DEL_COMPANY_POST', id })   
    }
  };