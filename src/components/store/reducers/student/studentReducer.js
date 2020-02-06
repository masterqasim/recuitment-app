const initState = {
    company:[]
}
const studentReducer = (state = initState, action) => {
    switch(action.type){
      case 'FETCH_COMPANIES':
        console.log('new todo',action.asp)
        return {
            company:action.asp
            // company:[...state.company.filter((v,i) => company.indexOf(v) === i)]
            // company:[...state.company.filter((v,i) => state.company.indexOf(v) === i)]
        };
      default :
      return state
    }
    
  };
  
  export default studentReducer;