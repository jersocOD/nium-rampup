'use client'

import Image from 'next/image'
import {useState} from 'react'
import { Button } from '@chakra-ui/react';
import Basic from './form';

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        Welcome to the ramp-up!
      </div>
      <div className="font-bold">
        Count: {count}
      </div>
      {/* 
      FYI: Chakra UI and TailwindCSS tend to clash sometimes when styling components. 
      Hopefully it's not an issue with Nium's components, but that's why we specified color with 
      both class names and the Chakra UI colorScheme prop
      */}
      <Basic/>
      <Button className="bg-sky-600" colorScheme='blue' onClick={handleClick}>Increment</Button>
      <div>
        Hello world
      </div>
    </main>
  )
}
