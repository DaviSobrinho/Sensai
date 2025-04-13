import React from 'react'

export default function AuthLayout ({children}: Readonly<{children: React.ReactNode;
}>) {
  return (
    <div className='flex justify-center pt-40'>{children}</div>)
}
