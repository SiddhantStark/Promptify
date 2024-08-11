import React from 'react';
import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
<<<<<<< HEAD
    title: "Promptify",
=======
    title: "Promptopia",
>>>>>>> cdbe64c3606cd1e6e53fae01dea2d6b871f99369
    description: "Discover and Share Prompts"
}

const ROOTlayout = ({children}) => {
    //layout will be wrapped around everything
  return (
    <html lang='en'>
      <body>
<<<<<<< HEAD
        <Provider>
=======
>>>>>>> cdbe64c3606cd1e6e53fae01dea2d6b871f99369
        <div className="main">
            <div className='gradient' />
        </div>
        <main className="app">
            <Nav/>
            {children}
        </main>
<<<<<<< HEAD
        </Provider>
=======
>>>>>>> cdbe64c3606cd1e6e53fae01dea2d6b871f99369
      </body>
    </html>
  )
}

export default ROOTlayout;
