import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
// import Admin from '../pages/Admin'
// import Gallery from '../pages/Gallery'

// import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'
import SubAdminPanel from '../pages/SubAdminPanel'


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "change-password",
                element : <ChangePassword/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
           
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    }
                ]
            },
            {
                path : "subadmin-panel",
                element : <SubAdminPanel/>,
                children : [
                    
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    }
                ]
            },
        ]
    }
])


export default router