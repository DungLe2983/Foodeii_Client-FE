import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Search from '../pages/Search.js';
import About from '../pages/About';
import ProductPage from '../pages/ProductPage.js';
import Contact from '../pages/Contact.js';
import SignIn from '../pages/SignIn.js';
import SignUp from '../pages/SignUp.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: '/signin',
                element: <SignIn />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: ':products',
                element: <ProductPage />,
            },
            {
                path: ':products/:category',
                element: <ProductPage />,
            },
        ],
    },
]);

export default router;
