const initState = {
    studentProfiles:[]
}
const adminStudentReducer = (state = initState, action) => {
    switch(action.type){
      case 'FETCH_STUDENT_PROFILES':
        console.log('new todo',action.asp)
        return {
            // studentProfiles : [...state.studentProfiles, action.asp]
            studentProfiles : action.asp
        };
      case 'DEL_STUDENT_PROFILE':  
      console.log('new id=>>',action.id)
      return {
        studentProfiles: [...state.studentProfiles.filter(a=>
            a.id !== action.id
            )]
        
      };
      default :
      return state
    }
    
  };
  
  export default adminStudentReducer;