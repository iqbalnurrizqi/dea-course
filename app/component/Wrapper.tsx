import React from 'react'

type Paramsprops = {
    title: string,
    children?: React.ReactNode
    
}

export default function Wrapper({ title, children }: Paramsprops): React.ReactElement {
  return (
    <section className='container mx-auto px-4'>
        <h1 className='text-center text-xl mb-8'>{title}</h1>
        {children}
    </section>
  )
}
