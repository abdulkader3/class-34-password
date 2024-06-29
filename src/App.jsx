import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Loging from './pages/Loging';

function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Loging/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={shanto} />
    </>
  );
}

export default App;
