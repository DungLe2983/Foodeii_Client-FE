import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Search from '../pages/Search.js';
import About from '../pages/About';

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
                path: 'search',
                element: <Search />,
            },
            {
                path: 'about',
                element: <About />,
            },
        ],
    },
]);

export default router;
