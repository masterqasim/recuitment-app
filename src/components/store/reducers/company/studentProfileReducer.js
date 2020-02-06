const initState = {
    allStudent:[]
}
const studentProfilsReducer = (state = initState, action) => {
    switch(action.type){
      case 'FETCH_ALL_STUDENTS':  
      console.log('new id=>>',action.asp)
      return {
        allStudent:action.asp
      };
      case 'APPLY':  
      console.log('new id=>>',action.id)
      return {
        allStudent:[...state.allStudent.filter(allStudent=>
          allStudent.id !== action.id
        )]};
      default :
      return state
    }
    
  };
  
  export default studentProfilsReducer;