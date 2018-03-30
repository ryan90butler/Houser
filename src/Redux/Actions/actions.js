import axios from 'axios'
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

export function updatePropertyName(text){
    return {
        type: UPDATE_PROPERTY_NAME,
        payload: text
    }
}
export function updatePropertyDescription(text){
    return {
        type: UPDATE_PROPERTY_DESCRIPTION,
        payload: text
    }
}
export function updateAddress(text){
    return {
        type: UPDATE_ADDRESS,
        payload: text
    }
}
export function updateCity(text){
    return {
        type: UPDATE_CITY,
        payload: text
    }
}
export function updateState(text){
    return {
        type: UPDATE_STATE,
        payload: text
    }
}
export function updateZip(text){
    return {
        type: UPDATE_ZIP,
        payload: text
    }
}
export function updateImgUrl (text){
    return {
        type: UPDATE_IMG_URL,
        payload: text
    }
}
export function updateLoanAmount(text){
    return {
        type: UPDATE_LOAN_AMOUNT,
        payload: text
    }
}
export function updateMonthlyMortgage(text){
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: text
    }
}
export function updateDesiredRent(text){
    return {
        type: UPDATE_DESIRED_RENT,
        payload: text
    }
}

export function clearFields(text){
    return {
        type: CLEAR_FIELD,
        payload: ''
    }
}
