import React, { createContext, useContext } from 'react';
import { getStorageItem, setStorageItem } from 'utils/useLocalStorage';
import useReducerWithSideEffects, {
    UpdateWithSideEffect,
    Update,
} from 'use-reducer-with-side-effects';

const AppContext = createContext();

const reducer = (prevState, action) => {
    // TODO:
    const { type } = action;
    if (type === SET_TOKEN) {
        const { payload: jwtToken } = action;
        const newState = {
            ...prevState,
            jwtToken,
            isAuthenticated: true,
        };
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            setStorageItem('jwtToken', jwtToken);
        });
    } else if (type === DELETE_TOKEN) {
        const newState = { ...prevState, jwtToken: '', isAuthenticated: false };
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            setStorageItem('jwtToken', '');
        });
    } else if (type === SET_ISSTAFF) {
        const { payload: is_staff } = action;
        const newState = { ...prevState, is_staff };
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            console.log('newState: ', newState);
        });
    }
    // TODO ...지속적인 리듀서 개발
    return prevState;
};

export const AppProvider = ({ children }) => {
    const jwtToken = getStorageItem('jwtToken', '');
    const [store, dispatch] = useReducerWithSideEffects(reducer, {
        jwtToken,
        isAuthenticated: jwtToken.length > 0,
    });
    return (
        <AppContext.Provider value={{ store, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);

// Actions
const SET_TOKEN = 'APP/SET_TOKEN';
const DELETE_TOKEN = 'APP/DELETE_TOKEN';
const SET_ISSTAFF = 'APP/SET_ISSTAFF';

// Action Creators
export const setToken = (token) => ({ type: SET_TOKEN, payload: token });
export const setIsStaff = (is_staff) => ({
    type: SET_ISSTAFF,
    payload: is_staff,
});
export const deleteToken = () => ({ type: DELETE_TOKEN });
