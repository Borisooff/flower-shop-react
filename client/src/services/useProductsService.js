import { useDispatch, useSelector } from 'react-redux';

import { fetchAllProducts, fetchOneProduct } from "../http/productsApi";
import { productsFetched, productsFetchedError, productsFetching, totalChanged } from '../components/shopList/productsSlice';

const useProductsService = () => {
    const dispatch = useDispatch()
    const { page, limit } = useSelector(state => state.products)
    const { activeFilter } = useSelector(state => state.filters)

    const getAllProducts = async () => {
        dispatch(productsFetching())
        try{
            const res = await fetchAllProducts(activeFilter, page, limit)
            dispatch(productsFetched(res.rows))
            dispatch(totalChanged(res.count))
        }catch(e){
            console.log(e.message)
            dispatch(productsFetchedError())
        }
    }

    const getBestSelers = async (offset = 4) => {
        const products = await fetchAllProducts()
        const sorted = products.rows.sort((product1, product2) => product1["sales"] < product2["sales"] ? 1 : -1)
        return sorted.slice(0, offset);
    }

    const getOneProduct = async (id) => {
        const res = await fetchOneProduct(id)
        return res
    }

    return { getAllProducts, getBestSelers, getOneProduct }
}

export default useProductsService;