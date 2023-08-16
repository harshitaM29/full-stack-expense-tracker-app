import { createSlice } from '@reduxjs/toolkit';

const initialPremiumState = {premiumItems: []};

const premiumSlice =  createSlice({
    name:'premium',
    initialState:initialPremiumState,
    reducers: {
        replaceItems(state,action) {
           console.log(action.payload.items)
            state.premiumItems = action.payload.items;
          
        },
        
    }

});

export const premiumActions = premiumSlice.actions;

export default premiumSlice.reducer;