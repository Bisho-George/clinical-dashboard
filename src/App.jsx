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
import InventoryPage from "./pages/InventoryPage/InventoryPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* <Route index element={<Dashboard />} /> */}
      <Route index element={<InventoryPage />} />
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
