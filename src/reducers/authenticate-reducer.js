const initialAuthenticationState = {
   name: undefined,
};

import update from 'immutability-helper';

export default function (state = initialAuthenticationState, action) {
    switch (action.type) {
        case 'ON_USER_LOGIN':

            return update(state, 
            {
                name: { $set: action.payload.user },
            });

            break;
        case 'ON_USER_LOGOUT':
            
            return update(state, 
            {
                name: { $set: undefined },
            });
    }
    
    return state;
}