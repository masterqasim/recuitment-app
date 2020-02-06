const initState = {
    companyProfiles:[]
}
const adminCompanyReducer = (state = initState, action) => {
    switch(action.type){
      case 'FETCH_COMPANY_PROFILES':
        console.log('new todo',action.asp)
        return {
          // companyProfiles:[...state.companyProfiles,action.asp]

            companyProfiles :  action.asp
           
        };
      case 'DEL_COMPANY_PROFILE':  
      console.log('new id=>>',action.id)
      return {
        companyProfiles: [...state.companyProfiles.filter(companyProfiles=>
          companyProfiles.id !== action.id
          )]
        
      };
      default :
      return state
    }
    
  };
  
  export default adminCompanyReducer;