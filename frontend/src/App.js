import { BrowserRouter, Route  } from 'react-router-dom';
import Product from './components/Product';
import data from './data';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
      
            <div className="grid-cotainer">
                <header className="row">
                    <div>
                        <a className="brand" href="/">Comfort Fashion Store</a>
                    </div>
                    <div>
                        <a href="/cart">Cart</a>
                        <a href="/signin">Sign In</a>

                    </div>
                </header>
            
                 <main>
                     <div>
                     <div className="row center">
                      {data.products.map((product) => (
                          <Product key={product._id} product={product}></Product>
                      ))}
                    </div>
                    </div>        
                </main> 
                <footer className="row center">All Rights Reserved </footer>  
            </div>
  );
}
export default App;
