'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.log('logging error', error);
  }, [error]);

  return (
    <div>
      <h1 className='border p-10 text-2xl text-red-500'>Error Page</h1>
      <div>
        <p className='p-8 px-4 text-xl font-bold'>{error.message}</p>
      </div>
    </div>
  );
}
