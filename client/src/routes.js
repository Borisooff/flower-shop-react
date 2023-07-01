import { lazy } from "react";

import {ABOUT_ROUTE, ADMIN_ROUTE, CART_ROUTE, PRODUCT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, MAIN_ROUTE, BLOG_ROUTE, PAGE_404} from "./utils/consts";

const MainPage = lazy(()=> import('./pages/mainPage/MainPage'));
const ShopPage = lazy(()=> import('./pages/shopPage/ShopPage'));
const CartPage = lazy(()=> import('./pages/cartPage/CartPage'));
const BlogPage = lazy(()=> import('./pages/blogPage/BlogPage'));
const AboutPage = lazy(()=> import('./pages/aboutPage/AboutPage'));
const AdminPage = lazy(()=> import('./pages/adminPage/AdminPage'));
const LoginPage = lazy(()=> import('./pages/loginPage/LoginPage'));
const ProductPage = lazy(()=> import('./pages/productPage/ProductPage'));
const Page404 = lazy(()=> import('./pages/page404/Page404'));

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <AdminPage/>
    },
    {
        path: CART_ROUTE,
        Component: <CartPage/>
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <MainPage/>
    },
    {
        path: SHOP_ROUTE,
        Component: <ShopPage/>
    },
    {
        path: BLOG_ROUTE,
        Comment: <BlogPage/>
    },
    {
        path: ABOUT_ROUTE,
        Comment: <AboutPage/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <LoginPage/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <LoginPage/>
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: <ProductPage/>
    },
    {
        path: PAGE_404,
        Component: <Page404/>
    },
]