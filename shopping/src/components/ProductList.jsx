import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import AddProductModal from './AddProductModal';
import { useState } from 'react';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold mx-130 ">Products</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded mx-4 my-4" 
          >
          ➕ Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {isOpen && <AddProductModal close={() => setIsOpen(false)} />}
    </>
  );
};

export default ProductList;
