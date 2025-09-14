"use client"
import {useState} from 'react';
import Link from "next/link";
import { asLink, Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import WordMark from "@/components/WordMark";
import ButtonLink from "@/components/ButtonLink";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

type NavBarProps = {
    settings:Content.SettingsDocument
}
export default function NavBar({settings}: NavBarProps) {
    const [open, setOpen]= useState(false);
    const pathName = usePathname();
  return (
        <nav aria-label="main" className="py-4 px-4 md:py-6 md:px-6">
            <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
                <div className="flex items-center justify-between">
                    <Link href="/" className='z-50' onClick={()=>setOpen(!open)}>
                        <WordMark />
                        <span className="sr-only">Logo for Art1.site home page</span>
                    </Link>
                     <button className="block p-2 text-3xl text-white md:hidden" aria-expanded={open} onClick={()=>setOpen(!open)}>
                        <MdMenu/>
                        <span className="sr-only">Open menu</span>
                     </button>
                </div>
                <div className={clsx("fixed bottom-0 right-0 left-0 top-0 z-40 flex flex-col items-end gap-4 bg-[#070817] pr-4 pt-14 transform transition-300 ease-in-out motion-reduce:transition-none md:hidden", open ?"translate-x-0":"translate-x-[100%]")}>
                     <button className="block p-2 text-3xl text-white md:hidden fixed right-4 top-4 mb-4" aria-expanded={open} onClick={()=>setOpen(!open)}>
                        <MdClose/>
                        <span className="sr-only">Close menu</span>
                     </button>
                     <div className="grid justify-items-end gap-8">
                        {settings.data.navigation.map((item)=>{
                            if(item.cta_button){
                                return(
                                    <ButtonLink 
                                                key={item.label} 
                                                field={item.link} 
                                                className='' 
                                                onClick={()=>setOpen(!open)}
                                                aria-current={
                                                    pathName.includes(asLink(item.link) as string) ? "page": undefined
                                                }>
                                        {item.label}
                                    </ButtonLink>
                                )
                            }
                            return(
                                <PrismicNextLink key={item.label} field={item.link} 
                                                className='block px-3 text-3xl first:mt-8' 
                                                onClick={()=>setOpen(false)}
                                                aria-current={
                                                    pathName.includes(asLink(item.link) as string) ? "page": undefined
                                                }>
                                    {item.label}
                                </PrismicNextLink>
                            )
                        })}
                     </div>
                </div>
                
                <ul className="hidden gap-6 md:flex">
                {settings.data.navigation .map((item)=>{
                    if(item.cta_button){
                        return(
                        <li key={item.label} >
                            <ButtonLink 
                                    field={item.link} 
                                    className="" 
                                    aria-current={pathName.includes(asLink(item.link) as string) ? "page": undefined}
                            >
                                {item.label}
                             </ButtonLink>
                        </li>)
                    }
                    return (
                    <li key={item.label}>
                        <PrismicNextLink  
                                    field={item.link}
                                     className="inline-flex min-h-11 items-center"
                                     aria-current={pathName.includes(asLink(item.link) as string) ? "page": undefined}
                                     >
                        {item.label}
                        </PrismicNextLink>
                    </li>
                )})}
                </ul>
            </div>
        </nav>
  )
}
