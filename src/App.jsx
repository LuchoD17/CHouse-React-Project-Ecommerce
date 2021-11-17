import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Efecto from './components/Efecto';

function App() {
  return(
    <> 
    <Navbar />
    <ItemListContainer greeting="Ecommerce Siglo 21" />
    <ItemCount />
    <Efecto stock={10} inicial={0}/>
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