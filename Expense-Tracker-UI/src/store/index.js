    import expenseReducer from './expenses';

    import { configureStore } from '@reduxjs/toolkit';

    const store = configureStore({
        reducer: {expense:expenseReducer}
    });
    
    export default store;