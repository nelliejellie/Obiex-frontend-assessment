import logo from './logo.svg';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Root from './components/Root';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home />}/>
      </Route>
    )
  )
  return (
    <div className="App bg-[#1D283C] h-screen">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
