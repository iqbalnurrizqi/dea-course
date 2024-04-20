import Image from 'next/image';
import React from 'react'

export default function Card() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="card card-body card-bordered shadow-lg bg-base-300 hover:bg-secondary hover:sahdow-xl hover:scale-105 transition-all h-56">
        <div className='flex items-center'>
          <div className='w-50 h-50 p-3 bg-primary rounded-full mr-3'></div>
          <p className='font-bold'>Username | Email</p>
        </div>
        <div className='overflow-y-auto rounded-lg'>
          <h3 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut est commodi tempore impedit culpa consectetur architecto accusantium veritatis earum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga enim deleniti iusto eveniet nihil repudiandae error vitae repellendus unde beatae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, recusandae non ex quae maiores voluptate repudiandae. Voluptates, quibusdam hic unde, magnam officia beatae fugit mollitia voluptatem necessitatibus, inventore autem animi!</h3>
        </div>
      </div>

    </div>
  );
}
