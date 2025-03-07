'use client'
import { useTranslation } from 'react-i18next';
import { useAccount } from 'wagmi';

import useStore from '@/store';
import { Button } from '@heroui/button';

export default function Home() {
  const bears = useStore((state) => state)
  const {increasePopulation,removeAllBears,updateRandomCount} = useStore((state) => state)
  const {address} = useAccount()
  const { t, i18n } = useTranslation()
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1>{t('hello')}</h1>
      <div>{address}</div>
      <h1>bears store：{bears.bears} | {bears.count}</h1>
      <div className='flex items-center space-x-4'>
        <Button onPress={()=>increasePopulation(bears.bears)} color='primary'>one up</Button>
        <Button onPress={updateRandomCount}>updateRandomCount</Button>
        <Button  onPress={removeAllBears} color='danger'>clear</Button>
      </div>
    </section>
  );
}
