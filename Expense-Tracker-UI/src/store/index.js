    import expenseReducer from './expenses';
import authReducer from './auth';
    import { configureStore } from '@reduxjs/toolkit';

    const store = configureStore({
        reducer: {auth:authReducer ,expense:expenseReducer}
    });
    
    export default store;