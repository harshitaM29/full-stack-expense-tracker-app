import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {tokenId: null, isLoggedIn:false,};

const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers: {
        login(state, action) {
            state.tokenId = action.payload.idToken
            state.isLoggedIn = true;
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;