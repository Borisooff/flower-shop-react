import { fetchCategories } from "../http/categoryApi";

const UseCategoriesService = () => {
    const getAllFilters = async () => {
        const res = await fetchCategories();
        return res;
    }

    return { getAllFilters }
}

export default UseCategoriesService;