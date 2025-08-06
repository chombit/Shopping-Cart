import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addProduct } from '../store/productSlice';

const AddProductModal = ({ close }) => {
  const [form, setForm] = useState({ title: '', description: '', price: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...form, price: parseFloat(form.price) }));
    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow w-96">
        <h3 className="text-lg font-bold mb-4">Add Product</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Title"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border px-3 py-2"
          />
          <input
            type="text"
            placeholder="Description"
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border px-3 py-2"
          />
          <input
            type="number"
            placeholder="Price"
            required
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full border px-3 py-2"
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={close} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
