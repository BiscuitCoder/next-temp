'use client'
import useStore from '@/store';
import { Button } from '@heroui/button';

export default function FeatZustand() {
  const bears = useStore((state) => state)
  const { increasePopulation, removeAllBears, updateRandomCount } = useStore((state) => state)

  return (
    <section className="space-y-2">
      <div>bears(persist):{bears.bears}</div>
      <div>count:{bears.count}</div>
      <div className='flex items-center space-x-4'>
        <Button onPress={() => increasePopulation(bears.bears)} color='primary'>bears++</Button>
        <Button onPress={updateRandomCount}>random count</Button>
        <Button onPress={removeAllBears} color='danger'>clear all</Button>
      </div>
    </section>
  );
}
