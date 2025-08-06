import { useSelector } from 'react-redux';

const CartTable = () => {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-10 mx-6">
      <h2 className="text-3xl font-bold mb-3 mx-110">🧾 Cart Details</h2>
      <table className="w-full border text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">#</th>
            <th className="p-2">Title</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={idx}>
              <td className="p-2">{idx + 1}</td>
              <td className="p-2">{item.title}</td>
              <td className="p-2">${item.price}</td>
            </tr>
          ))}
          <tr className="font-bold bg-gray-50">
            <td className="p-2"></td>
            <td className="p-2">Total</td>
            <td className="p-2">${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
