import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AdminPage from "../pages/AdminPage/AdminPage";

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
        path: '/profile-user',
        element: ProfilePage,
        isShowHeader: true,
    },
    {
        path: '/system/admin',
        element: AdminPage,
        isShowHeader: false,
        isPrivate: true
    },

    {
        path: '/*',
        element: NotFoundPage
    }
]