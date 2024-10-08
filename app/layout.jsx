import React from 'react';
import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Promptify",
    description: "Discover and Share Prompts"
}

const ROOTlayout = ({children}) => {
    //layout will be wrapped around everything
  return (
    <html lang='en'>
      <body>
        <Provider>
        <div className="main">
            <div className='gradient' />
        </div>
        <main className="app">
            <Nav/>
            {children}
        </main>

        </Provider>
      </body>
    </html>
  )
}

export default ROOTlayout;

