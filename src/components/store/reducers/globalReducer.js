const initState = {
    islogin:''
}
const globalReducer = (state = initState, action) => {
    switch(action.type){
      case 'ISLOGIN_YES':
        return {
            islogin : state.islogin=true
        };
        case 'ISLOGIN_NO':
            return{
                islogin : state.islogin=false
            }
      default :
      return state
    }
    
  };
  
  export default globalReducer;