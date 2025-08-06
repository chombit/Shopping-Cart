import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded shadow p-4">
      <h3 className="font-bold">{product.title}</h3>
      <p>{product.description}</p>
      <p className="font-semibold text-green-600">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
