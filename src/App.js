import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Root from './components/Root';
import Detail from './screens/Detail';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home />}/>
        <Route path='/details/:id' element={<Detail />}/>
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
