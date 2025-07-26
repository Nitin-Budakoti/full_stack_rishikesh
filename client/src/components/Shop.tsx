import { useState } from 'react';
import rudraksh from '../assets/rudraksh.jpeg'
import oil from '../assets/ayurvedic_oil.jpeg'
import stick from '../assets/stiock.jpeg'
import shiva from '../assets/shiva.jpeg'
import { FaShoppingBag } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Rudraksha Mala',
    image: rudraksh,
    description: 'Original Rudraksha mala blessed in Ganga Ghat.',
    price: 499,
  },
  {
    id: 2,
    name: 'Ayurvedic Massage Oil',
    image: oil,
    description: 'Herbal oil for stress relief and joint pain.',
    price: 299,
  },
  {
    id: 3,
    name: 'Handmade Incense Sticks',
    image: stick,
    description: 'Organic incense made by local artisans.',
    price: 199,
  },
  {
    id: 4,
    name: 'Wooden Shiva Statue',
    image: shiva,
    description: 'Beautiful hand-carved Shiva idol from Rishikesh.',
    price: 1299,
  },
];

const Shop = () => {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([]);

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="w-full bg-gradient-to-br from-primary-50 to-primary-200 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-300/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-0 w-32 h-32 bg-primary-300/10 rounded-full blur-lg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <FaShoppingBag className="text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 font-playfair">
              Shop Local <span className="text-primary-600 font-dancing">Rishikesh</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary-500 rounded-full mb-6"></div>
          <p className="text-center text-primary-700 max-w-2xl">Explore the unique treasures and authentic crafts that showcase the rich cultural heritage of Rishikesh</p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item) => (
            <div key={item.id} className="card card-hover bg-white glass rounded-2xl shadow-soft overflow-hidden">
              <div className="relative overflow-hidden rounded-t-xl group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary-800 group-hover:text-primary-600 transition-colors">{item.name}</h3>
                <p className="text-sm text-primary-600">{item.description}</p>
                <p className="text-primary-600 font-bold mt-2">₹{item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 w-full btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-12 bg-white glass rounded-2xl shadow-soft p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-primary-800">🛒 Your Cart</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2 text-sm text-primary-700">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t border-primary-200 mt-4 pt-4 font-semibold text-lg text-primary-800">
              Total: ₹{totalAmount}
            </div>
            <button className="mt-4 w-full btn btn-secondary">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
