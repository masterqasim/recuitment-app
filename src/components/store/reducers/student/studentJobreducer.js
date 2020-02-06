const initState = {
    specificCompany:[]
}
const studentJobReducer = (state = initState, action) => {
    switch(action.type){
      case 'FETCH_JOBPOSTS':  
      // console.log('new id=>>',action.asp)
      return {
        specificCompany: action.asp
      };
      case 'APPLY':  
      // console.log('new id=>>',action.id)
      return {
        specificCompany:[...state.specificCompany.map((res)=>{
          if(action.id===res.id){
            let a ={
              contact:res.contact,
              description:res.description,
              id:res.id,
              isApplyed:!res.isApplyed,
              name:res.name,
              title:res.title
            }
            return a;
          }
          else{
            return res
          }
          
        })]
      // specificCompany:[...state.specificCompany.filter(specificCompany=>
      //   specificCompany.id !== action.id
      //   )]
      }
      ;
      default :
      return state
    }
    
  };
  
  export default studentJobReducer;