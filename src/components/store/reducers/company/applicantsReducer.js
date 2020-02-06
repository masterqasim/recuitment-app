const initState = {
    applicants:[]
}
const applicantsReducer = (state = initState, action) => {
    switch(action.type){
      case 'FETCH_APPLICANTS':  
      console.log('new id=>>',action.asp)
      return {
        applicants:action.asp
      };
      default :
      return state
    }
    
  };
  
  export default applicantsReducer;