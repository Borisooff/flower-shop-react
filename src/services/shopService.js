import { useHttp } from "../hooks/http.hook";

const useShopService = () => {
    const { loading, error, request, clearError } = useHttp();

    const getAllProducts = async () => {
        const res = await request('http://localhost:3000/products');
        return res;
    }

    const getBestSelers = async (offset = 4) => {
        const res = await getAllProducts();
        const sorted = res.sort((product1, product2) => product1["sales"] < product2["sales"] ? 1 : -1)
        return sorted.slice(0, offset);
    }

    const getAllFilters = async () => {
        const res = await request('http://localhost:3000/filters');
        return res;
    }

    return { loading, error, request, clearError, getBestSelers, getAllProducts, getAllFilters }
}

export default useShopService;