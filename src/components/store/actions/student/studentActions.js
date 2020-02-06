import * as firebase from "firebase";
import swal from 'sweetalert';

export const fetchcompanies = (data) => {
    return (dispatch, getState) => {
      // make async call to database
      firebase.database().ref('profile/' + 'company/').on("value",(data)=>{
        let companydata=data.val();
         let a =[];
         for(var key in companydata){
             let obj={
                 name:companydata[key].name ,
                 email:companydata[key].email,
                 contact: companydata[key].contact,
                 id:key
             }
             a.push(obj)
            //  console.log(a)
         }
         dispatch({
            type: "FETCH_COMPANIES",
            asp: a
            // asp: obj
        })

     })
     }
};
export const fetchposts = (id) => {
    return (dispatch, getState) => {
      // make async call to database
      let userUid = localStorage.getItem("userUid");
        let isApplyed=false ;
        let obj={};
        let arr =[];
        let arrr=[];
        // console.log(id,'post id')
        firebase.database().ref('mypost/'+ id).on("value",(data)=>{
            let companyposts=data.val();
            if(!companyposts){
                swal({
                    title: "hmmm...",
                    text: "No job posted yet",
                    icon: "error",
                    // dangerMode: true,
                  })
            }
            // console.log(companyposts)
            
            for(var key in companyposts){
                // console.log(companyposts[key])
                    obj={
                        name:companyposts[key].name ,
                        title:companyposts[key].title,
                        description: companyposts[key].description,
                        id:companyposts[key].id,
                        contact:companyposts[key].contact,
                        isApplyed,
                        key
                        }
                    arr.push(obj)
                    
            };
            arr.map((data)=>{ 
                firebase.database().ref('applyed/'+data.id).child(userUid)
                .once("value",(dat)=>{
                    let applyed=dat.val();
                    if(applyed){
                        // console.log(applyed.isApplyed)
                        // console.log(data.title)
                        obj={
                            name:data.name ,
                            title:data.title,
                            description: data.description,
                            id:data.id,
                            contact:data.contact,
                            isApplyed:true
                            }
                        // console.log(obj) 
                        arrr.push(obj)   
                    }
                    else{
                        // console.log(applyed)
                        // console.log(data.title)
                        obj={
                            name:data.name ,
                            title:data.title,
                            description: data.description,
                            id:data.id,
                            contact:data.contact,
                            isApplyed:false
                            }
                        // console.log(obj)
                        arrr.push(obj) 
                    }
                })
                
            })
            setTimeout(()=>{dispatch({
                type: "FETCH_JOBPOSTS",
                asp: arrr
            })
        },1000)
    arrr=[]
    arr=[]    
    })
       
        
     }
};
export const apply = (id) => {
    return (dispatch, getState) => {
     //CALL DATABASE
     let userUid = localStorage.getItem("userUid");
     firebase.database().ref('profile/'+ 'student/' + userUid).on("value",(data)=>{
        let userData = data.val()
            if(userData){
                let userUid = localStorage.getItem("userUid");
                let obj={
                    isApplyed:true
                }
                firebase.database().ref('applyed/'+ id).child(userUid).set(obj).then(()=>{
                    dispatch({ type: 'APPLY', id })
                })
            }else{
                swal({
                    title: "hmmm...",
                    text: "Complete your profile first",
                    icon: "error",
                    // dangerMode: true,
                  })
            }
        // console.log(userData)
    })
     
    }
  };
  





 