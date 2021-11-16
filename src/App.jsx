import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return(
    <> 
    <Navbar />
    <ItemListContainer greeting="Ecommerce Siglo 21" />
    <ItemCount />
    </>
    )
}
export default App









/* <React.Fragment> */


// const App = () => {
//   return(
//     <> 
//     <navbar />
//     </>
//     ) 
// }


// JSX -> JavaScript XmL