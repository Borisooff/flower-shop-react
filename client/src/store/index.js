import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import products from '../components/shopList/productsSlice';
import filters from '../components/filter/filtersSlice';
import search from '../components/searchPanel/searchSlice';
import priceFilter from '../components/searchPanel/priceFilterSlice';
import user from '../pages/loginPage/userSlice';

const middleware = getDefaultMiddleware({
     immutableCheck: true,
     serializableCheck: false,
     thunk: true,
});

const store = configureStore({
     reducer: { products, filters, search, priceFilter, user },
     middleware,
     devTools: process.env.NODE_ENV !== 'poduction',
})

export default store;