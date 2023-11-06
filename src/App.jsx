import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Orders/Orders';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Dashboard />} />
      <Route path="/orders" element={<Orders/>}/>
    </Route>
  )
);

function App() {

  return (
    <div className="App w-100">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
