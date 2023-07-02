import { Suspense } from 'react'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';

import Spinner from "./components/spinner/Spinner";

const AppRouter = () => {
    const { isAuth } = useSelector(state => state.user)

    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                {isAuth && authRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={Component} />
                )}
                 {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={Component} exact />
                )}
            </Routes>
        </Suspense>
    )
}

export default AppRouter;


