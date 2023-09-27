'use client'

import Image from 'next/image'
import {useState} from 'react'
import { Button } from '@chakra-ui/react';
import MadLibs from './madlibsform';

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);

  }

  return (
    <main style={{ backgroundColor: '#ADE9E8'}} className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image src={require('/images/madlibs.png')} width="500" height="500" alt=""/>
      </div>
      {/* 
      FYI: Chakra UI and TailwindCSS tend to clash sometimes when styling components. 
      Hopefully it's not an issue with Nium's components, but that's why we specified color with 
      both class names and the Chakra UI colorScheme prop
      */}
      <MadLibs></MadLibs>
    </main>
  )
}
