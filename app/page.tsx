'use client'
import {
  useEffect,
  useState,
} from 'react';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const [imgIndex, setImgIndex] = useState(0);
  const setImgIndexHandler = () => {
    const randomNum = Math.floor(Math.random() * 10);
    setImgIndex(randomNum);
  }
  useEffect(() => {
    setImgIndexHandler();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 space-y-6">
      <h1 className='text-xl font-bold text-center text-blue-500'>{t('hello')}</h1>
      <img src={`/${imgIndex}.webp`} alt='emoji' className='w-[40%] rounded-xl cursor-pointer hover:scale-[95%] active:scale-[80%] transition-all' title='Random image' onClick={setImgIndexHandler} />
    </section>
  );
}
