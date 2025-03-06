'use client'
import { useAccount } from 'wagmi';

import useStore from '@/store';
import { Button } from '@heroui/button';

export default function Home() {
  const bears = useStore((state:any) => state.bears)
  const increasePopulation = useStore((state:any) => state.increasePopulation)
  const removeAllBears = useStore((state:any) => state.removeAllBears)
  const {address} = useAccount()
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>{address}</div>
      <h1>bears store：{bears}</h1>
      <div className='flex items-center space-x-4'>
        <Button onClick={increasePopulation} color='primary'>one up</Button>
        {bears > 0 && <Button  onClick={removeAllBears} color='danger'>clear</Button>}
      </div>
    </section>
  );
}
