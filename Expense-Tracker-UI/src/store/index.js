    import expenseReducer from './expenses';
import authReducer from './auth';
import premiumReducer from './premium';
    import { configureStore } from '@reduxjs/toolkit';

    const store = configureStore({
        reducer: {auth:authReducer ,expense:expenseReducer, premium:premiumReducer}
    });
    
    export default store;