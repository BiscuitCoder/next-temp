'use client'
import {
  useEffect,
  useMemo,
} from 'react';

import { useTranslation } from 'react-i18next';

import {
  changeLang,
  I18N_CACHE_KEY,
  langMap,
} from '@/i18n';
import { Button } from '@heroui/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown';

const LanguageSetting = () => {
  const langList = Object.entries(langMap);
  const {i18n} = useTranslation();
  useEffect(()=>{
    changeLang( localStorage.getItem(I18N_CACHE_KEY)|| 'en');
  },[]);

  const currentLang = useMemo(() => {
    return langList.find(([label, value]) => value === i18n.language)?.[0] || '';
  }, [i18n.language]);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" radius='full' size='sm'>{currentLang}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {
          langList.map(([label, value]) => (
            <DropdownItem key={value} onPress={() => changeLang(value)}>{label}</DropdownItem>
          ))
        }
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSetting;