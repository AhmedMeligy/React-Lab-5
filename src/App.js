import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Errorpage from './components/Errorpage/Errorpage';
import 'bootstrap/dist/css/bootstrap.css';
import Products from './components/Products/Products';
import Layout from './components/Layout/Layout';
import Addproduct from './components/Products/Addproduct';

let routers = createBrowserRouter([
  { path:'', element: <Layout />,errorElement: <Errorpage/>  , children: [
    { path: '/products', element: <Products /> },
    { path: '/addproducts', element: <Addproduct /> },
  ]}
]);


function App() {
  return (
    <RouterProvider router={routers}>
    </RouterProvider>
  );
  
}

export default App;
