import {$authHost, $host} from "./index";

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', {name: category})
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}