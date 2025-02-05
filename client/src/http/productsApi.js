import { $authHost, $host } from "./index";

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product)
    return data
}

export const fetchAllProducts = async (categoryId = null, page = null, limit = null) => {
    const { data } = await $host.get('api/product?', {
        params: {
            categoryId, page, limit
        }
    })
    return data
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('api/product/' + id)
    return data
}

export const deleteProductFromBd = async (id) => {
    const { data } = await $host.post('api/product/' + id)
    return data
}


