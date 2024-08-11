<<<<<<< HEAD
'use client';

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;
=======
import React from 'react'

const Provider = () => {
  return (
    <div>
      
    </div>
  )
}

export default Provider
>>>>>>> cdbe64c3606cd1e6e53fae01dea2d6b871f99369
