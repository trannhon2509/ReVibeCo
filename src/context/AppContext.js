import React, { createContext, useState, useContext } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: 'Scented Candle',
      price: 50000,
      image: 'assets/product-1.png',
      subProducts: [
        { id: 101, name: 'Scented Candle 1', price: 50000, image: 'https://i.pinimg.com/originals/52/76/91/527691adb799eaadeaeeb59d87661130.jpg' },
        { id: 102, name: 'Scented Candle 2', price: 50000, image: 'https://i.pinimg.com/originals/61/04/d6/6104d6085eb17e6f7da136ce90d0fd5f.jpg' },
        { id: 103, name: 'Scented Candle 3', price: 50000, image: 'https://i.pinimg.com/originals/76/c7/df/76c7df861e48fd200ae9bb3e718a3aa2.jpg' },
        { id: 104, name: 'Combo Scented Candle 1', price: 50000, image: 'https://i.pinimg.com/originals/cb/12/1d/cb121d61965484b91bac0c59291049a9.jpg' },
        { id: 105, name: 'Combo Scented Candle 2', price: 50000, image: 'https://i.pinimg.com/originals/c2/99/ec/c299ec0e08fa2eecf520ea26e532d09a.jpg' },
        { id: 106, name: 'Combo Scented Candle 3', price: 50000, image: 'https://i.pinimg.com/originals/ca/57/b2/ca57b236a752d3a0025d8dde7321a1b9.jpg' }
      ]
    },
    {
      id: 2,
      name: 'Scented Wax',
      price: 30000,
      image: 'assets/product-2.png',
      subProducts: [
        { id: 201, name: 'Wax Melt 1', price: 30000, image: 'https://i.pinimg.com/originals/4a/a9/7f/4aa97f47b7ad9af64aaefae0e565d32e.jpg' },
        { id: 202, name: 'Wax Melt 2', price: 30000, image: 'https://i.pinimg.com/originals/60/7f/6f/607f6fc307a0742d2c8da0591e0801d6.jpg' },
        { id: 203, name: 'Wax Melt 3', price: 30000, image: 'https://i.pinimg.com/originals/a7/c2/65/a7c2658a3f18b52288bd1c8ebad4cbbf.jpg' },
        { id: 204, name: 'Wax Melt 4', price: 30000, image: 'https://i.pinimg.com/originals/23/6f/2c/236f2c2e9f593e91364e3bd9c9ba81ae.jpg' },
        { id: 205, name: 'Wax Melt 5', price: 30000, image: 'https://i.pinimg.com/originals/00/ea/fa/00eafa4c013a9d8dfe8690c3c82264c5.jpg' }
      ]
    },
    {
      id: 3,
      name: 'Scrunchies',
      price: 20.000,
      image: 'assets/product-3.png',
      subProducts: [
        {id: 301, name: 'Scrunchies 1', price: 20000, image: 'https://i.pinimg.com/originals/08/5e/34/085e34730bf1896e45e2d51f84559bdb.jpg' },
        {id: 302, name: 'Scrunchies 2', price: 20000, image: 'https://i.pinimg.com/originals/b6/7b/81/b67b815b5cc6c69c5df71c132fe2b512.jpg' },
        {id: 303, name: 'Scrunchies 3', price: 20000, image: 'https://i.pinimg.com/originals/c7/5a/5e/c75a5e43211647472ce494d7cabd5cc6.jpg' },
        {id: 304, name: 'Scrunchies 4', price: 20000, image: 'https://i.pinimg.com/originals/bf/ef/48/bfef4870472b63e45df97aeed8a4e3fd.jpg' }
       
      ]
    },
    {
      id: 4,
      name: 'Hairclip',
      price: 35.000,
      image: 'assets/product-4.png',
      subProducts: [
        { id: 401, name: 'Fancy Hairclip 1', price: 35000, image: 'https://i.pinimg.com/originals/f0/16/c4/f016c48d3f76f3e9fffb6dd52d0b9be0.jpg' },
        { id: 402, name: 'Fancy Hairclip 2', price: 35000, image: 'https://i.pinimg.com/originals/ba/89/cd/ba89cd973407be5750c449d3839ad2f6.jpg' },
        { id: 403, name: 'Fancy Hairclip 3', price: 35000, image: 'https://i.pinimg.com/originals/c0/01/b4/c001b461303a6f10f76effb356ae858f.jpg' },
        { id: 404, name: 'Fancy Hairclip 4', price: 35000, image: 'https://i.pinimg.com/originals/28/aa/3b/28aa3bb56a9496cd85378b3b47a1faeb.jpg' }
      ]
    },
    {
      id: 5,
      name: 'Bandana',
      price: 35000,
      image: 'assets/product-5.png',
      subProducts: [
        { id: 501, name: 'Bandana 1', price: 35000, image: 'https://i.pinimg.com/originals/23/da/30/23da30d696d0124d223699a5bba539ca.jpg' },
        { id: 502, name: 'Bandana 2', price: 35000, image: 'https://i.pinimg.com/originals/c8/eb/dc/c8ebdc8d077ccfff4e7e2c86618906f3.jpg' },
        { id: 503, name: 'Bandana 3', price: 35000, image: 'https://i.pinimg.com/originals/66/2f/0b/662f0bde869a71b12ea335d471bdf66d.jpg' },
        { id: 504, name: 'Bandana 4', price: 35000, image: 'https://i.pinimg.com/originals/61/66/59/6166597ba4f20c7229db6a7f4b25202c.jpg' },
        { id: 505, name: 'Bandana 5', price: 35000, image: 'https://i.pinimg.com/originals/2a/0e/0a/2a0e0afb0545238640df1f76ab49cba0.jpg' },
        { id: 506, name: 'Bandana 6', price: 35000, image: 'https://i.pinimg.com/originals/4d/06/f3/4d06f3b8a232cdaf782aa7ca41e6c73c.jpg' }
        
      ]
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
    