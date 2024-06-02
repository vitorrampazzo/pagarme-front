'use client';
import { useState } from 'react';

export default function BuggyButton() {
  const [buggy, setBuggy] = useState(false);

  if (buggy) {
    throw new Error('I crashed!');
  }

  return (
    <button className='bg-red-500' onClick={() => setBuggy(true)}>
      Click me to crash
    </button>
  );
}
