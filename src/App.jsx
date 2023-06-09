import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppFooter from "./components/appFooter/AppFooter";
import AppHeader from "./components/appHeader/AppHeader";
import Spinner from "./components/spinner/Spinner";

const MainPage = lazy(()=> import('./components/pages/mainPage/MainPage'));
const ShopPage = lazy(()=> import('./components/pages/shopPage/ShopPage'));
const BlogPage = lazy(()=> import('./components/pages/blogPage/BlogPage'));
const AboutPage = lazy(()=> import('./components/pages/aboutPage/AboutPage'));
const Page404 = lazy(()=> import('./components/pages/page404/Page404'));

function App() {
  return (
    <Router>
      <AppHeader />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/shop' element={<ShopPage />}/>
            <Route path='/blog' element={<BlogPage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Suspense>
      </main>
      <AppFooter />
    </Router>
  );
}

export default App;
