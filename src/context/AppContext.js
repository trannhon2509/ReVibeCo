import React, { createContext, useState, useContext } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: 'Scented Candle',
      price: 87.00,
      image: 'assets/product-1.png',
      subProducts: [
        { id: 101, name: 'Mini Candle', price: 20.00, image: '/assets/product-1.png' },
        { id: 102, name: 'Gift Candle', price: 50.00, image: '/assets/subproduct-2.png' },
        { id: 103, name: 'test', price: 50.00, image: '/assets/subproduct-2.png' }
      ]
    },
    {
      id: 2,
      name: 'Scented Wax',
      price: 35.00,
      image: 'assets/product-2.png',
      subProducts: [
        { id: 201, name: 'Wax Melt', price: 15.00, image: 'assets/subproduct-3.png' }
      ]
    },
    {
      id: 3,
      name: 'Scrunchies',
      price: 55.00,
      image: 'assets/product-3.png',
      subProducts: []
    },
    {
      id: 4,
      name: 'Hairclip',
      price: 35.00,
      image: 'assets/product-4.png',
      subProducts: [
        { id: 401, name: 'Fancy Hairclip', price: 25.00, image: 'assets/subproduct-4.png' }
      ]
    },
    {
      id: 5,
      name: 'Bandana',
      price: 45.00,
      image: 'assets/product-5.png',
      subProducts: []
    }
  ]);

  const [user] = useState({ name: 'John Doe', email: 'john.doe@example.com' });

  const [settings] = useState({ theme: 'light', language: 'en' });

  return (
    <AppContext.Provider value={{ products, user, settings }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
    