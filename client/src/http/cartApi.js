import { $host } from "./index";

export const addProductToCart = async (cart) => {
    const { data } = await $host.post('api/cart/add-to-cart/', cart)
    return data
}

export const getCart = async (userId) => {
    const { data } = await $host.get('api/cart/' + userId)
    return data
}

export const deleteProductFromCart = async (cartId, productId) => {
    const { data } = await $host.delete(`api/cart/${cartId}/products/${productId}`);
    return data;
}

export const buyCart = async (id) => {
    const { data } = await $host.post(`api/cart/buy/` + id);
    return data;
}