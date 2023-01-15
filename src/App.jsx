import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './Layouts/RootLayout/RootLayout';

import Home from "./pages/home/Home"
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import NotFound from './pages/NotFound/NotFound';
import Single from './pages/single/Single';

import { productInputs, userInputs } from "./formSource";
import { AuthContext } from './contexts/AuthContext';
import { useContext } from 'react';




function App() {
  const { currentUser } = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };


  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<RootLayout />}>

        <Route index element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />

        <Route path='login' element={<Login />} />

        <Route path='users'>
          <Route index element={
            <RequireAuth>
              <List />
            </RequireAuth>
          } />
          <Route path=':userId' element={
            <RequireAuth>
              <Single />
            </RequireAuth>
          } />
          <Route path='new' element={
            <RequireAuth>
              <New inputs={userInputs} title="Add New User" />
            </RequireAuth>
          } />
        </Route>

        <Route path='products' >
          <Route index element={
            <RequireAuth>
              <List />
            </RequireAuth>
          } />
          <Route path=':productId' element={
            <RequireAuth>
              <Single />
            </RequireAuth>
          } />
          <Route path='new' element={
            <RequireAuth>
              <New inputs={productInputs} title="Add New Product" />
            </RequireAuth>
          } />
        </Route>

        <Route path='orders' >
          <Route index element={
            <RequireAuth>
              <List />
            </RequireAuth>
          } />
          <Route path=':orderId' element={
            <RequireAuth>
              <Single />
            </RequireAuth>
          } />
          <Route path='new' element={
            <RequireAuth>
              <New inputs={productInputs} title="Add New Product" />
            </RequireAuth>
          } />
        </Route>

        <Route path='deliveries' >
          <Route index element={
            <RequireAuth>
              <List />
            </RequireAuth>
          } />
          <Route path=':deliveriesId' element={
            <RequireAuth>
              <Single />
            </RequireAuth>
          } />
          <Route path='new' element={
            <RequireAuth>
              <New inputs={productInputs} title="Add New Product" />
            </RequireAuth>
          } />
        </Route>

        <Route path='*' element={<NotFound />} />

      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
