import { useRoutes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import About from '../pages/About'
import Home from '../pages/Home'
import NoPage from '../pages/NoPage';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'about',
        element: <About />,        
      },
			{ path: '*', element: <NoPage /> },
    ],
  },
];

const AppRoutes = () => {
	const element = useRoutes(routes);
	return element;
}

export default AppRoutes