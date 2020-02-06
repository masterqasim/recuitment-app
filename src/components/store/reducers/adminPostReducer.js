const initState = {
    JobPosts:[]
}
const adminPostReducer = (state = initState, action) => {
    switch(action.type){
      case 'FETCH_COMPANY_POST':
        // console.log('new todo',action.asp)
        return {
            JobPosts : action.asp
        };
      case 'DEL_COMPANY_POST':  
      console.log('new id=>>',action.id)
      return {
        JobPosts: [...state.JobPosts.filter(a=>
            a.id !== action.id
            )]
        
      };
      default :
      return state
    }
    
  };
  
  export default adminPostReducer;