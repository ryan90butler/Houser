import { combineReducers } from 'redux';
import {
    UPDATE_PROPERTY_NAME,
    UPDATE_PROPERTY_DESCRIPTION,
    UPDATE_ADDRESS,
    UPDATE_CITY,
    UPDATE_STATE,
    UPDATE_ZIP,
    UPDATE_IMG_URL,
    UPDATE_LOAN_AMOUNT,
    UPDATE_MONTHLY_MORTGAGE,
    UPDATE_DESIRED_RENT,
    CLEAR_FIELD
} from '../Actions/constraints';

function propertyName (state = '', action){
    if(action.type === UPDATE_PROPERTY_NAME){
        return action.payload
    }
    return state;
}
function propertyDescription (state = '', action){
    if(action.type === UPDATE_PROPERTY_DESCRIPTION){
        return action.payload
    }
    return state;
}
function address (state = '', action){
    if(action.type === UPDATE_ADDRESS){
        return action.payload
    }
    return state;
}
function city (state = '', action){
    if(action.type === UPDATE_CITY){
        return action.payload
    }
    return state;
}
function state (state = '', action){
    if(action.type === UPDATE_STATE){
        return action.payload
    }
    return state;
}
function zip (state = null, action){
    if(action.type === UPDATE_ZIP){
        return action.payload
    }
    return state;
}
function imgUrl (state = '', action){
    if(action.type === UPDATE_IMG_URL){
        return action.payload
    }
    return state;
}
function loanAmount (state = null, action){
    if(action.type === UPDATE_LOAN_AMOUNT){
        return action.payload
    }
    return state;
}
function monthlyMortgage (state = null, action){
    if(action.type === UPDATE_MONTHLY_MORTGAGE){
        return action.payload;
    }
    return state;
}
function desiredRent (state = null, action){
    if(action.type === UPDATE_DESIRED_RENT){
        return action.payload
    }
    return state;
}
function recommendedRent (state = '', action){
    if(action.type === UPDATE_MONTHLY_MORTGAGE){
        return action.payload * 1.25;
    }
    return state;
}
function clearFields (state = '', action){
    if(action.type === CLEAR_FIELD){
        return action.payload
    }
    return state;
}

const rootReducer = combineReducers({propertyName, propertyDescription,address,city,state,zip,imgUrl,loanAmount,monthlyMortgage,desiredRent, clearFields, recommendedRent});

export default rootReducer;