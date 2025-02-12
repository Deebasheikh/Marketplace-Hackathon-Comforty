'use client';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const Checkout = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cartItems') || '[]'));
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartItems }),
    });

    const data = await response.json();

    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      <button 
        className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md"
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Proceed to Payment'}
      </button>
    </div>
  );
};

export default Checkout;
