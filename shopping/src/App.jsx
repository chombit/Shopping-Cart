
import './App.css'
import ProductList from './components/ProductList.jsx'
import CartTable from './components/CartTable.jsx'


function App() {
  return (
    <>
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-amber-400  ">🛒 Shopping Cart</h1>   
    </div>
    <ProductList />
    <CartTable />
    </>
  );
}

export default App;

  
