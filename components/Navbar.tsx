import clsx from 'clsx';
import NextLink from 'next/link';

import { SearchIcon } from '@/components/Icons';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import Wallet from '@/components/Wallet';
import { siteConfig } from '@/config/site';
import { Input } from '@heroui/input';
import { Kbd } from '@heroui/kbd';
import { Link } from '@heroui/link';
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/navbar';
import { link as linkStyles } from '@heroui/theme';

import LanguageSetting from './LanguageSetting';

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="md:flex justify-start items-center gap-1 hidden" href="/">
            <p className="text-inherit text-2xl font-bold">0xSpace</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-5">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          <a href="https://github.com/BiscuitCoder/web3-next-temp" rel='noopener' target='_blank' className='flex items-center space-x-[2px]'>
            <i className="ri-github-fill"></i>
            <span>Github</span>
            <i className="ri-external-link-line text-sm opacity-50"></i>
          </a>
          <a href="https://0xspace.tech/" target='_blank' rel='noopener' className='flex items-center space-x-[2px]'>
            <i className="ri-article-fill"></i>
            <span>Docs</span>
            <i className="ri-external-link-line text-sm opacity-50"></i>
          </a>
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <LanguageSetting/>
        </NavbarItem>
        
        <NavbarItem className="hidden md:flex">
          <Wallet/>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <LanguageSetting/>
        <Wallet/>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={'foreground'}
                href={`${item.href}`}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
