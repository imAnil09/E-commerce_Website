import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import UserDetailsPage from "../Pages/UserDetailsPage";
import ProductsPage from "../Pages/ProductsPage";
import Root from "../Pages/Root";
import Product from "../Pages/Product";
import PageNotFound from "../Pages/PageNotFound";
import Cart from "../Pages/Cart";
import HelpCenter from "../Pages/HelpCenter";
import About from "../Pages/About";

const router = createBrowserRouter([
    {path:"/", element: <Root />,
    errorElement: <PageNotFound />,
    children: [
        {index:true, element:<LoginPage />},
        {path:"products", element: <ProductsPage />},
        {path:"products/:id", element: <Product />},
        {path:"cart", element: <Cart />},
        {path:"help_center", element: <HelpCenter />},
        {path:"about", element: <About />},
    ]},
])

export default router;