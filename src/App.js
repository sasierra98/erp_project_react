import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './Layout/MainLayout/index';
import { InventoryPage } from './Pages/Inventory';

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/inventories",
          element: <InventoryPage />,
        }
      ]
    }
  ]);
} 

function App() {
  return (
    <MainLayout />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"     
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
