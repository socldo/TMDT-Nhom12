import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const routes = [
    {
      path: '/',
      element: HomePage,
      isShowHeader: true
    },
    {
        path: '/products',
        element: ProductPage,
        isShowHeader: true
    },
    {
        path: '/:type',
        element: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        element: SignInPage,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        element: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/products-details',
        element: ProductDetailPage,
        isShowHeader: true
    },

    {
        path: '/*',
        element: NotFoundPage
    }
]