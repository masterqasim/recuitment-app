const initState = {
    allMyPosts:[]
}
const companyMyPostReducer = (state = initState, action) => {
    switch(action.type){
      case 'FETCH_ALL_POST':  
      console.log('new id=>>',action.asp)
      return {
        allMyPosts:action.asp
      };
      default :
      return state
    }
    
  };
  
  export default companyMyPostReducer;