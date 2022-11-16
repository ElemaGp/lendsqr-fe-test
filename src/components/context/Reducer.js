//this "Reducer" file helps the "Context"(initial state) file interact with the "Actions"(the actions that can happen) file

const Reducer = (state, action) => {
    switch(action.type){
        case "GET_USER_START":  //if the action.type is LOGIN_START...
            return{
                user: null,
                isFetching: true,
                error: false,
            };
        case "GET_USER_SUCCESS": //if the action.type is LOGIN_SUCCESS...
            return{
                user: action.payload, //action.payload means the payload property from the Actions file. The action.payload gives us access to the user object from backend, so we can now access user.username, user.email etc.
                isFetching: false,
                error: false,
            };
        case "GET_USER_FAILURE": //if the action.type is LOGIN_FAILURE...
            return{
                user: null,
                isFetching: false,
                error: true,
            };
    
            default: 
                return state;
    }
};

export default Reducer;

