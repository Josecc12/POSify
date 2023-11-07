import React, { useEffect, useState } from 'react';
import { PosifyLayout } from '../../layout/PosifyLayout';
import { InventoryTable } from '../components/Inventory/InventoryTable';
import { usePosStore } from '../../hooks/usePos';
import { useForm } from '../../hooks/useForm';


const imageUrl = 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80';

export const BudgetPage = () => {
  const { startLoadingInventory, products } = usePosStore();

  const { searchTerm, onInputChange } = useForm({
    searchTerm: '',
  });

  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState({}); // Estado para las cantidades

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchProduct();
    }
  };

  useEffect(() => {
    startLoadingInventory();
  }, []);

  const onBudget = () => {
    console.log(items);
  }

  const calculateSubtotal = () => {
    let subtotal = 0;

    items.forEach((item) => {
      const quantity = quantities[item._id] || 0;
      subtotal += quantity * item.price;
    });

    return subtotal;
  };

  const updateQuantity = (productId, quantity) => {
    setQuantities({ ...quantities, [productId]: quantity });
  };

  const searchProduct = () => {
    const productByName = products.find((product) => product.name.toLowerCase() === searchTerm.toLowerCase());
    const productByBarcode = products.find((product) => product.barcode === searchTerm);

    if (productByName) {
      const { name, barcode, price, _id } = productByName;
      setItems([...items, { name, barcode, imageUrl, price, _id }]);
      updateQuantity(_id, 1);
    } else if (productByBarcode) {
      const { name, barcode, price, _id } = productByBarcode;
      setItems([...items, { name, barcode, imageUrl, price, _id }]);
      updateQuantity(_id, 1);
    } else {
      console.log('Producto no encontrado');
    }

    onInputChange({ target: { name: 'searchTerm', value: '' } });
  };

  const removeItem = (itemId) => {
    setItems(items.filter((item) => item._id !== itemId));
    setQuantities((prevState) => {
      const newState = { ...prevState };
      delete newState[itemId];
      return newState;
    });
  };

  return (
    <PosifyLayout>
      <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">
        <div className="w-full h-full overflow-x-auto overflow-y-auto shadow-2xl">
          <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <header className="text-center">
                  <h1 className="my-3 text-xl font-bold text-gray-900 sm:text-3xl">Cotizacion</h1>
                </header>

                <div className="relative">
                  <label htmlFor="Search" className="sr-only">
                    Search
                  </label>

                  <input
                    onKeyPress={handleKeyPress}
                    name='searchTerm'
                    value={searchTerm}
                    onChange={onInputChange}
                    type="text"
                    id="Search"
                    placeholder="Search for..."
                    className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm pl-4"
                  />

                  <span className="absolute inset-y-0 grid w-10 end-0 place-content-center">
                    <button type="button" className="text-gray-600 hover:text-gray-700">
                      <span className="sr-only">Search</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </button>
                  </span>
                </div>

                <div className="mt-8">
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li className="flex items-center gap-4" key={item._id}>
                        <img src={item.imageUrl || imageUrl} alt="" className="object-cover w-16 h-16 rounded" />
                        <div>
                          <h3 className="text-sm text-gray-900">{item.name}</h3>
                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                              <dt className="inline">Price:</dt>
                              <dd className="inline">{item.price}</dd>
                            </div>
                            <div>
                              <dt className="inline">barCode:</dt>
                              <dd className="inline">{item.barcode}</dd>
                            </div>
                          </dl>
                        </div>
                        <div className="flex items-center justify-end flex-1 gap-2">
                          <form onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor={`Line${item._id}Qty`} className="sr-only">
                              Quantity
                            </label>
                            <input
                              type="number"
                              min="1"
                              value={quantities[item._id] || 1}
                              onChange={(e) => updateQuantity(item._id, e.target.value)}
                              id={`Line${item._id}Qty`}
                              className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            />
                          </form>
                          <button
                            onClick={() => removeItem(item._id)} // Llama a la función para eliminar el ítem
                            className="text-gray-600 transition hover:text-red-600"
                          >
                            <span className="sr-only">Remove item</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.90-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end pt-8 mt-8 border-t border-gray-100">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      {/* Pricing details */}
                      <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>{calculateSubtotal().toFixed(2)}</dd>
                      </div>



                      <div className="flex justify-between">
                        <dt>Discount</dt>
                        <dd>Q0.00</dd>
                      </div>

                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>Q0.00</dd>
                      </div>
                    </dl>



                    <div className="flex justify-end">
                      <button
                        onClick={onBudget}
                        className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600">
                        Cotizar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PosifyLayout>
  );
};
