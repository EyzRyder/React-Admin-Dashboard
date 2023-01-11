import {
  createBrowserRouter,
  createRoutesFromElements,
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

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>
      
      <Route index element={<Home />} />

      <Route path='login' element={<Login />} />

      <Route path='users'>
        <Route index element={<List />} />
        <Route path=':userId' element={<Single />} />
        <Route path='new' element={<New />} />
      </Route>

      <Route path='products' >
        <Route index element={<List />} />
        <Route path=':productId' element={<Single />} />
        <Route path='new' element={<New />} />
      </Route>

      <Route path='*' element={<NotFound />} />

    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
