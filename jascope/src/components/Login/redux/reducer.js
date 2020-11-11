import { GET_USER_CONFIG } from "../../../types";

const initialState = {
    profileId: 0,
    userId: 0,
    name: '',
    modulesAllowed:  []
}

export function userConfigReducer ( state = initialState, action ){

    let payload = action.payload;

    console.log("ACTION")
    console.log(action)
    
    switch (action.type) {        
        case GET_USER_CONFIG:

            return {
                profileId: action.payload.profileId,
                userId: action.payload.userId,
                name: action.payload.name,
                modulesAllowed: action.payload.modulesAllowed
            };

        default: 
            return state;
    }
} 
